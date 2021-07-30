import clsx from 'clsx';
import React from 'react';

import { usePlateStyles } from './plate.styles';

export type PlateProps = React.HTMLProps<HTMLDivElement> & {
  component?: React.ElementType;
  color?: 'grey' | 'transparent';
  withoutBorder?: boolean;
};

export const Plate = React.forwardRef<HTMLDivElement, PlateProps>(
  (props, ref) => {
    const {
      children,
      className,
      component = 'div',
      color = 'transparent',
      withoutBorder = false,
      ...restOfProps
    } = props;
    const classes = usePlateStyles();

    const Component = component;

    return (
      <Component
        {...restOfProps}
        className={clsx(
          classes.plate,
          classes[color],
          withoutBorder && classes.withoutBorder,
          className
        )}
        ref={ref}
      >
        {children}
      </Component>
    );
  }
);

Plate.displayName = 'Plate';
