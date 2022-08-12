import clsx from 'clsx';
import React, { useState } from 'react';
import { useMedia } from 'react-use';

import { bignumberUtils } from 'src/common/bignumber-utils';
import { Button } from 'src/common/button';
import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import { ReactComponent as UnknownIcon } from 'src/assets/icons/unknown-network.svg';
import { ReactComponent as ArrowUpIcon } from 'src/assets/icons/arrow-up.svg';
import { ReactComponent as ArrowDownIcon } from 'src/assets/icons/arrow-down.svg';
import { useInvestContractsQuery } from 'src/graphql/_generated-hooks';
import { networksConfig } from 'src/network-config';
import * as styles from './invest-pools.css';

export type InvestPoolsProps = {
  className?: string;
};

export const InvestPools: React.VFC<InvestPoolsProps> = (props) => {
  const [currentContract, setContract] = useState('');
  const isDesktop = useMedia('(min-width: 960px)');

  const [{ data, fetching }] = useInvestContractsQuery();

  const count = data?.contracts.pagination.count ?? 0;

  const handleChangeContract = (contract: string) => () => {
    setContract((prevContract) => (prevContract ? '' : contract));
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
          <Typography variant="body2" align="right">
            TVL
          </Typography>
          <Typography variant="body2" align="right">
            APY
          </Typography>
          <Typography variant="body2" align="right">
            Real APR (7d)
          </Typography>
          <Typography variant="body2" align="right">
            APY Boost
          </Typography>
        </div>
        <div className={styles.tableBody}>
          {fetching && (
            <Typography variant="body2" className={styles.loading}>
              Loading...
            </Typography>
          )}
          {data?.contracts.list?.map((contract) => (
            <div key={contract.id} className={styles.tableRow}>
              <Typography
                variant="body2"
                as="div"
                className={clsx(styles.contractName, {
                  [styles.contractNameInactive]: currentContract !== contract.id
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
                  <div className={styles.contractIconsItemTokens}>
                    {contract.tokens.reward.map((token, index) => {
                      const key = String(index);

                      return token.alias?.logoUrl ? (
                        <img
                          key={key}
                          src={token.alias?.logoUrl}
                          alt=""
                          className={styles.contractIconsItem}
                        />
                      ) : (
                        <Paper className={styles.contractUnknownNetworkIcon}>
                          <UnknownIcon />
                        </Paper>
                      );
                    })}
                  </div>
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
                    <Typography variant="inherit" className={styles.protocol}>
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
                    <Typography variant="inherit">
                      {bignumberUtils.format(contract.metric.aprYear)}%
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
                    <Typography variant="inherit">
                      {bignumberUtils.format(contract.metric.aprWeekReal)}%
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
                    <Typography variant="inherit">
                      {bignumberUtils.format(contract.metric.myAPYBoost)}%
                    </Typography>
                  </Typography>
                  <div className={styles.tableButton}>
                    <Button color="secondary" size="small">
                      Invest
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Button color="secondary" className={styles.button}>
        See more in app ({count})
      </Button>
    </Grid.Container>
  );
};
