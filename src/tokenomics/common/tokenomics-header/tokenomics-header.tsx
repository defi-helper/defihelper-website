import clsx from 'clsx';
import React from 'react';
import { useMedia } from 'react-use';

import { bignumberUtils } from 'src/common/bignumber-utils';
import { Button } from 'src/common/button';
import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import { config } from 'src/config';
import tokenomics from 'src/assets/images/tokenomics.png';
import tokenomicsMobile from 'src/assets/images/tokenomics-mobile.png';
import * as styles from './tokenomics-header.css';

export type TokenomicsHeaderProps = {
  className?: string;
  price?: string;
  marketCap?: string;
  circulatingSupply?: string;
  totalSupply?: string;
  onGetDFH: () => void;
  progress: React.ReactNode;
};

export const TokenomicsHeader: React.VFC<TokenomicsHeaderProps> = (props) => {
  const isDesktop = useMedia('(min-width: 960px)');

  return (
    <div className={clsx(styles.root)}>
      <Grid.Container className={clsx(styles.hero, props.className)}>
        <div className={styles.text}>
          <Typography
            transform="uppercase"
            family="mono"
            variant="h1"
            className={styles.title}
          >
            DefiHelper Tokenomics
          </Typography>
          <Typography variant="h3" className={styles.subtitle}>
            The DFH token (ERC-20) will be used for governance and profit
            distribution. Token holders will shape the future of the protocol by
            voting and sponsoring the features they need the most.
          </Typography>
          <Button color="primary" onClick={props.onGetDFH}>
            Get DFH
          </Button>
          {!isDesktop && (
            <Button
              variant="contained"
              color="secondary"
              as="a"
              href={config.LAUNCH_APP_URL}
              className={styles.launchButton}
            >
              Launch App
            </Button>
          )}
        </div>
        <img src={tokenomicsMobile} alt="" className={styles.imgMobile} />
        <Grid.Row justify="spaceBetween" className={styles.progressContainer}>
          {props.progress}
        </Grid.Row>
      </Grid.Container>
      <img src={tokenomics} alt="" className={styles.img} />
      <Grid.Container>
        <Paper className={styles.grid}>
          <div className={styles.col}>
            <Typography as="h3" className={styles.factoidTitle}>
              Circulating supply
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
              Total supply
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
