import React from 'react';

import { bignumberUtils } from 'src/common/bignumber-utils';
import { Dialog } from 'src/common/dialog';
import { Typography } from 'src/common/typography';
import * as styles from './invest-apy-dialog.css';

export type InvestApyDialogProps = {
  apr: Record<string, string>;
  staked: string;
};

export const InvestApyDialog: React.FC<InvestApyDialogProps> = (props) => {
  const staked = bignumberUtils.eq(props.staked, 0) ? 1000 : props.staked;

  const apr = Object.entries(props.apr).map(([title, apy]) => {
    const apyMul = bignumberUtils.mul(apy, 100);

    return {
      title,
      apy: apyMul,
      perStaked: bignumberUtils.mul(apy, staked)
    };
  });

  return (
    <Dialog className={styles.root}>
      <div className={styles.row}>
        <Typography variant="body2">Timeframe</Typography>
        <Typography variant="body2" align="right">
          Apy
        </Typography>
        <Typography variant="body2" align="right">
          Per ${bignumberUtils.format(staked)}
        </Typography>
      </div>
      {apr.map((aprItem) => (
        <div className={styles.row} key={aprItem.title}>
          <Typography variant="body2">{aprItem.title}</Typography>
          <Typography variant="body2" family="mono" align="right">
            {bignumberUtils.formatMax(aprItem.apy, 10000)}%
          </Typography>
          <Typography variant="body2" family="mono" align="right">
            ${bignumberUtils.format(aprItem.perStaked)}
          </Typography>
        </div>
      ))}
    </Dialog>
  );
};
