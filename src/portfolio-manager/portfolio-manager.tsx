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
      <Head title="Portfolio manager" />
      <Grid.Container className={clsx(styles.header, styles.mb)}>
        <Typography
          variant="h1"
          family="mono"
          transform="uppercase"
          className={styles.title}
        >
          Portfolio manager
        </Typography>
        <PortfolioManagerScheme className={styles.scheme} />
      </Grid.Container>
      <Grid.Container className={styles.mb}>
        <PortfolioManagerComing />
      </Grid.Container>
    </LandingLayout>
  );
};
