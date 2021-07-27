import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import { useAsyncFn } from 'react-use';
import { useEffect } from 'react';

import type { Staking } from 'src/generate/Staking';
import {
  dateUtils,
  BN,
  useIntervalIfHasAccount,
  useNetworkConfig
} from 'src/common';

const DATE_FORMAT = 'HH:mm:ss on MMMM DD';

export const useCanUnStaking = (stakingContract?: Staking | null) => {
  const { library } = useWeb3React<Web3>();
  const networkConfig = useNetworkConfig();

  const [state, getState] = useAsyncFn(async () => {
    if (!stakingContract) return;

    const result = await stakingContract.methods.unstakingStartBlock().call();

    const currentBlockNumber = new BN(
      (await library?.eth.getBlockNumber()) ?? 0
    );

    const unstakingStartBlock = new BN(result ?? 0);

    const seconds = unstakingStartBlock
      .minus(currentBlockNumber)
      .multipliedBy(networkConfig.averageBlockTime)
      .toNumber();

    const date = dateUtils.format(dateUtils.addSeconds(seconds), DATE_FORMAT);

    const can =
      currentBlockNumber.isGreaterThan(unstakingStartBlock) &&
      unstakingStartBlock.isGreaterThan(0);

    return {
      can,
      date,
      currentBlockNumber,
      unstakingStartBlock
    };
  }, [library, stakingContract, networkConfig]);

  useEffect(() => {
    if (stakingContract) {
      getState();
    }
  }, [getState, stakingContract]);

  useIntervalIfHasAccount(getState);

  return state;
};
