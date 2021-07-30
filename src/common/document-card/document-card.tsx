import clsx from 'clsx';
import React from 'react';

import { Typography } from '../typography';
import { useDocumentCardStyles } from './document-card.styles';

export type DocumentCardProps = {
  className?: string;
  link?: string;
};

export const DocumentCard: React.FC<DocumentCardProps> = (props) => {
  const classes = useDocumentCardStyles();

  return (
    <div className={classes.root}>
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className={clsx(classes.card, props.className)}
      >
        <Typography variant="h3">{props.children} ↓</Typography>
      </a>
    </div>
  );
};
