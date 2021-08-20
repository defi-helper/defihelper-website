import clsx from 'clsx';
import React from 'react';

import { Typography } from 'src/common/typography';
import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Button } from 'src/common/button';
import * as styles from './main-editor.css';

export type MainEditorProps = {
  className?: string;
};

export const MainEditor: React.VFC<MainEditorProps> = (props) => {
  return (
    <div className={clsx(props.className)}>
      <Grid.Container>
        <Paper className={styles.list}>
          <div className={styles.card}>
            <Typography
              variant="h3"
              transform="uppercase"
              family="mono"
              className={styles.cardTitle}
            >
              Build and Earn
            </Typography>
            <Typography className={styles.cardDescription}>
              Build compelling use-cases and monetize their models to earn money
              by serving your users with high reliability.
            </Typography>
            <Button variant="outlined">Become a Developer</Button>
          </div>
          <div className={styles.separator} />
          <div className={styles.card}>editor</div>
        </Paper>
      </Grid.Container>
    </div>
  );
};
