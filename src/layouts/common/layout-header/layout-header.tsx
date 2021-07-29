import React from 'react';
import clsx from 'clsx';
import { Link as ReactRouterLink, useRouteMatch } from 'react-router-dom';

import { Button } from 'src/common/button';
import { Typography } from 'src/common/typography';
import { Link } from 'src/common/link';
import { ReactComponent as Logo } from 'src/assets/icons/logo.svg';
import { Grid } from 'src/common/grid';
import { config } from 'src/config';
import { URLS } from 'src/router/urls';
import * as styles from './layout-header.css';

export type LayoutHeaderProps = {
  className?: string;
};

export const LayoutHeader: React.VFC<LayoutHeaderProps> = (props) => {
  const isTokenomics = useRouteMatch(URLS.tokenomics);

  return (
    <>
      <div className={styles.attention}>
        <Typography
          variant="body2"
          align="center"
          family="mono"
          transform="uppercase"
          className={styles.attentionText}
        >
          DFH launch in 48:16:32,{' '}
          <Link as={ReactRouterLink} to={URLS.tokenomics} underline="always">
            explore tokenomics
          </Link>
        </Typography>
      </div>
      <header className={clsx(styles.root, props.className)}>
        <Grid.Container>
          <Grid.Row className={styles.root} items="center">
            <ReactRouterLink to={URLS.main} className={styles.logo}>
              <Logo />
            </ReactRouterLink>
            <div className={styles.actions}>
              {!isTokenomics && (
                <Button
                  variant="outlined"
                  color="primary"
                  className={styles.btn}
                  as={ReactRouterLink}
                  to={URLS.tokenomics}
                >
                  Tokenomics
                </Button>
              )}
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
    </>
  );
};
