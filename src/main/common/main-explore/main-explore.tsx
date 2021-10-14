import clsx from 'clsx';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import dfhlogo from 'src/assets/images/dfh-logo.png';
import { Button } from 'src/common/button';
import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import { URLS } from 'src/router/urls';
import * as styles from './main-explore.css';

export type MainExploreProps = {
  className?: string;
  onNotify: () => void;
  progress: React.ReactNode;
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
                The DFH token is a governance and yield-generating token
              </Typography>
              <img src={dfhlogo} alt="" className={styles.logo} />
              <Button
                variant="outlined"
                className={styles.button}
                as={ReactRouterLink}
                to={URLS.tokenomics}
              >
                Explore DFH
              </Button>
            </Paper>
          </div>
          <div className={styles.col}>
            <Paper className={styles.colContent}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Typography className={styles.listItemTitle}>
                    Estimated circulating supply
                  </Typography>
                  <Typography>520,000,000 DFH</Typography>
                </li>
                <li className={styles.listItem}>
                  <Typography className={styles.listItemTitle}>
                    Total supply
                  </Typography>
                  <Typography>1,000,000,000 DFH</Typography>
                </li>
                <li className={styles.listItem}>
                  <Typography className={styles.listItemTitle}>
                    Max supply
                  </Typography>
                  <Typography>1,000,000,000 DFH</Typography>
                </li>
              </ul>
            </Paper>
          </div>
          <div className={styles.col}>
            <Paper className={styles.colContent}>
              {props.progress}
              <Typography className={styles.listItemDescription}>
                The DFH token will be launched only after the protocol collects
                at least $10,000 (in ETH) in fees as proof of concept.
              </Typography>
              <Button
                variant="outlined"
                className={styles.button}
                onClick={props.onNotify}
              >
                Notify me
              </Button>
            </Paper>
          </div>
        </Grid.Row>
      </Grid.Container>
    </div>
  );
};
