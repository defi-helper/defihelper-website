import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
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
import { ReactComponent as BrownIcon } from 'src/assets/icons/brown-risk.svg';
import { ReactComponent as GreenIcon } from 'src/assets/icons/green-risk.svg';
import { ReactComponent as RedIcon } from 'src/assets/icons/red-risk.svg';
import {
  ContractListSortInputTypeColumnEnum,
  ContractRiskFactorEnum,
  InvestContractsQuery,
  SortOrderEnum,
  useInvestContractsQuery
} from 'src/graphql/_generated-hooks';
import { networksConfig } from 'src/network-config';
import { config } from 'src/config';
import { Link } from 'src/common/link';
import { useDialog } from 'src/common/dialog';
import { InvestApyDialog } from '../common/invest-apy-dialog';
import { InvestTooltip } from '../common/invest-tooltip';
import * as styles from './invest-pools.css';

export type InvestPoolsProps = {
  className?: string;
};

const icons = (
  tokens: Exclude<
    InvestContractsQuery['contracts']['list'],
    null | undefined
  >[number]['tokens']['reward'],
  type: 'stake' | 'reward'
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
            <div>
              {type === 'stake' ? 'LP Token part' : 'Reward token'}
              <div className={styles.tooltipValue}>
                {Icon}
                <Typography variant="body2" family="mono">
                  {token.name}
                </Typography>
              </div>
            </div>
          }
        >
          {Icon}
        </InvestTooltip>
      );
    })}
  </div>
);

const riskStatuses = {
  [ContractRiskFactorEnum.High]: 'High',
  [ContractRiskFactorEnum.Low]: 'Low',
  [ContractRiskFactorEnum.Moderate]: 'Moderate',
  [ContractRiskFactorEnum.NotCalculated]: 'Not Calculated'
};
const riskIcons = {
  [ContractRiskFactorEnum.High]: <RedIcon width={22} height={24} />,
  [ContractRiskFactorEnum.Low]: <GreenIcon width={22} height={24} />,
  [ContractRiskFactorEnum.Moderate]: <BrownIcon width={22} height={24} />,
  [ContractRiskFactorEnum.NotCalculated]: '-'
};

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
    column: ContractListSortInputTypeColumnEnum.Tvl,
    order: SortOrderEnum.Desc
  });

  const [riskLevel, setRiskLevel] = useState(ContractRiskFactorEnum.Low);

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
        },
        risk:
          riskLevel === ContractRiskFactorEnum.NotCalculated ? null : riskLevel
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
    setContract((prevContract) => (prevContract === contract ? '' : contract));
  };

  const handleChangeRiskLevel = (newLevel: ContractRiskFactorEnum) => () => {
    setRiskLevel(newLevel);
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

  const contracts = data?.contracts.list;

  useEffect(() => {
    const [firstContract] = contracts ?? [];

    if (!firstContract || isDesktop) return;

    setContract(firstContract.id);
  }, [contracts, isDesktop]);

  return (
    <Grid.Container className={clsx(props.className, styles.root)}>
      <Typography
        transform="uppercase"
        family="mono"
        variant="h2"
        className={styles.title}
      >
        top pools to invest in right now
      </Typography>
      <div className={styles.actions}>
        <div className={styles.tabWrapper}>
          <Typography variant="body2" className={styles.tabsTitle}>
            Risk level
          </Typography>
          <Paper radius={8} className={styles.tabs}>
            {Object.entries(ContractRiskFactorEnum)
              .filter(
                ([, value]) => ContractRiskFactorEnum.NotCalculated !== value
              )
              .map(([key, value]) => (
                <ButtonBase
                  key={key}
                  className={clsx(
                    styles.tab,
                    riskLevel === value && styles.tabActive
                  )}
                  onClick={handleChangeRiskLevel(value)}
                >
                  {riskStatuses[value]}
                </ButtonBase>
              ))}
          </Paper>
        </div>
      </div>
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
            7D Performance{' '}
            <InvestTooltip text="Based on last 7 days' pool performance. Does not account for impermanent loss">
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
            <InvestTooltip
              text={
                <>
                  <Typography
                    variant="body2"
                    weight="semibold"
                    className={styles.autostakingTooltipTitle}
                  >
                    Auto-staking
                  </Typography>
                  <Typography
                    variant="body2"
                    className={styles.autostakingTooltipText}
                  >
                    Auto-staking is a built-in automation. It helps you earn
                    more by automatically adding your profits to the deposit,
                    effectively auto- compounding your interest.
                  </Typography>
                  <Link
                    href="https://defihelper.medium.com/auto-staking-explained-da5fbab082e0"
                    target="_blank"
                    color="blue"
                  >
                    How auto-staking works?
                  </Link>
                </>
              }
            >
              <QuestionMarkIcon />
            </InvestTooltip>{' '}
            {sortIcon(sortBy, ContractListSortInputTypeColumnEnum.AprBoosted)}
          </Typography>
          <Typography
            variant="body2"
            align="right"
            as="div"
            className={styles.colButton}
            onClick={handleSort(ContractListSortInputTypeColumnEnum.RiskFactor)}
          >
            Risk{' '}
            {sortIcon(sortBy, ContractListSortInputTypeColumnEnum.RiskFactor)}
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
                      <InvestTooltip
                        className={styles.contractIconsItem}
                        direction="left"
                        text={
                          <Typography variant="body2" family="mono">
                            This pool is located on{' '}
                            {networksConfig[contract.network].title} network
                          </Typography>
                        }
                      >
                        <img
                          src={networksConfig[contract.network].icon}
                          alt=""
                          className={styles.contractIconsItem}
                        />
                      </InvestTooltip>
                    )}
                    {Boolean(
                      [...contract.tokens.reward, ...contract.tokens.stake]
                        .length
                    ) && (
                      <div className={styles.contractIconsItemTokens}>
                        {icons(contract.tokens.stake, 'stake')}
                        <ArrowLongRightIcon className={styles.tokenIconArrow} />
                        {icons(contract.tokens.reward, 'reward')}
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
                        <Typography variant="inherit">
                          7D Performance
                        </Typography>
                      )}
                      <Typography
                        variant="inherit"
                        className={clsx({
                          [styles.green]: bignumberUtils.gt(realApy, '0'),
                          [styles.red]: bignumberUtils.lt(realApy, '0')
                        })}
                      >
                        {bignumberUtils.formatMax(realApy, 10000, false)}%
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
                    {isDesktop && (
                      <Typography
                        variant="body2"
                        align="right"
                        as="div"
                        className={styles.tableCol}
                      >
                        <Typography variant="inherit">
                          {riskIcons[contract.metric.risk]}
                          {false && (
                            <InvestTooltip
                              direction="right"
                              dropdownClassName={styles.riskLevel}
                              text={
                                <>
                                  <Typography
                                    family="mono"
                                    as="div"
                                    className={styles.riskLevelRow}
                                  >
                                    <Typography variant="inherit">
                                      Risk
                                    </Typography>
                                    <Typography
                                      as="div"
                                      variant="body2"
                                      className={styles.riskLevelStatus}
                                    >
                                      {riskStatuses[contract.metric.risk]}
                                    </Typography>
                                  </Typography>
                                  <span className={styles.riskLevelSpacing} />
                                  <Typography
                                    family="mono"
                                    as="div"
                                    variant="body2"
                                    className={styles.riskLevelRow}
                                  >
                                    <Typography variant="inherit">
                                      Reliability
                                    </Typography>
                                    <GreenIcon width={19} height={20} />
                                  </Typography>
                                  <Typography
                                    family="mono"
                                    as="div"
                                    variant="body2"
                                    className={styles.riskLevelRow}
                                  >
                                    <Typography variant="inherit">
                                      Profitability
                                    </Typography>
                                    <BrownIcon width={19} height={20} />
                                  </Typography>
                                  <Typography
                                    family="mono"
                                    as="div"
                                    variant="body2"
                                    className={styles.riskLevelRow}
                                  >
                                    <Typography variant="inherit">
                                      Volatility
                                    </Typography>
                                    <GreenIcon width={19} height={20} />
                                  </Typography>
                                </>
                              }
                            >
                              <GreenIcon width={22} height={24} />
                            </InvestTooltip>
                          )}
                        </Typography>
                      </Typography>
                    )}
                    <div className={styles.tableButton}>
                      <Button
                        color="secondary"
                        size="small"
                        as="a"
                        href={`${config.LAUNCH_APP_URL}invest/${contract.id}`}
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
        href={`${config.LAUNCH_APP_URL}invest`}
      >
        See more in app ({count})
      </Button>
    </Grid.Container>
  );
};
