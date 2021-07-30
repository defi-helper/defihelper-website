import * as SentryReact from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import { config } from 'src/config';

export const Sentry = {
  options: (): SentryReact.BrowserOptions => ({
    dsn: config.SENTRY,
    environment: config.ENV,
    release: process.env.COMMITHASH,
    debug: config.IS_DEV,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,

    beforeSend(event) {
      if (config.IS_LOCAL) {
        return null;
      }

      return event;
    }
  }),

  init: () => {
    SentryReact.init(Sentry.options());
  },

  log: (err: Error, extra?: Record<string, unknown>) => {
    SentryReact.withScope((scope) => {
      if (extra) {
        scope.setExtras(extra);
      }

      SentryReact.captureException(err);
    });
  },

  configureScope: (user: {
    account: string;
    wallet: string;
    chainId: number;
  }) => {
    SentryReact.configureScope((scope) => {
      scope.setUser({
        account: user.account,
        wallet: user.wallet,
        chainId: user.chainId,
        buildDate: config.BUILD_DATE
      });
    });
  }
};
