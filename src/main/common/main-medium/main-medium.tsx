import clsx from 'clsx';
import React from 'react';

import { dateUtils } from 'src/common/date-utils';
import { Grid } from 'src/common/grid';
import { Link } from 'src/common/link';
import { Typography } from 'src/common/typography';
import { Query } from 'src/graphql/_generated-hooks';
import * as styles from './main-medium.css';

export type MainMediumProps = {
  className?: string;
  landingMediumPosts: Query['landingMediumPosts'];
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
          {props.landingMediumPosts.map((article, index) => (
            <li key={String(index)} className={styles.gridItem}>
              <Link href={article.link} target="_blank" className={styles.card}>
                <Typography className={styles.cardDate} variant="body2">
                  {dateUtils.format(article.createdAt, 'MMM D, YYYY')}
                </Typography>
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
