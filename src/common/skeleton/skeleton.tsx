import React from 'react';
import clsx from 'clsx';

import { useSkeletonStyles } from './skeleton.styles';

export type SkeletonProps = {
  component?: React.ElementType;
  className?: string;
  height?: number | string;
  width?: number | string;
  maxWidth?: number | string;
  variant?: 'text' | 'rectangular' | 'circular';
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: object;
  ref?:
    | ((instance: React.ElementType | null) => void)
    | React.MutableRefObject<React.ElementType | null>
    | null;
};

export const Skeleton = React.forwardRef<React.ElementType, SkeletonProps>(
  (props, ref) => {
    const {
      className,
      component: Component = 'span',
      height,
      style,
      variant = 'text',
      width,
      maxWidth,
      ...restOfProps
    } = props;

    const classes = useSkeletonStyles();

    const hasChildren = Boolean(restOfProps.children);

    const classNames = clsx(
      classes.root,
      classes[variant],
      {
        [classes.withChildren]: hasChildren,
        [classes.fitContent]: hasChildren && !width,
        [classes.heightAuto]: hasChildren && !height
      },
      className
    );

    return (
      <Component
        ref={ref}
        className={classNames}
        {...restOfProps}
        style={{
          width,
          height,
          maxWidth,
          ...style
        }}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';
