import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import what1 from 'src/assets/images/trade-what1.png';
import what2 from 'src/assets/images/trade-what2.png';
import what3 from 'src/assets/images/trade-what3.png';
import what4 from 'src/assets/images/trade-what4.png';
import * as styles from './trade-what.css';

export type TradeWhatProps = {
  className?: string;
};

const DATA: {
  title: string;
  text: string;
  img: string;
  inDev?: boolean;
}[] = [
  {
    title: 'USE \'Trailing\'',
    text: 'Use our \'Trailing\' feature if you are unsure about the token price. Our bot will track the price of the token and will try to maximize your profit.',
    img: what1,
    inDev: true
  },
  {
    title: 'STOP LOSS and TAKE PROFIT',
    text: 'Protect your order with our Stop-Loss and Take-Profit features. We will track the price of the token online and will execute the blockchain transaction as soon as price will be lower/higher than the threshold. Then, sit back, and watch the gains.',
    img: what2
  },
  {
    title: 'PROTECT YOUR TOKENS WITH \'Smart Sell\'',
    text: 'Setup \'Smart Sell\' to enable our \'Stop-Loss\' and \'Take-Profit\' features for previously bought tokens. ',
    img: what3
  },
  {
    title: 'WAIT FOR THE PRICE TO RISE',
    text: 'We recommend that you use the timeout feature for each order, to prevent execution on deadly spikes. Our bot will delay to allow for the price to stabilise, so that you don\'t sell at the lowest price.',
    img: what4
  }
];

export const TradeWhat: React.VFC<TradeWhatProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <Typography
        transform="uppercase"
        family="mono"
        variant="h2"
        className={styles.title}
      >
        Why you need to DeFiHelper's 'Trade' Functionality
      </Typography>
      <div className={styles.list}>
        {DATA.map((dataItem) => (
          <div key={dataItem.title} className={styles.card}>
            <img src={dataItem.img} alt="" className={styles.cardImg} />
            <div className={styles.cardText}>
              <Typography
                transform="uppercase"
                family="mono"
                variant="h4"
                className={styles.cardTitle}
              >
                {dataItem.title}
              </Typography>
              <Typography className={styles.cardDescription}>
                {dataItem.text}
              </Typography>
              {dataItem.inDev && (
                <Typography
                  variant="h4"
                  as="div"
                  transform="uppercase"
                  family="mono"
                  className={styles.cardInDev}
                >
                  in development
                </Typography>
              )}
            </div>
          </div>
        ))}
      </div>
    </Grid.Container>
  );
};
