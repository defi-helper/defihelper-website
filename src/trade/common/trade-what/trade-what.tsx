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

const DATA = [
  {
    title: 'USE TRAILING BUY',
    text: 'Integer sagittis euismod vitae penatibus libero, facilisi. Nulla elit suspendisse mauris fringilla turpis posuere. Aliquam, amet gravida blandit vitae id consequat risus. Faucibus amet, cum sit conse',
    img: what1
  },
  {
    title: 'STOP-LOSS and TAKE-PROFIT',
    text: 'Integer sagittis euismod vitae penatibus libero, facilisi. Nulla elit suspendisse mauris fringilla turpis posuere. Aliquam, amet gravida blandit vitae id consequat risus. Faucibus amet, cum sit conse',
    img: what2
  },
  {
    title: 'PROTECT YOUR TOKENS WITH SMART SELL FEATURE',
    text: 'Integer sagittis euismod vitae penatibus libero, facilisi. Nulla elit suspendisse mauris fringilla turpis posuere. Aliquam, amet gravida blandit vitae id consequat risus. Faucibus amet, cum sit conse',
    img: what3
  },
  {
    title: 'WAIT FOR PRICE GO UP',
    text: 'Integer sagittis euismod vitae penatibus libero, facilisi. Nulla elit suspendisse mauris fringilla turpis posuere. Aliquam, amet gravida blandit vitae id consequat risus. Faucibus amet, cum sit conse',
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
            </div>
          </div>
        ))}
      </div>
    </Grid.Container>
  );
};
