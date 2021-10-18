import React, { useState } from 'react';
import clsx from 'clsx';
import { Link as ReactRouterLink, NavLink } from 'react-router-dom';
import { useMedia } from 'react-use';

import { ButtonBase } from 'src/common/button-base';
import { Button } from 'src/common/button';
import { ReactComponent as Logo } from 'src/assets/icons/logo.svg';
import { ReactComponent as BurgerIcon } from 'src/assets/icons/burger.svg';
import { ReactComponent as CloseIcon } from 'src/assets/icons/close-burger.svg';
import { useBodyScrollLock } from 'src/common/hooks';
import { Grid } from 'src/common/grid';
import { config } from 'src/config';
import { URLS } from 'src/router/urls';
import { Link } from 'src/common/link';
import * as styles from './layout-header.css';

export type LayoutHeaderProps = {
  className?: string;
};

export const LayoutHeader: React.VFC<LayoutHeaderProps> = (props) => {
  const isDesktop = useMedia('(min-width: 700px)');
  const [open, setOpen] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  const handleToggle = () => {
    setOpen(!open);
  };

  useBodyScrollLock(ref);

  return (
    <header className={clsx(styles.root, props.className)}>
      <Grid.Container>
        <Grid.Row className={styles.root} items="center">
          <ReactRouterLink to={URLS.main} className={styles.logo}>
            <Logo />
          </ReactRouterLink>
          {isDesktop && (
            <div className={styles.menu}>
              <Link
                as={NavLink}
                className={styles.navLink}
                to={URLS.tokenomics}
              >
                Tokenomics
              </Link>
              <Link
                className={styles.navLink}
                href={URLS.litepaper}
                target="_blank"
                rel="noreferrer"
              >
                litepaper
              </Link>
              <Button
                variant="contained"
                color="secondary"
                as="a"
                href={config.LAUNCH_APP_URL}
              >
                Launch App
              </Button>
            </div>
          )}
          {!isDesktop && (
            <>
              <ButtonBase className={styles.burger} onClick={handleToggle}>
                {!open ? <BurgerIcon /> : <CloseIcon />}
              </ButtonBase>
              {open && (
                <div className={styles.mobileMenu} ref={setRef}>
                  <Link
                    as={NavLink}
                    className={styles.navLink}
                    to={URLS.tokenomics}
                  >
                    Tokenomics
                  </Link>
                  <Link
                    className={styles.navLink}
                    href={URLS.litepaper}
                    target="_blank"
                    rel="noreferrer"
                  >
                    litepaper
                  </Link>
                  <Button
                    variant="contained"
                    color="secondary"
                    as="a"
                    href={config.LAUNCH_APP_URL}
                    className={styles.launchButtonMobile}
                  >
                    Launch App
                  </Button>
                </div>
              )}
            </>
          )}
        </Grid.Row>
      </Grid.Container>
    </header>
  );
};
