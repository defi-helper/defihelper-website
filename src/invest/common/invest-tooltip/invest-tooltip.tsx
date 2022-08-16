import clsx from 'clsx';
import React from 'react';

import { Paper } from 'src/common/paper';
import * as styles from './invest-tooltip.css';

export type InvestTooltipProps = {
  children: React.ReactElement;
  text: React.ReactNode;
  className?: string;
  direction?: keyof typeof styles.directions;
};

export const InvestTooltip: React.VFC<InvestTooltipProps> = (props) => {
  return (
    <div className={clsx(styles.root, props.className)}>
      {props.children}
      <div
        className={clsx(
          styles.dropdown,
          styles.directions[props.direction ?? 'right']
        )}
      >
        <Paper radius={8} className={styles.dropdownInner}>
          {props.text}
        </Paper>
      </div>
    </div>
  );
};
