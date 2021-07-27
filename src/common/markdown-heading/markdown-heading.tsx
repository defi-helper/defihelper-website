import clsx from 'clsx';
import React from 'react';

import { Typography } from '../typography';
import { useMarkdownHeadingStyles } from './markdown-heading.styles';

export type MarkdownHeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

type Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export const MarkdownHeading: React.FC<MarkdownHeadingProps> = (props) => {
  const classes = useMarkdownHeadingStyles();

  const variant = `h${props.level}` as Variants;

  return (
    <Typography
      variant={variant}
      className={clsx(classes.root, props.className)}
    >
      {props.children}
    </Typography>
  );
};
