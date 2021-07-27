import React from 'react';
import clsx from 'clsx';

import { Button, Typography } from 'src/common';
import { ReactComponent as Logo } from 'src/assets/icons/logo.svg';
import { Grid } from 'src/common/grid';
import * as styles from './layout-header.css';

export type LayoutHeaderProps = {
  className?: string;
};

export const LayoutHeader: React.FC<LayoutHeaderProps> = (props) => {
  return (
    <>
      <div className={styles.attention}>
        <Typography align="center" family="mono" transform="uppercase">
          DFH launch in 48:16:32, explore tokenomics
        </Typography>
      </div>
      <header className={clsx(styles.root, props.className)}>
        <Grid.Container>
          <Grid.Row className={styles.root} items="center">
            <div className={styles.logo}>
              <Logo />
            </div>
            <div className={styles.actions}>
              <Button variant="outlined" color="primary" className={styles.btn}>
                Tokenomics
              </Button>
              <Button variant="contained" color="secondary">
                Launch App
              </Button>
            </div>
          </Grid.Row>
        </Grid.Container>
      </header>
    </>
  );
};
