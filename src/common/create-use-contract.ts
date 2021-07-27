import { useCallback, useMemo } from 'react';
import type { AbiItem } from 'web3-utils';
import type { ContractOptions } from 'web3-eth-contract';
import networks from '@bondappetit/networks';

import { config } from 'src/config';
import { useNetworkConfig } from './use-network-config';
import { EthereumNetworkError } from './ethereum-network-error';
import { useLibrary } from './use-library';

type ContractParameters = {
  abi: AbiItem[] | AbiItem;
  address?: string;
  options?: ContractOptions;
};

type Callback = (network: Network) => ContractParameters;

export type Network = typeof networks[keyof typeof networks];

export const createUseContract =
  <T>(cb: Callback) =>
  () => {
    const library = useLibrary();
    const networkConfig = useNetworkConfig();

    return useMemo(() => {
      try {
        const contractParams = cb(networkConfig);

        return new library.eth.Contract(
          contractParams?.abi,
          contractParams?.address,
          contractParams?.options
        ) as unknown as T;
      } catch {
        return null;
      }
    }, [library, networkConfig]);
  };

export const useDynamicContract = <T>(
  contractParameters?: ContractParameters,
  currentChainId?: number
) => {
  const library = useLibrary(
    config.CHAIN_BINANCE_IDS.includes(Number(currentChainId))
  );

  return useCallback(
    (address?: string, abi?: AbiItem[] | AbiItem) => {
      const currentAbi = contractParameters?.abi ?? abi;

      let contract: null | T = null;

      try {
        if (!currentAbi) {
          throw new Error('Abi is required');
        }

        contract = new library.eth.Contract(
          currentAbi,
          address
        ) as unknown as T;
      } catch {
        throw new EthereumNetworkError();
      }

      return contract;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [library, currentChainId]
  );
};
