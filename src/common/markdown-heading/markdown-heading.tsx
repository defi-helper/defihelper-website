import clsx from 'clsx';
import React from 'react';

import { Typography } from '../typography';
import * as styles from './markdown-heading.css';

export type MarkdownHeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

type Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export const MarkdownHeading: React.FC<MarkdownHeadingProps> = (props) => {
  const variant = `h${props.level}` as Variants;

  return (
    <Typography
      variant={variant}
      className={clsx(styles.root, props.className)}
    >
      {props.children}
    </Typography>
  );
};
