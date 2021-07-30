/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { useTheme } from 'react-jss';

import { MarkdownImage, MarkdownImageProps } from 'src/common';
import { useDocsRendererImageStyles } from './docs-renderer-image.styles';

export const DocsRendererImage: React.VFC<MarkdownImageProps> = (props) => {
  const classes = useDocsRendererImageStyles();

  return <MarkdownImage className={classes.root} alt={props.alt} />;
};
