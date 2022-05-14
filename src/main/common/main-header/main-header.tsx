import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import logo from 'src/assets/images/logo.png';
import { Button } from 'src/common/button';
import { config } from 'src/config';
import * as styles from './main-header.css';

export type MainHeaderProps = {
  className?: string;
  portfoliosCount: number;
  protocolsCount: number;
  contractsCount: number;
};

export const MainHeader: React.VFC<MainHeaderProps> = (props) => {
  return (
    <div className={clsx(styles.root, props.className)}>
      <Grid.Container className={styles.hero}>
        <Grid.Row>
          <div className={styles.text}>
            <img src={logo} alt="" className={styles.logo} />
            <Typography variant="h2" className={styles.subtitle} align="center">
              Automate your DeFi strategies across chains, earn more with our
              auto-staking feature
            </Typography>
            <Typography
              family="mono"
              transform="uppercase"
              as="div"
              className={styles.counters}
            >
              <div>{props.portfoliosCount} portfolios</div>
              <div>{props.contractsCount} staking contracts</div>
              <div>{props.protocolsCount} protocols connected</div>
            </Typography>
            <div className={styles.actions}>
              <Button
                variant="contained"
                color="secondary"
                as="a"
                href={config.LAUNCH_APP_URL}
                size="large"
              >
                Launch App
              </Button>
            </div>
          </div>
        </Grid.Row>
      </Grid.Container>
    </div>
  );
};
