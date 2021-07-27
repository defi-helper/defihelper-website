import React from 'react';
import clsx from 'clsx';

import { ButtonBase, ButtonBaseProps } from '../button-base';
import { Loader } from '../loader';
import * as styles from './button.css';

export type ButtonProps = Omit<ButtonBaseProps, 'size'> & {
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
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
      size = 'large',
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
        {loading && <Loader width="1em" height="1em" strokeWidth={5} />}
        {!loading && children}
      </ButtonBase>
    );
  }
);

Button.displayName = 'Button';
