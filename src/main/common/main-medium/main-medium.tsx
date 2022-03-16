import clsx from 'clsx';
import React from 'react';

import { dateUtils } from 'src/common/date-utils';
import { Grid } from 'src/common/grid';
import { Link } from 'src/common/link';
import { Typography } from 'src/common/typography';
import * as styles from './main-medium.css';

const DATA = [
  {
    title: 'MINA Rallies in the Last 24 Hours After FTX Announcement',
    img: 'https://minaprotocol.com/wp-content/uploads/Screen-Shot-2022-02-25-at-2.01.29-PM-e1645826570219.png',
    text: 'Yesterday, FTX announced that it would list Mina Protocol (MINA) Perpetual Futures by February 15 at 14:00 UTC time.',
    link: 'https://www.fxempire.com/forecasts/article/mina-rallies-in-the-last-24-hours-after-ftx-announcement-899195',
    createdAt: new Date().toISOString()
  },
  {
    title: 'MINA Rallies in the Last 24 Hours After FTX Announcement',
    img: 'https://minaprotocol.com/wp-content/uploads/Screen-Shot-2022-02-25-at-2.01.29-PM-e1645826570219.png',
    text: 'Yesterday, FTX announced that it would list Mina Protocol (MINA) Perpetual Futures by February 15 at 14:00 UTC time.',
    link: 'https://www.fxempire.com/forecasts/article/mina-rallies-in-the-last-24-hours-after-ftx-announcement-899195',
    createdAt: new Date().toISOString()
  },
  {
    title: 'MINA Rallies in the Last 24 Hours After FTX Announcement',
    img: 'https://minaprotocol.com/wp-content/uploads/Screen-Shot-2022-02-25-at-2.01.29-PM-e1645826570219.png',
    text: 'Yesterday, FTX announced that it would list Mina Protocol (MINA) Perpetual Futures by February 15 at 14:00 UTC time.',
    link: 'https://www.fxempire.com/forecasts/article/mina-rallies-in-the-last-24-hours-after-ftx-announcement-899195',
    createdAt: new Date().toISOString()
  },
  {
    title: 'MINA Rallies in the Last 24 Hours After FTX Announcement',
    img: 'https://minaprotocol.com/wp-content/uploads/Screen-Shot-2022-02-25-at-2.01.29-PM-e1645826570219.png',
    text: 'Yesterday, FTX announced that it would list Mina Protocol (MINA) Perpetual Futures by February 15 at 14:00 UTC time.',
    link: 'https://www.fxempire.com/forecasts/article/mina-rallies-in-the-last-24-hours-after-ftx-announcement-899195',
    createdAt: new Date().toISOString()
  }
];

export type MainMediumProps = {
  className?: string;
};

export const MainMedium: React.VFC<MainMediumProps> = (props) => {
  return (
    <div className={clsx(styles.root, props.className)}>
      <Grid.Container>
        <Typography
          variant="h2"
          family="mono"
          transform="uppercase"
          className={styles.title}
        >
          Latest Blog Posts
        </Typography>
        <ul className={styles.grid}>
          {DATA.map((article, index) => (
            <li key={String(index)} className={styles.gridItem}>
              <Link href={article.link} target="_blank" className={styles.card}>
                <Typography className={styles.cardDate} variant="body2">
                  {dateUtils.format(article.createdAt, 'MMM DD, YYYY')}
                </Typography>
                {!index && (
                  <img className={styles.cardImg} src={article.img} alt="" />
                )}
                <Typography
                  variant="h4"
                  family="mono"
                  transform="uppercase"
                  className={styles.cardTitle}
                >
                  {article.title}
                </Typography>
                <Typography className={styles.cardText}>
                  {article.text}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </Grid.Container>
    </div>
  );
};
