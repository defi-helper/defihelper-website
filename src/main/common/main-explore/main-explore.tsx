import clsx from 'clsx';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { analytics } from 'src/analytics';

import dfhlogo from 'src/assets/images/dfh-logo.png';
import { Button } from 'src/common/button';
import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import { URLS } from 'src/router/urls';
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
              <Typography
                variant="h3"
                className={clsx(styles.listItemDescription, styles.listTitle)}
              >
                The DFH token is a governance and yield-generating token
              </Typography>
              <img src={dfhlogo} alt="" className={styles.logo} />
              <Button
                variant="outlined"
                className={clsx(styles.button, styles.explore)}
                as={ReactRouterLink}
                to={URLS.tokenomics}
                onClick={() => analytics.send('main_expore_dfh_click')}
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
                    Initial circulating supply
                  </Typography>
                  <Typography family="mono">34,000,000 DFH (3.4%)</Typography>
                </li>
                <li className={styles.listItem}>
                  <Typography className={styles.listItemTitle}>
                    3.4% of total supply will be in circulation upon launch
                  </Typography>
                </li>
                <li className={styles.listItem}>
                  <Typography className={styles.listItemTitle}>
                    Public Valuation
                  </Typography>
                  <Typography family="mono">$30,000,000 FDV</Typography>
                </li>
                <li className={styles.listItem}>
                  <Typography className={styles.listItemTitle}>
                    Max supply
                  </Typography>
                  <Typography family="mono">1,000,000,000 DFH</Typography>
                </li>
              </ul>
            </Paper>
          </div>
          <div className={styles.col}>
            <Paper className={styles.colContent}>
              <Typography
                className={clsx(styles.listItemTitle, styles.tokenUtilityTitle)}
              >
                Token Utility
              </Typography>
              <ul className={styles.tokenUtilityList}>
                <li className={styles.tokenUtilityListItem}>
                  <Typography className={styles.listItemTitle}>
                    Governance
                  </Typography>
                </li>
                <li className={styles.tokenUtilityListItem}>
                  <Typography className={styles.listItemTitle}>
                    Profits distribution
                  </Typography>
                </li>
                <li className={styles.tokenUtilityListItem}>
                  <Typography className={styles.listItemTitle}>
                    Discounts and perks for token holders
                  </Typography>
                </li>
              </ul>
            </Paper>
          </div>
        </Grid.Row>
      </Grid.Container>
    </div>
  );
};
