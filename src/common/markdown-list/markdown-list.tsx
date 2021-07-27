import clsx from 'clsx';
import React from 'react';

import * as styles from './markdown-list.css';

export type MarkdownListProps = {
  className?: string;
  ordered?: boolean;
};

export const MarkdownList: React.FC<MarkdownListProps> = (props) => {
  const Component = props.ordered ? 'ol' : 'ul';

  return (
    <Component className={clsx(props.className, styles.root)}>
      {props.children}
    </Component>
  );
};
