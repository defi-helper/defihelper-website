import clsx from 'clsx';
import React from 'react';

import { Factoid } from 'src/common/factoid';
import { Grid } from 'src/common/grid';
import { Head } from 'src/common/head';
import { Typography } from 'src/common/typography';
import { Video } from 'src/common/video';
import { LandingLayout } from 'src/layouts';
import { PortfolioTrackerScheme } from './common';
import * as styles from './portfolio-tracker.css';

export type PortfolioTrackerProps = unknown;

const TEXTS = [
  {
    title: 'cross-chain Tracking',
    description:
      'DeFiHelper tracks your assets in non-custodial wallets, stakes in DeFi protocols and even balances on centralized exchanges. Connect as many wallets as you want.'
  },
  {
    title: 'smart notifications',
    description:
      "Daily updates on your portfolio's balance via Telegram or/and email. APY updates on contracts you have invested in. Major updates on protocols you follow (soon)."
  },
  {
    title: 'Offline mode',
    description: 'Connect your wallet only once.'
  },
  {
    title: 'Direct purchase of LP tokens',
    description: 'Buy liquidity pool tokens directly through the DFH interface.'
  },
  {
    title: 'Impermanent loss and real APY tracking',
    description:
      'Combine various automation scenarios. You are limited only by your needs and imagination.'
  }
];

export const PortfolioTracker: React.VFC<PortfolioTrackerProps> = () => {
  return (
    <LandingLayout>
      <Head
        keywords={[
          'Crypto Portfolio tracker',
          'best crypto portfolio tracker',
          'binance portfolio tracker',
          'cryptocurrency portfolio tracker',
          'portfolio tracker crypto',
          'track your crypto portfolio'
        ]}
        title="Best Crypto Portfolio Tracker"
        description="Best Way to Track Crypto Portfolio for free - DeFiHelper Crypto Portfrolio Tracker. Track your crypto portfolio everywhere - Wallets, DeFi Protocols, CEXes. "
      />
      <Grid.Container className={clsx(styles.header, styles.mb)}>
        <Typography
          variant="h1"
          family="mono"
          transform="uppercase"
          className={styles.title}
        >
          Free Crypto Portfolio Tracker
        </Typography>
        <PortfolioTrackerScheme />
      </Grid.Container>
      <Grid.Container className={styles.mb}>
        <Factoid>{TEXTS}</Factoid>
      </Grid.Container>
      <Video
        className={styles.mb}
        videoId="pVTxnp0qujw"
        title={
          <div className={styles.videoTitle}>
            What is DeFiHelper? A complete overview
          </div>
        }
      />
    </LandingLayout>
  );
};
