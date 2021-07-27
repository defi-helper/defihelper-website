import { useCallback } from 'react';
import networks from '@bondappetit/networks';

import type { Staking } from 'src/generate/Staking';
import { useDynamicContract, useNetworkConfig } from 'src/common';
import { config } from 'src/config';

export const useStakingContracts = (currentChainId?: number) => {
  const networkConfig = useNetworkConfig();

  const getContract = useDynamicContract<Staking>(undefined, currentChainId);

  const handleGetStakingContract = useCallback(
    (contractName: string, chainId?: number) => {
      const bscContracts =
        config.CHAIN_BINANCE_IDS[0] === chainId
          ? networks.mainBSC.contracts
          : networks.testnetBSC.contracts;

      const contracts = config.CHAIN_BINANCE_IDS.includes(Number(chainId))
        ? bscContracts
        : networkConfig.contracts;

      const contractConfig = contracts[contractName];

      if (!contractConfig) return null;

      return getContract(contractConfig.address, contractConfig.abi);
    },
    [getContract, networkConfig]
  );

  return handleGetStakingContract;
};
