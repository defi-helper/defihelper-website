import clsx from 'clsx';
import React from 'react';

import { bignumberUtils } from 'src/common/bignumber-utils';
import { Button } from 'src/common/button';
import { CollectedProgress } from 'src/common/collected-progress';
import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import * as styles from './tokenomics-header.css';

export type TokenomicsHeaderProps = {
  className?: string;
  price?: string;
  marketCap?: string;
  circulatingSupply?: string;
  totalSupply?: string;
  onGetDFH: () => void;
};

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
            The DFH token (ERC-20) will be used for governance and profit
            distribution. Token holders will shape the future of the protocol by
            voting and sponsoring the features they need the most.
          </Typography>
          <Button color="primary" onClick={props.onGetDFH}>
            Get DFH
          </Button>
        </div>
      </Grid.Container>
      <Grid.Container className={styles.progressContainer}>
        <Grid.Row justify="spaceBetween">
          <CollectedProgress
            className={styles.progress}
            count={55}
            width={12}
            height={24}
            topTitle
          />
        </Grid.Row>
      </Grid.Container>
      <Grid.Container>
        <Paper className={styles.grid}>
          <div className={styles.col}>
            <Typography as="h3" className={styles.factoidTitle}>
              Circulating supply (first year)
            </Typography>
            <Typography
              family="mono"
              transform="uppercase"
              variant="h4"
              className={styles.factoidSubtitle}
            >
              {bignumberUtils.format(props.circulatingSupply)} dfh
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
              {bignumberUtils.format(props.totalSupply)} dfh
            </Typography>
          </div>
          <div className={styles.col}>
            <Typography as="h3" className={styles.factoidTitle}>
              Max supply
            </Typography>
            <Typography
              family="mono"
              transform="uppercase"
              variant="h4"
              className={styles.factoidSubtitle}
            >
              {bignumberUtils.format('1000000000')} dfh
            </Typography>
          </div>
        </Paper>
      </Grid.Container>
    </div>
  );
};
