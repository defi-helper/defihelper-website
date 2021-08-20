import clsx from 'clsx';
import React from 'react';

import dfhlogo from 'src/assets/images/dfh-logo.png';
import { Button } from 'src/common/button';
import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import { MainProgress } from '../main-progress/main-progress';
import * as styles from './main-explore.css';

export type MainExploreProps = {
  className?: string;
};

export const MainExplore: React.VFC<MainExploreProps> = (props) => {
  return (
    <div className={clsx(styles.root, props.className)}>
      <Grid.Container>
        <Typography
          variant="h2"
          transform="uppercase"
          family="mono"
          className={styles.title}
        >
          DeFiHelper Governance Token (DFH)
        </Typography>
        <Grid.Row>
          <div className={styles.col}>
            <Paper className={styles.colContent}>
              <Typography variant="h3" className={styles.listItemDescription}>
                DFH token is the main reward and decision making tool in
                DeFiHelper ecosystem.
              </Typography>
              <img src={dfhlogo} alt="" className={styles.logo} />
              <Button variant="outlined" className={styles.button}>
                Explore DFH
              </Button>
            </Paper>
          </div>
          <div className={styles.col}>
            <Paper className={styles.colContent}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Typography className={styles.listItemTitle}>
                    Estimated Price
                  </Typography>
                  <Typography>$0.915032</Typography>
                </li>
                <li className={styles.listItem}>
                  <Typography className={styles.listItemTitle}>
                    Estimated Market Cap (1 year)
                  </Typography>
                  <Typography>$289,156,773</Typography>
                </li>
                <li className={styles.listItem}>
                  <Typography className={styles.listItemTitle}>
                    Circulating Supply
                  </Typography>
                  <Typography>316,007,280 DFH</Typography>
                </li>
                <li className={styles.listItem}>
                  <Typography className={styles.listItemTitle}>
                    Total Supply
                  </Typography>
                  <Typography>1,000,000,000 DFH</Typography>
                </li>
              </ul>
            </Paper>
          </div>
          <div className={styles.col}>
            <Paper className={styles.colContent}>
              <MainProgress count={8} width={34} height={80} bottomTitle />
              <Typography className={styles.listItemDescription}>
                DFH will be launched with proofed concept of the token, baked by
                protocol fees from day one.
              </Typography>
              <Button variant="outlined" className={styles.button}>
                Notify me
              </Button>
            </Paper>
          </div>
        </Grid.Row>
      </Grid.Container>
    </div>
  );
};
