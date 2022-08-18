import React from 'react';

import { Dialog } from '../dialog';
import * as styles from './video-dialog.css';

export type VideoDialogProps = {
  videoId?: string;
};

export const VideoDialog: React.VFC<VideoDialogProps> = (props) => {
  return (
    <Dialog className={styles.root}>
      <div className={styles.video}>
        <iframe
          className={styles.videoInner}
          scrolling="no"
          title="This is a unique title"
          src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Dialog>
  );
};
