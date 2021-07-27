import clsx from 'clsx';
import React from 'react';

import { Typography } from '../typography';
import { DocumentCard } from '../document-card';
import { useDocumentListStyles } from './document-list.styles';

type Document = {
  url: string;
  title: string;
};

export type DocumentListProps = {
  className?: string;
  title: React.ReactNode;
  documents: Document[];
};

export const DocumentList: React.FC<DocumentListProps> = (props) => {
  const classes = useDocumentListStyles();

  return (
    <div className={clsx(props.className)}>
      <Typography variant="h3" align="center" className={classes.title}>
        {props.title}
      </Typography>
      <div className={classes.row}>
        {props.documents.map((document, index) => {
          const id = `${document.title}-${index}`;

          return (
            <DocumentCard link={document.url} key={id}>
              {document.title}
            </DocumentCard>
          );
        })}
      </div>
    </div>
  );
};
