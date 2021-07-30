import React from 'react';

import { Table } from 'src/common';
import { useDocsRendererTableStyles } from './docs-renderer-table.styles';

export const DocsRendererTable: React.FC = (props) => {
  const classes = useDocsRendererTableStyles();

  return <Table className={classes.root}>{props.children}</Table>;
};
