import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import earnmore1 from 'src/assets/images/earnmore1.png';
import * as styles from './trade-smart.css';

export type TradeSmartProps = {
  className?: string;
};

export const TradeSmart: React.VFC<TradeSmartProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <Typography
        transform="uppercase"
        family="mono"
        variant="h2"
        className={styles.title}
      >
        smart tools
      </Typography>
      <div className={styles.grid}>
        <img src={earnmore1} alt="" className={styles.gridImg} />
        <div className={styles.gridText}>
          <Typography
            transform="uppercase"
            family="mono"
            variant="h4"
            className={styles.gridTitle}
          >
            use cex trading tools on dex
          </Typography>
          <Typography className={styles.gridDescription}>
            Integer sagittis euismod vitae penatibus libero, facilisi. Nulla
            elit suspendisse mauris fringilla turpis posuere. Aliquam, amet
            gravida blandit vitae id consequat risus. Faucibus amet, cum sit
            conse
          </Typography>
        </div>
      </div>
    </Grid.Container>
  );
};
