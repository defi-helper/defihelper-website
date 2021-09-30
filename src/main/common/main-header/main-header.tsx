import clsx from 'clsx';
import React from 'react';

import { Button } from 'src/common/button';
import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import { config } from 'src/config';
import { CollectedProgress } from 'src/common/collected-progress';
import * as styles from './main-header.css';

export type MainHeaderProps = {
  className?: string;
};

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
              Autopilot for your DeFi portfolio
            </Typography>
            <Typography variant="h3" className={styles.subtitle}>
              Automate your DeFi strategies across chains, earn more with
              autostaking feature
            </Typography>
            <Button color="primary" as="a" href={config.LAUNCH_APP_URL}>
              Launch App
            </Button>
          </div>
        </Grid.Row>
      </Grid.Container>
      <Grid.Container>
        <Grid.Row justify="spaceBetween">
          <CollectedProgress
            className={styles.col}
            count={55}
            width={12}
            height={24}
            topTitle
          />
        </Grid.Row>
      </Grid.Container>
    </div>
  );
};
