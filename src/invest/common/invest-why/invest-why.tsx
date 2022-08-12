import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import why1 from 'src/assets/images/invest-why1.png';
import why2 from 'src/assets/images/invest-why2.png';
import why3 from 'src/assets/images/invest-why3.png';
import why4 from 'src/assets/images/invest-why4.png';
import * as styles from './invest-why.css';

export type InvestWhyProps = {
  className?: string;
};

const DATA = [
  {
    title: 'Use auto-staking to boost your APY',
    text: 'Integer sagittis euismod vitae penatibus libero, facilisi. Nulla elit suspendisse mauris fringilla turpis posuere. Aliquam, amet gravida blandit vitae id consequat risus. Faucibus amet, cum sit conse',
    img: why1
  },
  {
    title: 'Protect your money with stop-loss / take profit features',
    text: 'Integer sagittis euismod vitae penatibus libero, facilisi. Nulla elit suspendisse mauris fringilla turpis posuere. Aliquam, amet gravida blandit vitae id consequat risus. Faucibus amet, cum sit conse',
    img: why2
  },
  {
    title: 'compare pools by REAL profitability',
    text: 'Integer sagittis euismod vitae penatibus libero, facilisi. Nulla elit suspendisse mauris fringilla turpis posuere. Aliquam, amet gravida blandit vitae id consequat risus. Faucibus amet, cum sit conse',
    img: why3
  },
  {
    title: 'Get daily portfolio updates in telegram or email',
    text: 'Integer sagittis euismod vitae penatibus libero, facilisi. Nulla elit suspendisse mauris fringilla turpis posuere. Aliquam, amet gravida blandit vitae id consequat risus. Faucibus amet, cum sit conse',
    img: why4
  }
];

export const InvestWhy: React.VFC<InvestWhyProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <Typography
        transform="uppercase"
        family="mono"
        variant="h2"
        className={styles.title}
      >
        WHY YOU NEED INVEST WITH DEFIHELPER?
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
