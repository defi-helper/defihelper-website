import React from 'react';
import clsx from 'clsx';

import { Typography } from '../typography';
import * as styles from './video.css';
import { Grid } from '../grid';

export type VideoProps = {
  className?: string;
  title?: React.ReactNode;
  videoId?: string;
};

export const Video: React.VFC<VideoProps> = (props) => {
  if (!props.videoId) return <></>;

  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <Typography
        as="div"
        variant="h2"
        family="mono"
        transform="uppercase"
        className={styles.title}
      >
        {props.title}
      </Typography>
      <div className={styles.video}>
        <iframe
          className={styles.videoInner}
          scrolling="no"
          title="This is a unique title"
          src={`https://www.youtube.com/embed/${props.videoId}?autoplay=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Grid.Container>
  );
};
