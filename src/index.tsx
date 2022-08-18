import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import smoothscroll from 'smoothscroll-polyfill';
import 'normalize.css';
import { Provider } from 'urql';

import { DialogProvider } from './common/dialog';
import { ThemeProvider } from './common/theme';
import { App } from './app';
import { config } from './config';
import { ErrorBoundary, Sentry } from './error-boundary';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './assets/fonts/Basier-Circle-regular-webfont/stylesheet.css';
import './assets/fonts/Basier-Square-Mono-Regular-Webfont/stylesheet.css';
import './assets/fonts/Basier-Square-regular-webfont/stylesheet.css';
import { client } from './api-client';

smoothscroll.polyfill();

Sentry.init();

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <Provider value={client}>
            <DialogProvider>
              <App />
            </DialogProvider>
          </Provider>
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
if (!config.IS_DEV) {
  serviceWorkerRegistration.unregister();
}
