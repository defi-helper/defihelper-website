import clsx from 'clsx';
import React from 'react';

import { MarkdownHeading, MarkdownHeadingProps } from 'src/common';
import { useDocsRendererHeadingStyles } from './docs-renderer-heading.styles';

export const DocsRendererHeading: React.FC<MarkdownHeadingProps> = (props) => {
  const classes = useDocsRendererHeadingStyles();

  return (
    <MarkdownHeading
      {...props}
      className={clsx(classes.root, classes[props.level])}
    />
  );
};
