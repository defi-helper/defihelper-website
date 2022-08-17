import clsx from 'clsx';
import React, { useState } from 'react';
import { useMedia } from 'react-use';

import { bignumberUtils } from 'src/common/bignumber-utils';
import { Button } from 'src/common/button';
import { Grid } from 'src/common/grid';
import { ButtonBase } from 'src/common/button-base';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import { ReactComponent as UnknownIcon } from 'src/assets/icons/unknown-network.svg';
import { ReactComponent as ArrowUpIcon } from 'src/assets/icons/arrow-up.svg';
import { ReactComponent as ArrowDownIcon } from 'src/assets/icons/arrow-down.svg';
import { ReactComponent as QuestionMarkIcon } from 'src/assets/icons/questionmark.svg';
import { ReactComponent as CalculatorIcon } from 'src/assets/icons/сalculator.svg';
import { ReactComponent as ArrowLongRightIcon } from 'src/assets/icons/arrow-long-right.svg';
import { ReactComponent as LinkIcon } from 'src/assets/icons/link.svg';
import {
  ContractListSortInputTypeColumnEnum,
  InvestContractsQuery,
  SortOrderEnum,
  useInvestContractsQuery
} from 'src/graphql/_generated-hooks';
import { networksConfig } from 'src/network-config';
import { config } from 'src/config';
import { Link } from 'src/common/link';
import { useDialog } from 'src/common/dialog';
import { InvestApyDialog } from '../common/invest-apy-dialog';
import * as styles from './invest-pools.css';
import { InvestTooltip } from '../common/invest-tooltip';

export type InvestPoolsProps = {
  className?: string;
};

const icons = (
  tokens: Exclude<
    InvestContractsQuery['contracts']['list'],
    null | undefined
  >[number]['tokens']['reward']
) => (
  <div className={styles.contractIconsItemTokens}>
    {tokens.map((token, index) => {
      const key = String(index);

      const Icon = token.alias?.logoUrl ? (
        <img
          src={token.alias?.logoUrl}
          alt=""
          className={styles.contractIconsItem}
        />
      ) : (
        <Paper className={styles.contractUnknownNetworkIcon}>
          <UnknownIcon width="16" height="16" />
        </Paper>
      );

      return (
        <InvestTooltip
          key={key}
          className={styles.contractIconsItem}
          direction="left"
          text={
            <>
              {Icon}
              <div>
                <Typography variant="body2" family="mono">
                  {token.name}
                </Typography>
                <Typography variant="body2" family="mono">
                  <Link
                    target="_blank"
                    color="blue"
                    href={`${
                      networksConfig[token.network]?.explorerUrl
                    }/address/${token.address}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4
                    }}
                  >
                    Explorer{' '}
                    <LinkIcon
                      style={{
                        display: 'inline-block',
                        verticalAlign: 'middle'
                      }}
                      width="1em"
                      height="1em"
                    />
                  </Link>
                </Typography>
              </div>
            </>
          }
        >
          {Icon}
        </InvestTooltip>
      );
    })}
  </div>
);

const sortIcon = (
  sort: {
    column: ContractListSortInputTypeColumnEnum;
    order: SortOrderEnum;
  },
  column: ContractListSortInputTypeColumnEnum
) => {
  if (sort.column !== column) return <></>;

  let Icon = ArrowUpIcon;

  if (sort.column === column && column && sort.order === SortOrderEnum.Desc) {
    Icon = ArrowDownIcon;
  }

  return <Icon width="18" style={{ verticalAlign: 'middle' }} />;
};

export const InvestPools: React.VFC<InvestPoolsProps> = (props) => {
  const [sortBy, setSort] = useState({
    column: ContractListSortInputTypeColumnEnum.AprYear,
    order: SortOrderEnum.Desc
  });

  const [currentContract, setContract] = useState('');
  const isDesktop = useMedia('(min-width: 960px)');

  const [openApyDialog] = useDialog(InvestApyDialog);

  const [{ data, fetching }] = useInvestContractsQuery({
    variables: {
      filter: {
        hidden: false,
        deprecated: false,
        automate: {
          autorestake: true
        }
      },
      sort: [
        sortBy,
        {
          column: ContractListSortInputTypeColumnEnum.AprYear,
          order: SortOrderEnum.Desc
        },
        {
          column: ContractListSortInputTypeColumnEnum.Name,
          order: SortOrderEnum.Asc
        }
      ]
    }
  });

  const count = data?.contracts.pagination.count ?? 0;

  const handleChangeContract = (contract: string) => () => {
    setContract((prevContract) => (prevContract ? '' : contract));
  };

  const handleOpenApy =
    (
      metric: Exclude<
        Exclude<typeof data, null | undefined>['contracts']['list'],
        null | undefined
      >[number]['metric']
    ) =>
    async () => {
      const apr = {
        '1d': metric.aprDay,
        '7d': metric.aprWeek,
        '30d': metric.aprMonth,
        '365d(APY)': metric.aprYear
      };

      try {
        await openApyDialog({
          apr,
          staked: metric.myStaked
        });
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    };

  const handleSort = (column: typeof sortBy.column) => () => {
    setSort({
      column,
      order:
        sortBy.column === column && sortBy.order === SortOrderEnum.Desc
          ? SortOrderEnum.Asc
          : SortOrderEnum.Desc
    });
  };

  return (
    <Grid.Container className={clsx(props.className, styles.root)}>
      <Typography
        transform="uppercase"
        family="mono"
        variant="h2"
        className={styles.title}
      >
        top pools to invest right now
      </Typography>
      <div className={styles.table}>
        <div className={styles.tableHead}>
          <Typography variant="body2">Pool</Typography>
          <Typography variant="body2">Protocol</Typography>
          <Typography
            variant="body2"
            align="right"
            as="div"
            className={styles.colButton}
            onClick={handleSort(ContractListSortInputTypeColumnEnum.Tvl)}
          >
            TVL {sortIcon(sortBy, ContractListSortInputTypeColumnEnum.Tvl)}
          </Typography>
          <Typography
            variant="body2"
            align="right"
            as="div"
            className={styles.colButton}
            onClick={handleSort(ContractListSortInputTypeColumnEnum.AprYear)}
          >
            APY {sortIcon(sortBy, ContractListSortInputTypeColumnEnum.AprYear)}
          </Typography>
          <Typography
            variant="body2"
            align="right"
            as="div"
            className={styles.colButton}
            onClick={handleSort(
              ContractListSortInputTypeColumnEnum.AprWeekReal
            )}
          >
            Real APR (7d){' '}
            <InvestTooltip text="Actual 7-day annualized percentage rate">
              <QuestionMarkIcon />
            </InvestTooltip>{' '}
            {sortIcon(sortBy, ContractListSortInputTypeColumnEnum.AprWeekReal)}
          </Typography>
          <Typography
            variant="body2"
            align="right"
            as="div"
            className={styles.colButton}
            onClick={handleSort(ContractListSortInputTypeColumnEnum.AprBoosted)}
          >
            APY Boost{' '}
            <InvestTooltip text="Activate auto-staking to boost your yield">
              <QuestionMarkIcon />
            </InvestTooltip>{' '}
            {sortIcon(sortBy, ContractListSortInputTypeColumnEnum.AprBoosted)}
          </Typography>
        </div>
        <div className={styles.tableBody}>
          {fetching && !data?.contracts.list?.length && (
            <Typography variant="body2" className={styles.loading}>
              Loading...
            </Typography>
          )}
          {!fetching && !data?.contracts.list?.length && (
            <Typography variant="body2" className={styles.loading}>
              No data
            </Typography>
          )}
          {data?.contracts.list?.map((contract) => {
            const apyboost = bignumberUtils.mul(
              contract.metric.myAPYBoost,
              100
            );
            const realApy = bignumberUtils.mul(
              contract.metric.aprWeekReal,
              100
            );

            return (
              <div key={contract.id} className={styles.tableRow}>
                <Typography
                  variant="body2"
                  as="div"
                  className={clsx(styles.contractName, {
                    [styles.contractNameInactive]:
                      currentContract !== contract.id
                  })}
                  onClick={handleChangeContract(contract.id)}
                >
                  {contract.name}
                  <div className={styles.contractIcons}>
                    {networksConfig[contract.network] && (
                      <img
                        src={networksConfig[contract.network].icon}
                        alt=""
                        className={styles.contractIconsItem}
                      />
                    )}
                    {Boolean(
                      [...contract.tokens.reward, ...contract.tokens.stake]
                        .length
                    ) && (
                      <div className={styles.contractIconsItemTokens}>
                        {icons(contract.tokens.stake)}
                        <ArrowLongRightIcon className={styles.tokenIconArrow} />
                        {icons(contract.tokens.reward)}
                      </div>
                    )}
                  </div>
                  {!isDesktop && (
                    <>
                      {currentContract === contract.id ? (
                        <ArrowUpIcon className={styles.contractArrow} />
                      ) : (
                        <ArrowDownIcon className={styles.contractArrow} />
                      )}
                    </>
                  )}
                </Typography>
                {(isDesktop || currentContract === contract.id) && (
                  <>
                    <Typography
                      variant="body2"
                      as="div"
                      className={styles.tableCol}
                    >
                      {!isDesktop && (
                        <Typography variant="inherit">Protocol</Typography>
                      )}
                      <Typography
                        variant="inherit"
                        className={styles.protocol}
                        as={Link}
                        href={`${config.LAUNCH_APP_URL}protocols/${contract.protocol.id}`}
                      >
                        {contract.protocol.icon && (
                          <img
                            src={contract.protocol.icon}
                            alt=""
                            className={styles.protocolIcon}
                          />
                        )}
                        {contract.protocol.name}
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body2"
                      align="right"
                      as="div"
                      className={styles.tableCol}
                    >
                      {!isDesktop && (
                        <Typography variant="inherit">TVL</Typography>
                      )}
                      <Typography variant="inherit">
                        ${bignumberUtils.format(contract.metric.tvl)}
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body2"
                      align="right"
                      as="div"
                      className={styles.tableCol}
                    >
                      {!isDesktop && (
                        <Typography variant="inherit">APY</Typography>
                      )}
                      <Typography variant="inherit" className={styles.apy}>
                        {bignumberUtils.formatMax(
                          bignumberUtils.mul(contract.metric.aprYear, 100)
                        )}
                        %
                        <ButtonBase onClick={handleOpenApy(contract.metric)}>
                          <CalculatorIcon />
                        </ButtonBase>
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body2"
                      align="right"
                      as="div"
                      className={styles.tableCol}
                    >
                      {!isDesktop && (
                        <Typography variant="inherit">Real APR (7d)</Typography>
                      )}
                      <Typography
                        variant="inherit"
                        className={clsx({
                          [styles.green]: bignumberUtils.gt(realApy, '0'),
                          [styles.red]:
                            !bignumberUtils.eq(
                              bignumberUtils.format(realApy),
                              '0'
                            ) && bignumberUtils.lt(realApy, '0')
                        })}
                      >
                        {!bignumberUtils.eq(
                          bignumberUtils.format(realApy),
                          '0'
                        ) &&
                          bignumberUtils.lt(realApy, '0') &&
                          '- '}
                        {bignumberUtils.formatMax(realApy, 10000)}%
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body2"
                      align="right"
                      as="div"
                      className={styles.tableCol}
                    >
                      {!isDesktop && (
                        <Typography variant="inherit">APY Boost</Typography>
                      )}
                      <Typography
                        variant="inherit"
                        className={clsx({
                          [styles.green]: bignumberUtils.gt(apyboost, '0'),
                          [styles.red]:
                            !bignumberUtils.eq(
                              bignumberUtils.format(apyboost),
                              '0'
                            ) && bignumberUtils.lt(apyboost, '0')
                        })}
                      >
                        {!bignumberUtils.eq(
                          bignumberUtils.format(apyboost),
                          '0'
                        ) &&
                          bignumberUtils.lt(apyboost, '0') &&
                          '- '}
                        {bignumberUtils.formatMax(apyboost, 10000)}%
                      </Typography>
                    </Typography>
                    <div className={styles.tableButton}>
                      <Button
                        color="secondary"
                        size="small"
                        as="a"
                        href={`${config.LAUNCH_APP_URL}autostaking?contractId=${contract.id}`}
                      >
                        Invest
                      </Button>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Button
        color="secondary"
        className={styles.button}
        as="a"
        href={`${config.LAUNCH_APP_URL}autostaking`}
      >
        See more in app ({count})
      </Button>
    </Grid.Container>
  );
};
