import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import crypto_omg from 'src/assets/images/crypto_omg.png';
import big_brain_holdings from 'src/assets/images/big_brain_holdings.png';
import starter from 'src/assets/images/starter.png';
import huckleberry from 'src/assets/images/huckleberry.png';
import { Link } from 'src/common/link';
import * as styles from './main-investors.css';

export type MainInvestorsProps = {
  className?: string;
};

const LINKS = [
  {
    title: 'bigbrainholdings',
    link: 'https://www.bigbrain.holdings/',
    image: big_brain_holdings
  },
  {
    title: 'starter',
    link: 'https://6kstarter.com/',
    image: starter
  },
  {
    title: 'cryptoomg',
    link: 'https://cryptoomg.com/',
    image: crypto_omg
  },
  {
    title: 'huckleberry',
    link: 'https://www.huckleberry.finance/',
    image: huckleberry
  }
];

export const MainInvestors: React.FC<MainInvestorsProps> = (props) => {
  return (
    <Grid.Container className={clsx(props.className)}>
      <Typography
        variant="h2"
        family="mono"
        transform="uppercase"
        className={styles.title}
      >
        Investors and partners
      </Typography>
      <ul className={styles.list}>
        {LINKS.map((link) => (
          <li className={styles.listItem} key={link.link}>
            <Link href={link.link} target="_blank">
              <img src={link.image} alt={link.title} className={styles.img} />
            </Link>
          </li>
        ))}
      </ul>
    </Grid.Container>
  );
};
