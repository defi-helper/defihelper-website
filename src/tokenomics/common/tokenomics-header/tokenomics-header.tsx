import clsx from 'clsx';
import React from 'react';

import { bignumberUtils } from 'src/common/bignumber-utils';
import { Button } from 'src/common/button';
import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import * as styles from './tokenomics-header.css';

export type TokenomicsHeaderProps = {
  className?: string;
};

const PRICE = '0.915032';
const MARKET_CAP = '289156773';
const CIRCULATING_SUPPLY = '316007280';
const TOTAL_SUPPLY = '1000000000';

export const TokenomicsHeader: React.VFC<TokenomicsHeaderProps> = (props) => {
  return (
    <div className={clsx(styles.root, props.className)}>
      <Grid.Container className={styles.hero}>
        <div className={styles.text}>
          <Typography
            transform="uppercase"
            family="mono"
            variant="h1"
            className={styles.title}
          >
            Tokenomics
          </Typography>
          <Typography variant="h3" className={styles.subtitle}>
            DFH is an ERC-20 token and is used for governance and for covering
            fees. Token holders can influence the future of DeFiHelper by voting
            and sponsoring the features they need the most.
          </Typography>
          <Button color="primary" as="a">
            Get DFH
          </Button>
        </div>
      </Grid.Container>
      <Grid.Container>
        <Paper className={styles.grid}>
          <div className={styles.col}>
            <Typography as="h3" className={styles.factoidTitle}>
              Price
            </Typography>
            <Typography
              family="mono"
              transform="uppercase"
              variant="h4"
              className={styles.factoidSubtitle}
            >
              {bignumberUtils.format(PRICE)}
            </Typography>
          </div>
          <div className={styles.col}>
            <Typography as="h3" className={styles.factoidTitle}>
              Market Cap
            </Typography>
            <Typography
              family="mono"
              transform="uppercase"
              variant="h4"
              className={styles.factoidSubtitle}
            >
              {bignumberUtils.format(MARKET_CAP)}
            </Typography>
          </div>
          <div className={styles.col}>
            <Typography as="h3" className={styles.factoidTitle}>
              Circulating Supply
            </Typography>
            <Typography
              family="mono"
              transform="uppercase"
              variant="h4"
              className={styles.factoidSubtitle}
            >
              {bignumberUtils.format(CIRCULATING_SUPPLY)} dfh
            </Typography>
          </div>
          <div className={styles.col}>
            <Typography as="h3" className={styles.factoidTitle}>
              Total Supply
            </Typography>
            <Typography
              family="mono"
              transform="uppercase"
              variant="h4"
              className={styles.factoidSubtitle}
            >
              {bignumberUtils.format(TOTAL_SUPPLY)} dfh
            </Typography>
          </div>
        </Paper>
      </Grid.Container>
    </div>
  );
};
