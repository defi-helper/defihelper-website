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
      'DFH charges $1 per executed automation (blockchain fee not included)',
    estimate: '$4,300,000'
  },

  {
    title: 'Notifications',
    description: `Notifications are available starting from $10 per 1,000 messages`,
    estimate: '$450,000'
  },

  {
    title: 'Scenarios marketplace',
    description: `The protocol and the authors of the provided strategies will
      earn commissions from the application of the strategies by other users`,
    estimate: '(soon)'
  }
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
              Estimated Yearly Profit
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
