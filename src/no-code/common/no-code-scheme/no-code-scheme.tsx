import clsx from 'clsx';
import React from 'react';

import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import { ReactComponent as NoCodeArrow } from 'src/assets/icons/no-code-arrow.svg';
import * as styles from './no-code-scheme.css';

export type NoCodeSchemeProps = {
  className?: string;
};

export const NoCodeScheme: React.VFC<NoCodeSchemeProps> = (props) => {
  return (
    <div className={clsx(styles.root, props.className)}>
      <div className={styles.choose}>
        <Paper
          radius={10}
          className={clsx(
            styles.green,
            styles.fullWidth,
            styles.chooseConditon
          )}
        >
          <Typography
            variant="h4"
            family="mono"
            align="center"
            className={styles.fs28}
          >
            Choose condition
          </Typography>
        </Paper>
        <Paper radius={10} className={styles.chooseCard}>
          <Typography variant="h4" className={styles.fs28}>
            Schedule
          </Typography>
          <Typography variant="body2">
            Choose a specific time frame to launch automation
          </Typography>
        </Paper>
        <Paper radius={10} className={styles.chooseCard}>
          <Typography variant="h4" className={styles.fs28}>
            Contract Metric
          </Typography>
          <Typography variant="body2">Contract metric condition</Typography>
        </Paper>
        <Paper radius={10} className={styles.chooseCard}>
          <Typography variant="h4" className={styles.fs28}>
            Native Token Balance
          </Typography>
          <Typography variant="body2">
            Check native token balance (ETH, BNB, AVAX etc.)
          </Typography>
        </Paper>
        <Paper radius={10} className={styles.chooseCard}>
          <Typography variant="h4" className={styles.fs28}>
            Optimized Staking
          </Typography>
          <Typography variant="body2">Use auto-staking</Typography>
        </Paper>
        <Paper
          radius={10}
          className={clsx(styles.fullWidth, styles.chooseGasPrice)}
        >
          <Typography variant="h4" className={styles.fs28}>
            Gas Price Fluctuation
          </Typography>
          <Typography variant="body2">
            Check gas price with expected values based on specific time and day
          </Typography>
        </Paper>
      </div>
      <NoCodeArrow className={styles.arrow} />
      <div className={styles.take}>
        <Paper radius={10} className={clsx(styles.green, styles.takeCard)}>
          <Typography
            variant="h4"
            family="mono"
            align="center"
            className={styles.fs28}
          >
            Take action
          </Typography>
        </Paper>
        <Paper radius={10} className={styles.takeCard}>
          <Typography variant="h4" align="center" className={styles.fs28}>
            Execute transaction
          </Typography>
        </Paper>
        <Paper radius={10} className={styles.takeCard}>
          <Typography variant="h4" align="center" className={styles.fs28}>
            Send notification
          </Typography>
        </Paper>
      </div>
    </div>
  );
};
