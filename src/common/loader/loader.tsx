import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { ReactComponent as HatOutlineIcon } from 'src/assets/images/hat-loader-base.svg';
import { useLoaderStyles } from './loader.styles';

export type LoaderProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
  strokeWidth?: number;
};

export const Loader = forwardRef<HTMLDivElement, LoaderProps>((props, ref) => {
  const { width = 80, height = 80, strokeWidth = 1 } = props;

  const classes = useLoaderStyles();

  return (
    <div className={clsx(classes.root, props.className)} ref={ref}>
      <HatOutlineIcon strokeWidth={strokeWidth} width={width} height={height} />
    </div>
  );
});

Loader.displayName = 'Loader';
