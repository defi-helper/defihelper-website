import React from 'react';
import clsx from 'clsx';

import * as styles from './gird.css';

export type GridRowProps = {
  className?: string;
  items?: 'initial' | 'flexStart' | 'center' | 'flexEnd';
  justify?: 'initial' | 'flexStart' | 'center' | 'flexEnd' | 'spaceBetween';
};

export const GridRow: React.FC<GridRowProps> = (props) => {
  const { items = 'initial', justify = 'initial' } = props;

  return (
    <div
      className={clsx(
        styles.row,
        styles.items[items],
        styles.justify[justify],
        props.className
      )}
    >
      {props.children}
    </div>
  );
};
