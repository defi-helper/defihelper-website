import React from 'react';

import { Typography } from '../typography';
import { useMarkdownParagraphStyles } from './markdown-paragraph.styles';

export const MarkdownParagraph: React.FC<{ variant?: 'body1' | 'h5' }> = (
  props
) => {
  const classes = useMarkdownParagraphStyles();

  const { variant = 'body1' } = props;

  return (
    <Typography variant={variant} className={classes.root}>
      {props.children}
    </Typography>
  );
};
