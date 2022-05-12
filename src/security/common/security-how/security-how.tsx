import clsx from 'clsx';
import React from 'react';

import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import * as styles from './security-how.css';

export type SecurityHowProps = {
  className?: string;
};

const LISTS = [
  [
    'Decentralized',
    'Non-Custodial',
    'No vaults or pools. You always stay in control of your funds'
  ],

  [
    'The code is open and audited',
    'Two-layer architecture',
    'The protocol has no control over the bulk of the deposit'
  ]
];

export const SecurityHow: React.VFC<SecurityHowProps> = (props) => {
  return (
    <div className={clsx(styles.root, props.className)}>
      <Typography
        variant="h2"
        family="mono"
        transform="uppercase"
        className={styles.title}
      >
        How does DeFiHelper work?
      </Typography>
      <div className={styles.grid}>
        <Paper
          radius={10}
          className={clsx(styles.card, styles.basic, styles.fullWidth)}
        >
          <Typography
            variant="h3"
            family="mono"
            align="center"
            className={styles.fs40}
          >
            Basic layer (Ethereum)
          </Typography>
          <Typography align="center" className={styles.basicSubtitle}>
            DFH token and governance
          </Typography>
        </Paper>
        <Paper
          radius={10}
          className={clsx(styles.card, styles.fullWidth, styles.invidual)}
        >
          <Typography align="center" variant="h3" className={styles.fs40}>
            Individual contracts for each automation
          </Typography>
        </Paper>
        <Paper radius={10} className={styles.card}>
          <Typography align="center" variant="h4">
            Individual contract #1
          </Typography>
          <Typography align="center" variant="body2">
            (Optimism)
          </Typography>
        </Paper>
        <Paper radius={10} className={styles.card}>
          <Typography variant="h4">Individual contract #2</Typography>
          <Typography align="center" variant="body2">
            (Avalanche)
          </Typography>
        </Paper>
        <Paper radius={10} className={styles.card}>
          <Typography align="center" variant="h4">
            Individual contract #3
          </Typography>
          <Typography align="center" variant="body2">
            (Arbitrum)
          </Typography>
        </Paper>
        <Paper radius={10} className={styles.card}>
          <Typography align="center" variant="h4">
            Individual contract #4
          </Typography>
          <Typography align="center" variant="body2">
            (BSC)
          </Typography>
        </Paper>
      </div>
      <div className={styles.lists}>
        {LISTS.map((list, index) => (
          <ul className={styles.list} key={String(index)}>
            {list.map((listItem) => (
              <li key={listItem} className={styles.listItem}>
                <div className={styles.hexagonHidden} />
                <div className={styles.hexagon} />
                <Typography variant="h4">{listItem}</Typography>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
