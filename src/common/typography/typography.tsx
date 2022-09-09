import React from 'react';
import clsx from 'clsx';

import { createComponent } from '../create-component';
import * as styles from './typography.css';

type Variants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body1'
  | 'body2'
  | 'inherit';

type TagNames = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

const variantMapping: Record<Variants, TagNames> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  body1: 'p',
  body2: 'p',
  inherit: 'span'
};

type Props<C> = {
  variant?: Variants;
  className?: string;
  align?: 'left' | 'center' | 'right';
  as?: C;
  family?: 'square' | 'circle' | 'mono';
  transform?: 'uppercase' | 'lowercase' | 'normal';
  // eslint-disable-next-line react/no-unused-prop-types
  ref?:
    | ((instance: HTMLHeadingElement | null) => void)
    | React.MutableRefObject<HTMLHeadingElement | null>
    | null;
  children?: React.ReactNode;
  weight?: keyof typeof styles.weights;
};

export type TypographyProps<C extends React.ElementType = 'div'> = Props<C> &
  Omit<React.ComponentProps<C>, keyof Props<C> | 'radioGroup'>;

const Typography = function Typography<
  C extends React.ElementType = 'div',
  R extends HTMLElement = HTMLDivElement
>(props: TypographyProps<C>, ref: React.ForwardedRef<R>) {
  const {
    variant = 'body1',
    align = 'left',
    family = 'square',
    transform = 'normal',
    weight = 'normal',
    as,
    className,
    ...restProps
  } = props;

  const classNames = clsx(
    styles.root,
    className,
    styles.variants[variant],
    styles.aligns[align],
    styles.fontFamilies[family],
    styles.transforms[transform],
    styles.weights[weight]
  );

  const Component = as ?? variantMapping[variant];

  return (
    <Component
      className={classNames}
      {...restProps}
      ref={ref as React.ForwardedRef<HTMLDivElement>}
    >
      {props.children}
    </Component>
  );
};

const Component = createComponent(Typography);

export { Component as Typography };
