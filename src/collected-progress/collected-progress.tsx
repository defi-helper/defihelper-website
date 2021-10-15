import clsx from 'clsx';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { bignumberUtils } from 'src/common/bignumber-utils';

import { Link } from 'src/common/link';
import { Typography } from 'src/common/typography';
import { config } from 'src/config';
import { useTreasuryQuery } from 'src/graphql/_generated-hooks';
import { URLS } from 'src/router/urls';
import * as styles from './collected-progress.css';

export type CollectedProgressProps = {
  className?: string;
  count: number;
  width: number;
  height: number;
  topTitle?: boolean;
  bottomTitle?: boolean;
};

const MAX = config.MAX_FEE;

const createArrayNumber = (num: number) =>
  Array.from(Array(Math.floor(num)), (_, i) => i);

export const CollectedProgress: React.VFC<CollectedProgressProps> = (props) => {
  const [{ data }] = useTreasuryQuery();

  const fees = data?.treasury.balanceUSD ?? 0;

  const filledArray = createArrayNumber(
    ((fees / MAX) * 100 * props.count) / 100
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
            {bignumberUtils.format(fees)} / ${bignumberUtils.format(MAX)} FEES
            COLLECTED
          </span>
          <Link
            as={ReactRouterLink}
            to={URLS.tokenomics}
            className={styles.link}
          >
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
      {props.topTitle && (
        <Typography className={styles.description} variant="body2">
          The DFH token will be launched only after the protocol collects some
          amount of fees as proof of concept
        </Typography>
      )}
      {props.bottomTitle && (
        <Typography
          transform="uppercase"
          family="mono"
          variant="body2"
          className={styles.bottomTitle}
        >
          {bignumberUtils.format(fees)}/${bignumberUtils.format(MAX)} FEES COLLECTED
        </Typography>
      )}
    </div>
  );
};
