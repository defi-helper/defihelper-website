import React from 'react';

import { Typography } from '../typography';
import * as styles from './markdown-paragraph.css';

export const MarkdownParagraph: React.FC<{ variant?: 'body1' | 'h5' }> = (
  props
) => {
  const { variant = 'body1' } = props;

  return (
    <Typography variant={variant} className={styles.root}>
      {props.children}
    </Typography>
  );
};
