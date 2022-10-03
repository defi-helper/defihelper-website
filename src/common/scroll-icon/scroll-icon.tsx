import clsx from 'clsx';
import React from 'react';

import * as styles from './scroll-icon.css';

export type ScrollIconProps = {
  className?: string;
};

export const ScrollIcon = (props: ScrollIconProps) => {
  return (
    <div className={clsx(styles.root, props.className)}>
      <div className={styles.circleOuter}>
        <div className={styles.circleInner} />
      </div>
    </div>
  );
};
