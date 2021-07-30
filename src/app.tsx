import React from 'react';

import { useEagerConnect, useInactiveListener } from './web3/hooks';
import Router from './router';
import './app.css';

export const App: React.FC = () => {
  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);

  return <Router />;
};
