import clsx from 'clsx';
import React from 'react';

import { usePieIconStyles } from './pie-icon.styles';

export type PieIconProps = {
  children: number;
  width?: string;
  height?: string;
  className?: string;
};

export const PieIcon: React.FC<PieIconProps> = (props) => {
  const classes = usePieIconStyles();

  const { width = '16', height = '16' } = props;

  return (
    <svg
      viewBox="0 0 32 32"
      width={width}
      height={height}
      className={clsx(classes.root, props.className)}
    >
      <circle
        r="16"
        cx="16"
        cy="16"
        className={classes.circle}
        strokeWidth="32"
        strokeDasharray={`${props.children} 100`}
      />
    </svg>
  );
};
