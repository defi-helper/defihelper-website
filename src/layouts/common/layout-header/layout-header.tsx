import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  Link as ReactRouterLink,
  NavLink,
  useLocation
} from 'react-router-dom';
import { useClickAway } from 'react-use';

import { ReactComponent as Logo } from 'src/assets/icons/logo-mini.svg';
import { Grid } from 'src/common/grid';
import { URLS } from 'src/router/urls';
import { Link } from 'src/common/link';
import { ButtonBase } from 'src/common/button-base';
import { ReactComponent as BurgerIcon } from 'src/assets/icons/burger.svg';
import { ReactComponent as CloseBurgerIcon } from 'src/assets/icons/close-burger.svg';
import { Button } from 'src/common/button';
import { config } from 'src/config';
import { Paper } from 'src/common/paper';
import { analytics } from 'src/analytics';
import * as styles from './layout-header.css';

export type LayoutHeaderProps = {
  className?: string;
};

const LINKS: Omit<React.ComponentProps<typeof Link>, 'className'>[] = [
  {
    children: 'Portfolio manager',
    to: URLS.portfolioManager,
    as: NavLink
  },
  {
    children: 'Portfolio tracker',
    to: URLS.portfolioTracker,
    as: NavLink
  },
  {
    children: 'Security',
    to: URLS.security,
    as: NavLink
  },
  {
    children: 'Tokenomics',
    to: URLS.tokenomics,
    as: NavLink
  },
  {
    children: 'Litepaper',
    target: '_blank',
    href: URLS.litepaper
  },
  {
    children: 'No-code automation',
    to: URLS.noCode,
    as: NavLink
  }
];

export const LayoutHeader: React.VFC<LayoutHeaderProps> = (props) => {
  const [isOpen, setOpen] = useState(false);

  const ref = useRef(null);

  useClickAway(ref, setOpen.bind(null, false));

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={clsx(styles.root, props.className)}>
      <Grid.Container>
        <Grid.Row items="center">
          <ReactRouterLink to={URLS.main} className={styles.logo}>
            <Logo />
          </ReactRouterLink>
          <div className={styles.menuDesktop}>
            {LINKS.map((link, index) => (
              <Link className={styles.navLink} key={String(index)} {...link} />
            ))}
            <Button
              variant="contained"
              color="secondary"
              as="a"
              href={config.LAUNCH_APP_URL}
              size="medium"
              onClick={() => analytics.send('header_launch_app_click')}
            >
              Launch App
            </Button>
          </div>
          <div className={styles.menuMobile} ref={ref}>
            <Button
              variant="contained"
              color="secondary"
              as="a"
              href={config.LAUNCH_APP_URL}
              size="small"
              onClick={() => analytics.send('header_launch_app_click')}
            >
              Launch App
            </Button>
            <ButtonBase onClick={() => setOpen(!isOpen)}>
              {!isOpen ? (
                <BurgerIcon width="40" height="40" />
              ) : (
                <CloseBurgerIcon width="40" height="40" />
              )}
            </ButtonBase>
            <Paper
              className={styles.menuMobileInner}
              style={{ display: isOpen ? 'block' : 'none' }}
            >
              {LINKS.map((link, index) => (
                <div className={styles.menuMobileItem} key={String(index)}>
                  <Link className={styles.navLink} {...link} />
                </div>
              ))}
            </Paper>
          </div>
        </Grid.Row>
      </Grid.Container>
    </header>
  );
};
