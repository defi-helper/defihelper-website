import { useMemo } from 'react';
import type { AbiItem } from 'web3-utils';
import networks from '@bondappetit/networks';

import { useLibrary } from 'src/common';
import type { BbagAbi } from '../types/bbag-abi';
import abi from '../abi/bbag-abi.json';

const ADDRESS = networks.mainBSC.assets.bBAG.address;

export const useBBagContract = () => {
  const library = useLibrary(true);

  return useMemo(
    () =>
      new library.eth.Contract(abi as AbiItem[], ADDRESS) as unknown as BbagAbi,
    [library]
  );
};
