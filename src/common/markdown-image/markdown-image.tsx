import clsx from 'clsx';
import React from 'react';

import * as styles from './markdown-image.css';

export type MarkdownImageProps = {
  alt: string;
  src?: string;
  className?: string;
};

export const MarkdownImage: React.VFC<MarkdownImageProps> = (props) => {
  return (
    <img
      alt={props.alt}
      src={props.src}
      loading="lazy"
      className={clsx(styles.root, props.className)}
    />
  );
};
