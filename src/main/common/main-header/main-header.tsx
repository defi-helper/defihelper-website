import clsx from 'clsx';
import React from 'react';
import { useMedia } from 'react-use';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import logo from 'src/assets/images/logo.png';
import { Button } from 'src/common/button';
import { config } from 'src/config';
import * as styles from './main-header.css';

export type MainHeaderProps = {
  className?: string;
  progress: React.ReactNode;
};

export const MainHeader: React.VFC<MainHeaderProps> = (props) => {
  const isDesktop = useMedia('(min-width: 960px)');

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
            {!isDesktop && (
              <Button
                variant="contained"
                color="secondary"
                as="a"
                href={config.LAUNCH_APP_URL}
                className={styles.launchButton}
                size="large"
              >
                Launch App
              </Button>
            )}
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
