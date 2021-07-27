import clsx from 'clsx';
import React from 'react';

import * as styles from './link.css';

export type LinkProps = {
  component?: React.ElementType;
  to?: string;
  href?: string;
  target?: string;
  children?: React.ReactNode;
  className?: string;
  rel?: string;
  underline?: 'always' | 'hover' | 'none';
  color?: 'blue' | 'primary';
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link(props, ref) {
    const {
      component = 'a',
      underline = 'none',
      className,
      color = 'primary',
      ...restOfProps
    } = props;

    const Component = component;

    const classNames = clsx(
      styles.root,
      className,
      styles.underlines[underline],
      styles.colors[color]
    );

    return (
      <Component ref={ref} className={classNames} {...restOfProps}>
        {props.children}
      </Component>
    );
  }
);
