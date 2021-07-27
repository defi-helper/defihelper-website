import clsx from 'clsx';
import React from 'react';

import { useMarkdownListStyles } from './markdown-list.styles';

export type MarkdownListItemProps = {
  className?: string;
};

export const MarkdownListItem: React.FC<MarkdownListItemProps> = (props) => {
  const classes = useMarkdownListStyles();

  return (
    <li className={clsx(props.className, classes.listItem)}>
      {props.children}
    </li>
  );
};
