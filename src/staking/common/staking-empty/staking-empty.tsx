import clsx from 'clsx';
import React from 'react';

import { useStakingEmptyStyles } from './staking-empty.styles';

export type StakingEmptyProps = {
  className?: string;
};

export const StakingEmpty: React.VFC<StakingEmptyProps> = (props) => {
  const classes = useStakingEmptyStyles();

  return <div className={clsx(classes.root, props.className)} />;
};
