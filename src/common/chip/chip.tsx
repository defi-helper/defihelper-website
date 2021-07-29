import React from 'react';
import clsx from 'clsx';

import { useChipStyles } from './chip.styles';
import { Typography } from '../typography';

export type ChipProps = {
  className?: string;
};

export const Chip: React.FC<ChipProps> = (props) => {
  const classes = useChipStyles();

  return (
    <Typography
      variant="body1"
      as="div"
      className={clsx(classes.chip, props.className)}
    >
      {props.children}
    </Typography>
  );
};
