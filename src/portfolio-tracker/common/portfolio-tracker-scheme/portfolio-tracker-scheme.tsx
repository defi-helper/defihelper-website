import clsx from 'clsx';
import React from 'react';
import { useMedia } from 'react-use';

import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import schemeDesktop from 'src/assets/images/portfolio-tracker-scheme-desktop.png';
import schemeMobile from 'src/assets/images/portfolio-tracker-scheme-mobile.png';
import * as styles from './portfolio-tracker-scheme.css';

export type PortfolioTrackerSchemeProps = {
  className?: string;
};

const LIST = [
  `Overview of the entire DeFi portfolio across chains`,
  `Direct purchase of LP tokens`,
  `Offline mode: portfolio manager works even without a wallet connected.`,
  `Impermanent loss tracking`,
  `Real APY tracking`,
  `Custom notifications`
];

export const PortfolioTrackerScheme: React.VFC<PortfolioTrackerSchemeProps> = (
  props
) => {
  const isDesktop = useMedia('(min-width: 960px)');

  return (
    <div className={clsx(styles.root, props.className)}>
      <img
        alt=""
        src={isDesktop ? schemeDesktop : schemeMobile}
        className={styles.scheme}
      />
      <Paper radius={10} className={styles.paper}>
        <Typography family="mono" variant="h3" className={styles.paperTitle}>
          DeFiHelper
        </Typography>
        <ul className={styles.list}>
          {LIST.map((listItem) => (
            <li key={listItem} className={styles.listItem}>
              <Typography>{listItem}</Typography>
            </li>
          ))}
        </ul>
      </Paper>
    </div>
  );
};
