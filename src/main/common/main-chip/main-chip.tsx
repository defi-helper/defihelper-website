import clsx from 'clsx';
import React from 'react';

import { Typography } from 'src/common/typography';
import { Paper } from 'src/common/paper';
import * as styles from './main-chip.css';

export type MainChipProps = {
  className?: string;
  icon?: string;
  name?: string;
};

export const MainChip: React.FC<MainChipProps> = (props) => {
  return (
    <Paper className={clsx(styles.root, props.className)}>
      {props.icon && <img src={props.icon} alt="" className={styles.icon} />}
      <Typography transform="uppercase" variant="h4" family="mono">
        {props.name}
      </Typography>
    </Paper>
  );
};
