import { useCallback } from 'react';

import { abi as IUniswapV2PairAbi } from '@bondappetit/networks/abi/IUniswapV2Pair.json';
import type { AbiItem } from 'web3-utils';
import type { IUniswapV2Pair } from 'src/generate/IUniswapV2Pair';
import { useDynamicContract } from 'src/common';

export const useStakingLpPair = () => {
  const getContract = useDynamicContract<IUniswapV2Pair>();

  const handleGetStakingContract = useCallback(
    (address: string) => {
      return getContract(address, IUniswapV2PairAbi as AbiItem[]);
    },
    [getContract]
  );

  return handleGetStakingContract;
};
