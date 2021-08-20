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
    title: 'Autostake fees',
    description:
      'Integer sagittis euismod vitae penatibus libero, facilisi. Nulla elit suspendisse mauris fringilla turpis posuere. Placerat quam eu, lacus, massa dignissim eget urna.',
    estimate: '$732,812.50 / month'
  },

  {
    title: 'Notifications',
    description:
      'Faucibus amet, cum sit consequat ipsum velit aliquam non. Turpis faucibus dui nunc, non. Suspendisse donec porttitor ac dapibus egestas at fringilla scelerisque.',
    estimate: '$105,000 / month'
  },

  {
    title: 'Automates',
    description:
      'Aliquet turpis egestas neque pharetra nec a neque libero luctus. Diam sagittis volutpat dignissim suscipit. Arcu risus pellentesque ultrices leo orci montes, tristique vel laoreet.',
    estimate: '$112,000 / month'
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
        WHere is profit?
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
