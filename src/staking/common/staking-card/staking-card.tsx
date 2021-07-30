import clsx from 'clsx';
import React, { useMemo } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import {
  Typography,
  Link,
  Status,
  COIN_ICONS,
  humanizeNumeral,
  dateUtils
} from 'src/common';
import { Maybe } from 'src/graphql/_generated-hooks';
import { URLS } from 'src/router/urls';
import { StakingStatuses } from 'src/staking-config';
import { StakingLabel } from '../staking-label';
import { useStakingCardStyles } from './staking-card.styles';

export type StakingCardProps = {
  stacked?: boolean;
  APY?: Maybe<string>;
  token?: string[];
  stakingContractAddress?: string;
  totalValueLocked?: string;
  poolRate?: string;
  lockable?: boolean;
  loading?: boolean;
  unstakingStartDate?: string | null;
  chainId?: number;
  earnToken?: string;
  stakingEndBlock?: string | null;
  stakingEndDate?: string | null;
  status?: StakingStatuses;
};

export const StakingCard: React.VFC<StakingCardProps> = (props) => {
  const classes = useStakingCardStyles();

  const networkName = useMemo(() => {
    const chains: Record<number, string> = {
      1: 'Ethereum',
      56: 'Binance Smart Chain',
      97: 'Binance Testnet'
    };

    if (!props.chainId) return;

    return chains[props.chainId];
  }, [props.chainId]);

  return (
    <Link
      as={ReactRouterLink}
      to={URLS.staking.detail(props.stakingContractAddress)}
      className={clsx(classes.stakingCard, {
        [classes.loading]: props.loading
      })}
    >
      {props.stacked && (
        <Status color="black" variant="contained" className={classes.stacked}>
          Staked
        </Status>
      )}
      <Typography variant="h3" align="center" className={classes.title}>
        {props.loading
          ? 'Loading pool...'
          : props.token?.map((title, index) => {
              const Icon = COIN_ICONS.get(title);

              return (
                <React.Fragment key={title}>
                  {Icon && <Icon className={classes.icon} />} {title}{' '}
                  {index === 0 && props.token?.length === 2 && (
                    <span className={classes.plus}>+</span>
                  )}
                </React.Fragment>
              );
            })}
      </Typography>
      {StakingStatuses.archived === props.status ? (
        <Status color="black" variant="contained" className={classes.status}>
          Archived
        </Status>
      ) : (
        <Typography variant="h3" align="center" className={classes.apy}>
          APY {props.loading ? '...' : <>{humanizeNumeral(props.APY)} %</>}
        </Typography>
      )}
      <StakingLabel
        title="Earn"
        value={props.earnToken}
        variant="body1"
        loading={Boolean(props.loading)}
      />
      <StakingLabel
        title="Total value locked"
        value={<>${humanizeNumeral(props.totalValueLocked)}</>}
        variant="body1"
        loading={Boolean(props.loading)}
      />
      <StakingLabel
        title="Pool rate"
        value={
          <>
            {humanizeNumeral(props.poolRate)} {props.earnToken} / day
          </>
        }
        variant="body1"
        loading={Boolean(props.loading)}
      />
      {props.lockable && (
        <StakingLabel
          title="Unstaking on"
          value={dateUtils.format(props.unstakingStartDate ?? '')}
          variant="body1"
          loading={Boolean(props.loading)}
        />
      )}
      {networkName && (
        <StakingLabel
          title="Network"
          value={networkName}
          variant="body1"
          loading={Boolean(props.loading)}
        />
      )}
      {props.stakingEndBlock && props.stakingEndDate && (
        <StakingLabel
          title="New stakes till"
          value={`${dateUtils.format(props.stakingEndDate)} / ${
            props.stakingEndBlock
          }`}
          variant="body1"
          loading={Boolean(props.loading)}
        />
      )}
    </Link>
  );
};
