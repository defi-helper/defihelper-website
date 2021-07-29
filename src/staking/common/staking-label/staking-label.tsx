import React from 'react';

import { Typography, TypographyProps } from 'src/common';

export type StakingLabelProps = {
  className?: string;
  title: string;
  value: React.ReactNode;
  loading: boolean;
  variant?: TypographyProps['variant'];
};

export const StakingLabel: React.FC<StakingLabelProps> = (props) => {
  const { variant = 'h5' } = props;

  return (
    <>
      <Typography variant={variant} align="center" className={props.className}>
        {props.title}:{' '}
        <Typography variant="inherit" as="span">
          {props.loading ? '...' : props.value}
        </Typography>
        {props.children}
      </Typography>
    </>
  );
};
