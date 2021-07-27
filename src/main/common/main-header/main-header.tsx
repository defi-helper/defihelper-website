import clsx from 'clsx';
import React from 'react';

import { Button } from 'src/common/button';
import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import { bignumberUtils } from 'src/common/bignumber-utils';
import * as styles from './main-header.css';

export type MainHeaderProps = {
  className?: string;
};

const PORTFOLIOS = 526;
const TRACKED_PORTFOLIOS = 24756842;
const CONNECTED_PROTOCOLS = 112;

export const MainHeader: React.VFC<MainHeaderProps> = (props) => {
  return (
    <div className={clsx(styles.root, props.className)}>
      <Grid.Container className={styles.hero}>
        <Grid.Row>
          <div className={styles.text}>
            <Typography
              transform="uppercase"
              family="mono"
              variant="h1"
              className={styles.title}
            >
              AUTOPILOT for DEFI portfolio
            </Typography>
            <Typography variant="h3" className={styles.subtitle}>
              Automate your DeFi strategies across chains, earn more with
              autostaking feature
            </Typography>
            <Button variant="outlined" color="primary">
              Launch App
            </Button>
          </div>
          <div className={styles.image}>
            <div className={styles.imageInner}>image</div>
          </div>
        </Grid.Row>
      </Grid.Container>
      <Grid.Container>
        <Grid.Row justify="spaceBetween">
          <Typography
            family="mono"
            transform="uppercase"
            variant="body2"
            className={clsx(styles.col, styles.factoid)}
          >
            {PORTFOLIOS} portfolios
          </Typography>
          <Typography
            family="mono"
            transform="uppercase"
            variant="body2"
            className={clsx(styles.col, styles.factoid)}
          >
            ${bignumberUtils.format(TRACKED_PORTFOLIOS)} tracked in portfolios
          </Typography>
          <Typography
            family="mono"
            transform="uppercase"
            variant="body2"
            className={clsx(styles.col, styles.factoid)}
          >
            {CONNECTED_PROTOCOLS} protocols connected
          </Typography>
        </Grid.Row>
      </Grid.Container>
    </div>
  );
};
