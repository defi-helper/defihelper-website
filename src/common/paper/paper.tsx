import React from 'react';
import clsx from 'clsx';

import * as styles from './paper.css';

export type PaperProps = React.ComponentProps<'div'>;

export const Paper: React.FC<PaperProps> = (props) => {
  return <div {...props} className={clsx(styles.root, props.className)} />;
};
