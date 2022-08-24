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
    title: 'USE TRAILING BUY',
    text: 'Use "trailing buy" feature if you are not sure about the token price. Our bot will track the minimal price of the token and will try to buy deep to maximize your profit.',
    img: what1,
    inDev: true
  },
  {
    title: 'STOP LOSS and TAKE PROFIT',
    text: 'Protect your order with stop loss and take profit features. We will track the price of the token online and will execute the blockchain transaction as soon as price will be lower/higher than threshold.',
    img: what2
  },
  {
    title: 'PROTECT YOUR TOKENS WITH "SMART SELL"',
    text: 'Setup "smart sell" to setup stop loss and take profit for previously bought tokens. And start to watch your gains.',
    img: what3
  },
  {
    title: 'WAIT FOR PRICE GO UP',
    text: 'We recommend to use timeout for each order to prevent execution on deadly spikes. Our bot will wait some time to give a change price to go up. Do not sell on the deep.',
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
        why you need trade with defihelper?
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
