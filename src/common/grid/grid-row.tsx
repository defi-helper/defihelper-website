import React from 'react';
import clsx from 'clsx';

import * as styles from './grid.css';
import { createComponent } from '../create-component';

export type Props<C extends React.ElementType = 'div'> = {
  className?: string;
  items?: 'initial' | 'flexStart' | 'center' | 'flexEnd';
  justify?: 'initial' | 'flexStart' | 'center' | 'flexEnd' | 'spaceBetween';
  as?: C;
};

export type GridRowProps<C extends React.ElementType = 'div'> = Props<C> &
  Omit<React.ComponentProps<C>, keyof Props<C>>;

export const GridRow = createComponent(
  <
    C extends React.ElementType = 'button',
    R extends HTMLElement = HTMLButtonElement
  >(
    props: GridRowProps<C>,
    ref: React.ForwardedRef<R>
  ) => {
    const {
      items = 'initial',
      justify = 'initial',
      as = 'div',
      className,
      ...restProps
    } = props;

    const Component = as;

    return (
      <Component
        ref={ref as React.ForwardedRef<HTMLDivElement>}
        {...restProps}
        className={clsx(
          styles.row,
          styles.items[items],
          styles.justify[justify],
          className
        )}
      >
        {props.children}
      </Component>
    );
  }
);
