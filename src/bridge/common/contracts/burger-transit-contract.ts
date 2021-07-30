import { useMemo } from 'react';
import type { AbiItem } from 'web3-utils';
import { useWeb3React } from '@web3-react/core';

import { config } from 'src/config';
import { useLibrary } from 'src/common';
import type { BurgerTransit } from '../types/burger-transit';
import abi from '../abi/burger-transit.json';

const ADDRESS = '0x3f621973a1363c2ecc8b256e9c0a1c3e62d2cefe';

export const useTransitContract = () => {
  const { chainId } = useWeb3React();

  const library = useLibrary(
    config.CHAIN_BINANCE_IDS.includes(Number(chainId))
  );

  return useMemo(
    () =>
      new library.eth.Contract(
        abi as AbiItem[],
        ADDRESS
      ) as unknown as BurgerTransit,
    [library]
  );
};
