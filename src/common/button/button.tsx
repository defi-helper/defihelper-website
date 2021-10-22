import React from 'react';
import clsx from 'clsx';

import { ButtonBase, ButtonBaseProps } from '../button-base';
import * as styles from './button.css';

export type ButtonProps = Omit<ButtonBaseProps, 'size'> & {
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'pink';
  loading?: boolean;
  size?: 'small' | 'medium' | 'large';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      loading,
      variant = 'contained',
      color = 'primary',
      size = 'medium',
      ...props
    },
    ref
  ) => {
    const classNames = clsx(
      styles.root,
      className,
      styles.varinats[variant],
      styles.colors[color],
      styles.sizes[size]
    );

    return (
      <ButtonBase className={classNames} ref={ref} {...props}>
        {loading && 'loading...'}
        {!loading && children}
      </ButtonBase>
    );
  }
);

Button.displayName = 'Button';
