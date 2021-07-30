import { useEffect, useMemo, useRef } from 'react';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';

import { config } from 'src/config';
import { useNetworkConfig } from './use-network-config';

export const useLibrary = (bsc = false) => {
  const { library, chainId } = useWeb3React<Web3>();

  const networkConfig = useNetworkConfig();

  const providerRef = useRef(
    chainId && config.CHAIN_BINANCE_IDS.includes(chainId)
      ? new Web3(config.DEFAULT_NETWORK_CONFIG.networkUrl)
      : new Web3(networkConfig.networkUrl)
  );

  useEffect(() => {
    providerRef.current = new Web3(networkConfig.networkUrl);
  }, [networkConfig.networkUrl]);

  return useMemo(() => {
    if (chainId && config.CHAIN_BINANCE_IDS.includes(chainId) && !bsc) {
      return new Web3(config.DEFAULT_NETWORK_CONFIG.networkUrl);
    }

    return library ?? providerRef.current;
  }, [library, chainId, bsc]);
};
