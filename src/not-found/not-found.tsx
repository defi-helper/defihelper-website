import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Head, Link, Typography } from 'src/common';
import { MainLayout } from 'src/layouts';
import { URLS } from 'src/router/urls';
import { useNotFoundStyles } from './not-found.styles';

export const NotFound: React.FC = () => {
  const classes = useNotFoundStyles();

  return (
    <>
      <Head title="404" />
      <MainLayout>
        <div className={classes.root}>
          <Typography variant="h1" align="center" className={classes.title}>
            404
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={classes.subtitle}
          >
            Oops! The page you were looking for doesn’t exist.
          </Typography>
          <Typography variant="body1" align="center">
            <Link component={ReactRouterLink} to={URLS.main} color="blue">
              Go home →
            </Link>
          </Typography>
        </div>
      </MainLayout>
    </>
  );
};
