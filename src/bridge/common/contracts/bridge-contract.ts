import { useMemo } from 'react';
import type { AbiItem } from 'web3-utils';

import { useLibrary } from 'src/common';
import type { BridgeAbi } from '../types/bridge-abi';
import abi from '../abi/bridge-abi.json';

const ADDRESS = '0xc8c1b41713761281a520b7ad81544197bc85a4ce';

export const useBridgeContract = () => {
  const library = useLibrary(true);

  return useMemo(
    () =>
      new library.eth.Contract(
        abi as AbiItem[],
        ADDRESS
      ) as unknown as BridgeAbi,
    [library]
  );
};
