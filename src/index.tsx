import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import smoothscroll from 'smoothscroll-polyfill';
import 'normalize.css';

import { ModalProvider, ThemeProvider } from './common';
import { App } from './app';
import { config } from './config';
import { Web3Provider } from './web3/web3-provider';
import { ErrorBoundary, Sentry } from './error-boundary';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './assets/fonts/Basier-Circle-regular-webfont/stylesheet.css';
import './assets/fonts/Basier-Square-Mono-Regular-Webfont/stylesheet.css';
import './assets/fonts/Basier-Square-regular-webfont/stylesheet.css';

smoothscroll.polyfill();

Sentry.init();

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <Web3Provider>
          <ErrorBoundary>
            <ModalProvider>
              <App />
            </ModalProvider>
          </ErrorBoundary>
        </Web3Provider>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
if (!config.IS_DEV) {
  serviceWorkerRegistration.register();
}
