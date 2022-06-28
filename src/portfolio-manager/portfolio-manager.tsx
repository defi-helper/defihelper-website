import clsx from 'clsx';
import React from 'react';
import { Head } from 'src/common/head';

import { LandingLayout } from 'src/layouts';
import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import { PortfolioManagerComing, PortfolioManagerScheme } from './common';
import * as styles from './portfolio-manager.css';

export type PortfolioManagerProps = unknown;

export const PortfolioManager: React.VFC<PortfolioManagerProps> = () => {
  return (
    <LandingLayout>
      <Head
        keywords={[
          'crypto portfolio manager',
          'best crypto portfolio manager',
          'cryptocurrency portfolio management',
          'crypto portfolio management app',
          'crypto trading portfolio management',
          'managing crypto portfolio',
          'crypto portfolio management system'
        ]}
        title="Best Crypto Portfolio Manager"
        description="DeFi Helper - Best App for Managing Crypto Portfolio. Best cryptocurrency portfolio manager with investment recommendations and management. "
      />
      <Grid.Container className={clsx(styles.header, styles.mb)}>
        <Typography
          variant="h1"
          family="mono"
          transform="uppercase"
          className={styles.title}
        >
          Best Cryptocurrency Portfolio Manager
        </Typography>
        <PortfolioManagerScheme className={styles.scheme} />
      </Grid.Container>
      <Grid.Container className={styles.mb}>
        <PortfolioManagerComing />
      </Grid.Container>
    </LandingLayout>
  );
};
