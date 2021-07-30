import React from 'react';
import clsx from 'clsx';

import { useStatusStyles } from './status.styles';
import { Typography } from '../typography';

export type StatusProps = {
  className?: string;
  color:
    | 'grey'
    | 'blue'
    | 'red'
    | 'orange'
    | 'green'
    | 'beige'
    | 'pink'
    | 'purple'
    | 'black'
    | 'green1';
  variant?: 'contained' | 'outlined';
};

export const Status: React.FC<StatusProps> = (props) => {
  const classes = useStatusStyles();

  const { variant = 'outlined' } = props;

  return (
    <Typography
      variant="h5"
      as="div"
      className={clsx(
        classes.root,
        classes[props.color],
        classes[variant],
        props.className
      )}
    >
      {props.children}
    </Typography>
  );
};
