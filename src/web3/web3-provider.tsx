import React from 'react';
import Web3 from 'web3';
import { provider as web3Core } from 'web3-core';
import { Web3ReactProvider } from '@web3-react/core';

const getLibrary = (provider: web3Core): Web3 => {
  const library = new Web3(provider);

  return library;
};

export const Web3Provider: React.FC = (props) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    {props.children}
  </Web3ReactProvider>
);
