import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Main from 'src/main';
import NotFound from 'src/not-found';
import Tokenomics from 'src/tokenomics';
import Contracts from 'src/contracts';
import Referral from 'src/referral';
import { Protocols } from 'src/protocols';
import { Trade } from 'src/trade';
import { Invest } from 'src/invest';
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
        <Route path={URLS.trade}>
          <Trade />
        </Route>
        <Route path={URLS.invest}>
          <Invest />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
