import clsx from 'clsx';
import React from 'react';

import { Typography } from 'src/common/typography';
import * as styles from './factoid.css';

export type FactoidProps = {
  className?: string;
  children: {
    title: string;
    description: string;
  }[];
};

export const Factoid: React.VFC<FactoidProps> = (props) => {
  return (
    <ul className={clsx(styles.root, props.className)}>
      {props.children.map((textItem) => (
        <li key={textItem.title}>
          <Typography
            className={styles.title}
            variant="h4"
            family="mono"
            transform="uppercase"
          >
            {textItem.title}
          </Typography>
          <Typography className={styles.description}>
            {textItem.description}
          </Typography>
        </li>
      ))}
    </ul>
  );
};
