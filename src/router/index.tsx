import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Main from 'src/main';
import NotFound from 'src/not-found';
import Tokenomics from 'src/tokenomics';
import Contracts from 'src/contracts';
import Referral from 'src/referral';
import { Protocols } from 'src/protocols';
import { PortfolioTracker } from 'src/portfolio-tracker';
import { PortfolioManager } from 'src/portfolio-manager';
import { NoCode } from 'src/no-code';
import { Security } from 'src/security';
import { ScrollToTop } from './scroll-to-top';
import { URLS } from './urls';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path={URLS.main}>
          <Main />
        </Route>
        <Route path={URLS.tokenomics}>
          <Tokenomics />
        </Route>
        <Route path={URLS.contracts}>
          <Contracts />
        </Route>
        <Route path={URLS.referral}>
          <Referral />
        </Route>
        <Route path={URLS.protocols}>
          <Protocols />
        </Route>
        <Route path={URLS.portfolioTracker}>
          <PortfolioTracker />
        </Route>
        <Route path={URLS.portfolioManager}>
          <PortfolioManager />
        </Route>
        <Route path={URLS.security}>
          <Security />
        </Route>
        <Route path={URLS.noCode}>
          <NoCode />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
