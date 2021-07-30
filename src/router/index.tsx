import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { routes } from './routes';
import { ScrollToTop } from './scroll-to-top';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        {routes.map((route, index) => {
          const id = `${route.url}-${index}`;

          return (
            <Route exact path={route.url} key={id}>
              <route.component />
            </Route>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
