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
    description: '10% unlock on TGE, followed by 12 months lock and 24 month linear unlock.',
    price: '$0.01 for 50,000,000 tokens'
  },
  {
    title: 'Seed round',
    description: `25% unlock on TGE, followed by 12 months lock and 24 month linear unlock.`,
    price: '$0.03 for 70,000,000 tokens'
  },
  {
    title: 'Strategic round',
    description: `25% unlock on TGE, followed by 12 months lock and 18 month linear unlock.`,
    price: '$0.04 for 40,000,000 tokens'
  },
  {
    title: 'Public round',
    description: `100% unlock on TGE.`,
    price: '$0.05 for 10,000,000 tokens'
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
              Price
            </Typography>
            <Typography variant="h4" className={styles.estimateSubtitle}>
              {dataItem.price}
            </Typography>
          </Paper>
        ))}
      </div>
    </Grid.Container>
  );
};
