import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import * as styles from './tokenomics-profit.css';

export type TokenomicsProfitProps = {
  className?: string;
};

const DATA = [
  {
    title: 'No-code automation',
    description:
      'DFH charges 1$ for every completed launch of automation.',
    estimate: '$4,000,000 / first year'
  },

  {
    title: 'Notifications',
    description:
      'Notifications are available in batches, starting from 10$ (in ETH)' +
      ' per 1000 messages',
    estimate: '$450,000 / first year'
  },

  {
    title: 'Scenarios marketplace',
    description:
      'We and author of scenario will earn fee when scenario launched by ' +
      'other user',
    estimate: '(soon)'
  },

];

export const TokenomicsProfit: React.VFC<TokenomicsProfitProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <Typography
        family="mono"
        transform="uppercase"
        variant="h2"
        className={styles.title}
      >
        Business model
      </Typography>
      <div className={styles.grid}>
        {DATA.map((dataItem) => (
          <Paper key={dataItem.title} className={styles.card}>
            <Typography
              variant="h4"
              family="mono"
              transform="uppercase"
              className={styles.cardTitle}
            >
              {dataItem.title}
            </Typography>
            <Typography
              className={clsx(styles.opacity, styles.cardDescription)}
            >
              {dataItem.description}
            </Typography>
            <Typography className={styles.estimateTitle}>
              Estimate profit in a year
            </Typography>
            <Typography variant="h4" className={styles.estimateSubtitle}>
              {dataItem.estimate}
            </Typography>
          </Paper>
        ))}
      </div>
    </Grid.Container>
  );
};
