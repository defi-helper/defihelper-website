import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import { Link } from 'src/common/link';
import * as styles from './main-investors.css';

export type MainInvestorsProps = {
  className?: string;
  title: string;
  children: {
    title: string;
    link: string;
    image: string;
  }[];
};

export const MainInvestors: React.VFC<MainInvestorsProps> = (props) => {
  return (
    <Grid.Container className={clsx(props.className)}>
      <Typography
        variant="h2"
        family="mono"
        transform="uppercase"
        className={styles.title}
      >
        {props.title}
      </Typography>
      <ul className={styles.list}>
        {props.children.map((link) => (
          <li className={styles.listItem} key={link.link}>
            <Link
              href={link.link}
              target="_blank"
              className={clsx(!link.link && styles.inactive)}
            >
              <img src={link.image} alt={link.title} className={styles.img} />
            </Link>
          </li>
        ))}
      </ul>
    </Grid.Container>
  );
};
