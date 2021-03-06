import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import bbc from 'src/assets/images/bbc.png';
import * as styles from './main-partners.css';

export type MainPartnersProps = {
  className?: string;
};

export const MainPartners: React.FC<MainPartnersProps> = (props) => {
  return (
    <Grid.Container className={clsx(props.className)}>
      <Typography
        variant="h2"
        family="mono"
        transform="uppercase"
        className={styles.title}
      >
        Partners
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
