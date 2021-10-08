import clsx from 'clsx';
import React from 'react';
import { Typography } from '../typography';

import * as styles from './markdown-list.css';

export type MarkdownListItemProps = {
  className?: string;
};

export const MarkdownListItem: React.FC<MarkdownListItemProps> = (props) => {
  return (
    <li className={clsx(props.className, styles.listItem)}>
      <Typography>{props.children}</Typography>
    </li>
  );
};
