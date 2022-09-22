import clsx from 'clsx';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import earnmore1 from 'src/assets/images/earnmore1.png';
import earnmore2 from 'src/assets/images/earnmore2.png';
import { Button } from 'src/common/button';
import { URLS } from 'src/router/urls';
import * as styles from './main-earn.css';

export type MainEarnProps = {
  className?: string;
};

export const MainEarn: React.VFC<MainEarnProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <Typography
        variant="h2"
        family="mono"
        transform="uppercase"
        className={styles.title}
      >
        Top DeFi Platform for Yield Farming & Trading
      </Typography>
      <div className={styles.earnMore1}>
        <div className={styles.earnMore1Text}>
          <Typography
            variant="h4"
            family="mono"
            transform="uppercase"
            className={styles.earnMore1TextTitle}
          >
            The best defi trading platform
          </Typography>
          <Typography className={styles.earnMore1TextDescription}>
            Usually, our features are only available for professional traders,
            or in subscription based trading systems, but with DeFiHelper, you
            can create your own advanced strategy to buy any liquid or low
            liquid tokens on the most popular DEXs.
          </Typography>
          <Button color="secondary" as={ReactRouterLink} to={URLS.trade}>
            trade
          </Button>
        </div>
        <img src={earnmore1} alt="" className={styles.earnMore1Img} />
      </div>
      <div className={styles.earnMore2}>
        <img src={earnmore2} alt="" className={styles.earnMore2Img} />
        <div className={styles.earnMore2Text}>
          <Typography
            variant="h4"
            family="mono"
            transform="uppercase"
            className={styles.earnMore2TextTitle}
          >
            DEFI YIELD AGGREGATOR & YIELD OPTIMIZER
          </Typography>
          <Typography className={styles.earnMore2TextDescription}>
            Find a pool to invest in, use auto compounding to boost your APY,
            protect your investment with 'stop-loss'
          </Typography>
          <Button color="secondary" as={ReactRouterLink} to={URLS.invest}>
            invest
          </Button>
        </div>
      </div>
    </Grid.Container>
  );
};
