import React from 'react';
import clsx from 'clsx';

import { Typography, COIN_ICONS, humanizeNumeral, Status } from 'src/common';
import { StakingStatuses } from 'src/staking-config';
import { useStakingHeaderStyles } from './staking-header.styles';
import { StakingLabel } from '../staking-label';

export type StakingHeaderProps = {
  token?: string[];
  tokenKey: string;
  APY?: string;
  totalValueLocked?: string;
  className?: string;
  poolRate?: string;
  lockable?: boolean;
  loading: boolean;
  depositToken?: string;
  earnToken?: string;
  status?: StakingStatuses;
};

export const StakingHeader: React.FC<StakingHeaderProps> = (props) => {
  const classes = useStakingHeaderStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <div className={classes.content}>
        <div className={classes.title}>
          <Typography variant="h2" align="center">
            {props.loading
              ? 'Loading pool...'
              : props.token?.map((title, index) => {
                  const Icon = COIN_ICONS.get(title);

                  return (
                    <React.Fragment key={title}>
                      {Icon && <Icon className={classes.icon} />} {title}{' '}
                      {index === 0 && props.token?.length === 2 ? ' + ' : null}
                    </React.Fragment>
                  );
                })}
          </Typography>
          {props.status === StakingStatuses.archived ? (
            <Typography variant="h2" align="center">
              <Status
                color="black"
                variant="contained"
                className={classes.status}
              >
                Archived
              </Status>
            </Typography>
          ) : (
            <Typography variant="h2" align="center">
              APY {props.loading ? '...' : <>{humanizeNumeral(props.APY)} %</>}
            </Typography>
          )}
        </div>
        <div className={classes.info}>
          <StakingLabel
            variant="body1"
            title="Deposit"
            value={props.depositToken}
            loading={props.loading}
          />
          <StakingLabel
            variant="body1"
            title="Earn"
            value={props.earnToken}
            loading={props.loading}
          />
          <StakingLabel
            variant="body1"
            title="Total value locked"
            value={<>${humanizeNumeral(props.totalValueLocked)}</>}
            loading={props.loading}
          />
          <StakingLabel
            variant="body1"
            title="Pool rate"
            value={
              <>
                {humanizeNumeral(props.poolRate)} {props.earnToken} / day
              </>
            }
            loading={props.loading}
          />
        </div>
      </div>
    </div>
  );
};
