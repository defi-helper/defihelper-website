import { createElement } from 'react';

import Main from 'src/main';
import BetaAccess from 'src/beta-access';
import { URLS } from './urls';

export const routes = [
  {
    url: URLS.main,
    component: Main
  },
  {
    url: URLS.betaAccess,
    component: BetaAccess
  },
  {
    component: () => createElement('div', { children: 'not found' })
  }
];
