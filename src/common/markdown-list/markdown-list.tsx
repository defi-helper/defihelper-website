import clsx from 'clsx';
import React from 'react';

import { useMarkdownListStyles } from './markdown-list.styles';

export type MarkdownListProps = {
  className?: string;
  ordered?: boolean;
};

export const MarkdownList: React.FC<MarkdownListProps> = (props) => {
  const Component = props.ordered ? 'ol' : 'ul';

  const classes = useMarkdownListStyles();

  return (
    <Component className={clsx(props.className, classes.root)}>
      {props.children}
    </Component>
  );
};
