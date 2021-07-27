import clsx from 'clsx';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import math from 'remark-math';

import {
  MarkdownLink,
  MarkdownCode,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  MarkdownList,
  MarkdownListItem
} from 'src/common';
import {
  DocsRendererParagraph,
  DocsRendererTable,
  DocsRendererTableOfContents,
  TableOfContent,
  DocsRendererMath,
  DocsRendererImage,
  DocsRendererHeading
} from './common';
import { useDocsRendererStyles } from './docs-renderer.styles';

const renderers = {
  paragraph: DocsRendererParagraph,
  link: MarkdownLink,
  linkReference: MarkdownLink,
  heading: DocsRendererHeading,
  image: DocsRendererImage,
  table: DocsRendererTable,
  tableHead: TableHead,
  tableBody: TableBody,
  tableRow: TableRow,
  tableCell: TableCell,
  code: MarkdownCode,
  list: MarkdownList,
  listItem: MarkdownListItem,
  inlineMath: ({ value }: { value: string }) => (
    <DocsRendererMath value={value} />
  ),
  math: ({ value }: { value: string }) => (
    <DocsRendererMath block value={value} />
  )
};

export type DocsRendererProps = {
  children: string;
  className?: string;
  tableOfContents?: TableOfContent[];
};

export const DocsRenderer: React.FC<DocsRendererProps> = (props) => {
  const classes = useDocsRendererStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <DocsRendererTableOfContents
        className={classes.tableOfContents}
        tableOfContents={props.tableOfContents}
      />
      <div className={classes.body}>
        <ReactMarkdown plugins={[gfm, math]} renderers={renderers}>
          {props.children}
        </ReactMarkdown>
      </div>
    </div>
  );
};
