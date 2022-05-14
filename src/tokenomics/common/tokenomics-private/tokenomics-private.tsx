import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import * as styles from './tokenomics-private.css';

export type TokenomicsPrivateProps = {
  className?: string;
};

const DATA = [
  {
    title: 'Pre-seed',
    description: '2% unlock on TGE, 5% monthly per block unlock thereafter.',
    price: '$0.01',
    amount: '50m tokens',
    value: '$500,000',
    valuation: '$10,000,000',
    completed: true
  },
  {
    title: 'Seed round',
    description: `3% unlock on TGE, 6.25% monthly per block unlock thereafter.`,
    price: '$0.02',
    amount: '70m tokens',
    value: '$1,400,000',
    valuation: '$20,000,000',
    completed: false
  },
  {
    title: 'Strategic round',
    description: `3% unlock on TGE, 7.5% monthly per block unlock thereafter.`,
    price: '$0.025',
    amount: '40m tokens',
    value: '$1,000,000',
    valuation: '$25,000,000',
    completed: false
  },
  {
    title: 'Public round',
    description: `100% unlock on TGE.`,
    price: '$0.03',
    amount: '10m tokens',
    value: '$300,000',
    valuation: '$30,000,000',
    completed: false
  }
];

export const TokenomicsPrivate: React.VFC<TokenomicsPrivateProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <Typography
        family="mono"
        transform="uppercase"
        variant="h2"
        className={styles.title}
      >
        Token sale details
      </Typography>
      <div className={styles.grid}>
        {DATA.map((dataItem) => (
          <Paper key={dataItem.title} className={styles.card}>
            {dataItem.completed && (
              <div className={styles.completedWrap}>
                <Typography
                  as="div"
                  variant="body2"
                  family="mono"
                  className={styles.completed}
                >
                  Completed
                </Typography>
              </div>
            )}
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
            <div className={styles.flex}>
              <div>
                <Typography className={styles.estimateSubtitle}>
                  Price
                </Typography>
                <Typography className={styles.estimateSubtitle}>
                  Amount
                </Typography>
                <Typography className={styles.estimateSubtitle}>
                  Value
                </Typography>
                <Typography className={styles.estimateSubtitle}>
                  Valuation
                </Typography>
              </div>
              <div>
                <Typography className={styles.estimateTitle}>
                  {dataItem.price}
                </Typography>
                <Typography className={styles.estimateTitle}>
                  {dataItem.amount}
                </Typography>
                <Typography className={styles.estimateTitle}>
                  {dataItem.value}
                </Typography>
                <Typography className={styles.estimateTitle}>
                  {dataItem.valuation}
                </Typography>
              </div>
            </div>
          </Paper>
        ))}
      </div>
    </Grid.Container>
  );
};
