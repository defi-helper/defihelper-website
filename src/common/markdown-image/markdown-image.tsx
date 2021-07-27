import clsx from 'clsx';
import React from 'react';

import { useMarkdownImageStyles } from './markdown-image.styles';

export type MarkdownImageProps = {
  alt: string;
  src?: string;
  className?: string;
};

export const MarkdownImage: React.VFC<MarkdownImageProps> = (props) => {
  const classes = useMarkdownImageStyles();

  return (
    <img
      alt={props.alt}
      src={props.src}
      loading="lazy"
      className={clsx(classes.root, props.className)}
    />
  );
};
