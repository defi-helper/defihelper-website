import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import clsx from 'clsx';

import { ReactComponent as Logo } from 'src/assets/icons/logo.svg';
import { ReactComponent as LogoMini } from 'src/assets/icons/logo-mini.svg';
import { Link } from 'src/common/link';
import { URLS } from 'src/router/urls';
import { Grid } from 'src/common/grid';
import { Button } from 'src/common/button';
import * as styles from './layout-header-mini.css';

export type LayoutHeaderMiniProps = unknown;

export const LayoutHeaderMini: React.VFC<LayoutHeaderMiniProps> = () => {
  return (
    <header className={styles.root}>
      <Grid.Container>
        <Grid.Row items="center">
          <Link as={ReactRouterLink} to={URLS.main} className={styles.padding}>
            <Logo className={styles.logo} />
            <LogoMini className={styles.logoMini} />
          </Link>
          <div className={clsx(styles.padding, styles.actions)}>
            <Button color="pink">Connect Wallet</Button>
          </div>
        </Grid.Row>
      </Grid.Container>
    </header>
  );
};
