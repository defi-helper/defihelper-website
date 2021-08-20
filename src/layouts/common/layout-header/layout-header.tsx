import React from 'react';
import clsx from 'clsx';
import { Link as ReactRouterLink, NavLink } from 'react-router-dom';

import { Button } from 'src/common/button';
import { ReactComponent as Logo } from 'src/assets/icons/logo.svg';
import { Grid } from 'src/common/grid';
import { config } from 'src/config';
import { URLS } from 'src/router/urls';
import * as styles from './layout-header.css';

export type LayoutHeaderProps = {
  className?: string;
};

export const LayoutHeader: React.VFC<LayoutHeaderProps> = (props) => {
  return (
    <header className={clsx(styles.root, props.className)}>
      <Grid.Container>
        <Grid.Row className={styles.root} items="center">
          <ReactRouterLink to={URLS.main} className={styles.logo}>
            <Logo />
          </ReactRouterLink>
          <div className={styles.actions}>
            <NavLink className={styles.navLink} to={URLS.tokenomics}>
              Tokenomics
            </NavLink>
            <NavLink className={styles.navLink} to={URLS.whitepaper}>
              WHitepaper
            </NavLink>
            <Button
              variant="contained"
              color="secondary"
              as="a"
              href={config.LAUNCH_APP_URL}
            >
              Launch App
            </Button>
          </div>
        </Grid.Row>
      </Grid.Container>
    </header>
  );
};
