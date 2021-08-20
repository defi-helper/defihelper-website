import clsx from 'clsx';
import React from 'react';
import { Link } from 'src/common/link';
import { Typography } from 'src/common/typography';
import { config } from 'src/config';

import * as styles from './main-progress.css';

export type MainProgressProps = {
  className?: string;
  count: number;
  width: number;
  height: number;
  topTitle?: boolean;
  bottomTitle?: boolean;
};

const MAX = 8;

const createArrayNumber = (num: number) =>
  Array.from(Array(Math.floor(num)), (_, i) => i);

export const MainProgress: React.VFC<MainProgressProps> = (props) => {
  const filledArray = createArrayNumber(
    ((config.FEES / MAX) * 100 * props.count) / 100
  );
  const countArray = createArrayNumber(props.count);

  return (
    <div className={clsx(styles.root, props.className)}>
      {props.topTitle && (
        <Typography
          variant="body2"
          transform="uppercase"
          family="mono"
          className={styles.topTitle}
        >
          <span>
            {config.FEES} / {MAX} ETH fees collected till Governance token (DFH)
            launch
          </span>
          <Link href="/" className={styles.link}>
            Learn More
          </Link>
        </Typography>
      )}
      <div className={styles.progress}>
        {countArray.map((item) => (
          <div
            key={item}
            style={{ maxWidth: props.width, height: props.height }}
            className={clsx(styles.item, {
              [styles.filledItem]: filledArray[item] !== undefined
            })}
          />
        ))}
      </div>
      {props.bottomTitle && (
        <Typography
          transform="uppercase"
          family="mono"
          className={styles.bottomTitle}
        >
          {config.FEES}/{MAX} ETH fees collected
        </Typography>
      )}
    </div>
  );
};
