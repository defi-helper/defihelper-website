import React from 'react';

import { Link } from '../link';
import * as styles from './markdown-link.css';

export type MarkdownLinkProps = {
  href: string;
};

export const MarkdownLink: React.FC<MarkdownLinkProps> = (props) => {
  return (
    <Link
      href={props.href}
      className={styles.root}
      target={props.href.includes('http') ? '_blank' : undefined}
      color="blue"
    >
      {props.children}
    </Link>
  );
};
