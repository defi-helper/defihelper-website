import { useCallback } from 'react';
import { abi as ERC20Abi } from '@bondappetit/networks/abi/ERC20.json';
import type { AbiItem } from 'web3-utils';

import type { ERC20 } from 'src/generate/ERC20';
import { useDynamicContract } from 'src/common';

export const useTokenContracts = () => {
  const getTokenContract = useDynamicContract<ERC20>({
    abi: ERC20Abi as AbiItem[]
  });

  const handleGetTokenContract = useCallback(
    (address: string) => {
      return getTokenContract(address);
    },
    [getTokenContract]
  );

  return handleGetTokenContract;
};
