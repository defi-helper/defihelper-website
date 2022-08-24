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
        smart bot that works 24/7
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
            Make your own advanced strategy
          </Typography>
          <Typography className={styles.gridDescription} as="div">
            <p>
              Usually this features available only for professional traders or
              in subscription based trading systems, but with DeFiHelper you can
              create your own advanced strategy to buy any liquid or low liquid
              tokens on the most popular decentralized exchanges.
            </p>

            <p>
              For example: you can set up your order with &quot;trailing
              buy&quot;, choose the price for &quot;stop loss&quot;, &quot;take
              profit&quot; and see how our trading solution will work for you.
            </p>

            <p>
              DeFiHelper bot will recalculate the price of the token after every
              trade in the liquidity pool and will make a binary decision to
              execute your order or not.
            </p>

            <p>
              You can also protect your stop loss from the price spikes with
              additional execution timeout. If the price will go back during the
              timeout - your order will not be executed.
            </p>
          </Typography>
        </div>
      </div>
    </Grid.Container>
  );
};
