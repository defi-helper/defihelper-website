import React from 'react';
import clsx from 'clsx';

import * as styles from './gird.css';

export type GridContainerProps = {
  className?: string;
};

export const GridContainer: React.FC<GridContainerProps> = (props) => {
  return (
    <div className={clsx(styles.container, props.className)}>
      {props.children}
    </div>
  );
};
