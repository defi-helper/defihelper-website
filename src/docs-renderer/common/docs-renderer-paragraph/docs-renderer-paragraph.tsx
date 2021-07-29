import React, { isValidElement } from 'react';

import { Typography } from 'src/common';
import { useDocsRendererParagraphStyles } from './docs-renderer-paragraph.styles';

export const DocsRendererParagraph: React.FC = (props) => {
  const classes = useDocsRendererParagraphStyles();

  if (
    Array.isArray(props.children) &&
    props.children[0] &&
    isValidElement(props.children[0]) &&
    props.children[0].props.node?.type === 'image'
  ) {
    // rendering media without p wrapper

    return <>{props.children}</>;
  }

  return (
    <Typography variant="h5" as="p" className={classes.root}>
      {props.children}
    </Typography>
  );
};
