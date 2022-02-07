import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import bbc from 'src/assets/images/bbc.png';
import * as styles from './main-investors.css';

export type MainInvestorsProps = {
  className?: string;
};

export const MainInvestors: React.FC<MainInvestorsProps> = (props) => {
  return (
    <Grid.Container className={clsx(props.className)}>
      <Typography
        variant="h2"
        family="mono"
        transform="uppercase"
        className={styles.title}
      >
        Investors
      </Typography>
      <ul className={styles.list}>
        {Array.from({ length: 7 }).map((_, i) => (
          <li className={styles.listItem} key={String(i)}>
            <img src={bbc} alt="" className={styles.img} />
          </li>
        ))}
      </ul>
    </Grid.Container>
  );
};
