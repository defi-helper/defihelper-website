import clsx from 'clsx';
import React from 'react';

import { Button } from 'src/common/button';
import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import * as styles from './invest-pools.css';

export type InvestPoolsProps = {
  className?: string;
};

export const InvestPools: React.VFC<InvestPoolsProps> = (props) => {
  const count = 768;

  return (
    <Grid.Container className={clsx(props.className, styles.root)}>
      <Typography
        transform="uppercase"
        family="mono"
        variant="h2"
        className={styles.title}
      >
        top pools to invest right now
      </Typography>
      <div className={styles.table}>
        <div>
          <Typography variant="body2">Pool</Typography>
          <Typography variant="body2">Protocol</Typography>
          <Typography variant="body2">TVL</Typography>
          <Typography variant="body2">APY</Typography>
          <Typography variant="body2">Real APR (7d)</Typography>
          <Typography variant="body2">APY Boost</Typography>
        </div>
      </div>
      <Button color="secondary" className={styles.button}>
        See more in app ({count})
      </Button>
    </Grid.Container>
  );
};
