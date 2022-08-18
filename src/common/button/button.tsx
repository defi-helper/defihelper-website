import React from 'react';
import clsx from 'clsx';

import { ButtonBase, ButtonBaseProps } from '../button-base';
import { createComponent } from '../create-component';
import * as styles from './button.css';

type Props<C> = Omit<ButtonBaseProps, 'size'> & {
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'pink';
  loading?: boolean;
  size?: 'small' | 'medium' | 'large';
  as?: C;
};

export type ButtonProps<C extends React.ElementType = 'button'> = Props<C> &
  Omit<React.ComponentProps<C>, keyof Props<C>>;

const Button = function Button<
  C extends React.ElementType = 'button',
  R extends HTMLElement = HTMLButtonElement
>(
  {
    className,
    children,
    loading,
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    ...props
  }: ButtonProps<C>,
  ref: React.ForwardedRef<R>
) {
  const classNames = clsx(
    styles.root,
    className,
    styles.varinats[variant],
    styles.colors[color],
    styles.sizes[size]
  );

  return (
    <ButtonBase
      className={classNames}
      {...props}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
    >
      {loading && 'loading...'}
      {!loading && children}
    </ButtonBase>
  );
};

const Component = createComponent(Button);

export { Component as Button };
