import React from 'react';

import { TableOfContent } from '../build-table-of-contents';
import { DocsRendererTableOfContentsList } from './docs-renderer-table-of-contents-list';
import { DocsRendererTableOfContentsContainer } from './docs-renderer-table-of-contents.container';

export type DocsRendererTableOfContentsProps = {
  className?: string;
  tableOfContents?: TableOfContent[];
};

export const DocsRendererTableOfContents: React.FC<DocsRendererTableOfContentsProps> =
  (props) => {
    return (
      <DocsRendererTableOfContentsContainer>
        {(tableOfContents, activeElement) => {
          const mergedTableOfContents = (props.tableOfContents ?? []).map(
            (tableOfContent) => {
              const findedTableOfContent = tableOfContents.find(
                (heading) => heading.text === tableOfContent.text
              );

              if (findedTableOfContent) {
                return findedTableOfContent;
              }

              return tableOfContent;
            }
          );

          const newTableOfContents = mergedTableOfContents.length
            ? mergedTableOfContents
            : tableOfContents;

          return (
            <DocsRendererTableOfContentsList
              tableOfContent={newTableOfContents}
              activeElement={activeElement}
              className={props.className}
            />
          );
        }}
      </DocsRendererTableOfContentsContainer>
    );
  };
