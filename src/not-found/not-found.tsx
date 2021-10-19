import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Link } from 'src/common/link';
import { Typography } from 'src/common/typography';
import { Head } from 'src/common/head';
import { LandingLayout } from 'src/layouts';
import { URLS } from 'src/router/urls';
import * as styles from './not-found.css';

export const NotFound: React.FC = () => {
  return (
    <>
      <Head title="404" status={404} />
      <LandingLayout>
        <div className={styles.root}>
          <Typography variant="h1" align="center" className={styles.title}>
            404
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={styles.subtitle}
          >
            Oops! The page you were looking for doesn&apos;t exist.
          </Typography>
          <Typography variant="body1" align="center">
            <Link as={ReactRouterLink} to={URLS.main}>
              Go home →
            </Link>
          </Typography>
        </div>
      </LandingLayout>
    </>
  );
};
