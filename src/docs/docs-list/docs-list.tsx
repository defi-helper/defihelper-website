import React from 'react';
import { Redirect } from 'react-router-dom';
import { URLS } from 'src/router/urls';

import { DOCS } from '../common';

export const DocsList: React.FC = () => {
  const [defaultDocument] = Object.keys(DOCS);

  return <Redirect to={URLS.docs.detail(defaultDocument)} />;
};
