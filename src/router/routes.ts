import { createElement } from 'react';

import Main from 'src/main';
import { URLS } from './urls';

export const routes = [
  {
    url: URLS.main,
    component: Main
  },
  {
    component: () => createElement('div', { children: 'not found' })
  }
];
