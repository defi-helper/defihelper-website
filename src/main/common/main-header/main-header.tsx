import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import logo from 'src/assets/images/logo.png';
import * as styles from './main-header.css';

export type MainHeaderProps = {
  className?: string;
  progress: React.ReactNode;
};

export const MainHeader: React.VFC<MainHeaderProps> = (props) => {
  return (
    <div className={clsx(styles.root, props.className)}>
      <Grid.Container className={styles.hero}>
        <Grid.Row>
          <div className={styles.text}>
            <img src={logo} alt="" className={styles.logo} />
            <Typography variant="h2" className={styles.subtitle} align="center">
              Automate your DeFi strategies across chains, earn more with
              autostaking feature
            </Typography>
          </div>
        </Grid.Row>
      </Grid.Container>
      <Grid.Container className={styles.bottom}>
        <Grid.Row justify="spaceBetween">
          {React.isValidElement(props.progress) &&
            React.cloneElement(props.progress, {
              ...props.progress.props,
              className: styles.col
            })}
        </Grid.Row>
      </Grid.Container>
    </div>
  );
};
