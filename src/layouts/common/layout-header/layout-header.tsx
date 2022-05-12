import React from 'react';
import clsx from 'clsx';
import { Link as ReactRouterLink, NavLink } from 'react-router-dom';
import { useMedia } from 'react-use';

import { Button } from 'src/common/button';
import { ReactComponent as Logo } from 'src/assets/icons/logo-mini.svg';
import { Grid } from 'src/common/grid';
import { config } from 'src/config';
import { URLS } from 'src/router/urls';
import { Link } from 'src/common/link';
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
    children: 'No-code automation',
    to: URLS.noCode,
    as: NavLink
  },
  {
    children: 'Security',
    to: URLS.security,
    as: NavLink
  },
  {
    children: 'Portfolio tracker',
    to: URLS.portfolioTracker,
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
  }
];

export const LayoutHeader: React.VFC<LayoutHeaderProps> = (props) => {
  const isDesktop = useMedia('(min-width: 960px)');

  return (
    <header className={clsx(styles.root, props.className)}>
      <Grid.Container>
        <Grid.Row items="center">
          <ReactRouterLink to={URLS.main} className={styles.logo}>
            <Logo />
          </ReactRouterLink>
          <div className={styles.menu}>
            {LINKS.map((link, index) => (
              <Link className={styles.navLink} key={String(index)} {...link} />
            ))}
            {isDesktop && (
              <Button
                variant="contained"
                color="secondary"
                as="a"
                href={config.LAUNCH_APP_URL}
              >
                Launch App
              </Button>
            )}
          </div>
        </Grid.Row>
      </Grid.Container>
    </header>
  );
};
