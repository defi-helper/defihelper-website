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

const DATA: {
  title: string;
  text: string;
  img: string;
  inDev?: boolean;
}[] = [
  {
    title: "Use 'auto-staking' to boost your APY",
    text: 'Auto-staking is a built-in automation. It helps you earn more by automatically adding your profits to the deposit, effectively auto-compounding your interest. DFH has the most effective auto-compounding algorithm on the market.',
    img: why1
  },
  {
    title: "Use 'stop loss'",
    text: "Protect your investment with our 'Stop-Loss' feature. We will track the value of your liquidity and will remove and sell LP token to the single token when the price will be lower then threshold.",
    img: why2,
    inDev: true
  },
  {
    title: 'Get daily portfolio updates',
    text: 'You can connect any amount of wallets and CEX exchanges to assemble your own portfolio. We will send you daily updates of how much USD you have in your pocket.',
    img: why4
  },
  {
    title: 'Use deep analytics',
    text: 'Our system is analyzing on-chain and off-chain data about tokens and protocols to provide you additional info to cut the risks. You can use information about 7d Real APY, Risk level and Risk factors for each protocol and liquidity pool',
    img: why3,
    inDev: true
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
        WHY DO YOU NEED TO INVEST WITH DEFIHELPER?
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
