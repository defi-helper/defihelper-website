import networks from '@bondappetit/networks';
import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';

import { config } from 'src/config';

export const useNetworkConfig = () => {
  const { chainId } = useWeb3React<Web3>();

  return useMemo(() => {
    const networkConfig = Object.values(networks).find(
      (network) => network.networkId === chainId
    );

    if (config.CHAIN_BINANCE_IDS.includes(Number(chainId))) {
      return config.DEFAULT_NETWORK_CONFIG;
    }

    return networkConfig ?? config.DEFAULT_NETWORK_CONFIG;
  }, [chainId]);
};
