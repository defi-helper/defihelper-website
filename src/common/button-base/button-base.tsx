import React from 'react';
import clsx from 'clsx';

import * as styles from './button-base.css';

export type ButtonBaseProps = React.ComponentProps<'button'> & {
  component?: React.ElementType;
  ref?:
    | ((instance: HTMLButtonElement | null) => void)
    | React.MutableRefObject<HTMLButtonElement | null>
    | null;
};

export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  function ButtonBase(props, ref) {
    const { component = 'button', className, children, ...restOfProps } = props;

    const Component: React.ElementType = component;

    const classNames = clsx(styles.root, className, {
      [styles.disabled]: props.disabled
    });

    return (
      <Component ref={ref} className={classNames} {...restOfProps}>
        {children}
      </Component>
    );
  }
);
