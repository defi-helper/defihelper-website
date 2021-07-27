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

export const useCanStaking = (stakingContract?: Staking | null) => {
  const { library } = useWeb3React<Web3>();
  const networkConfig = useNetworkConfig();

  const [state, getState] = useAsyncFn(async () => {
    if (!stakingContract) return;

    const result = await stakingContract.methods.stakingEndBlock().call();

    const currentBlockNumber = new BN(
      (await library?.eth.getBlockNumber()) ?? 0
    );

    const stakingEndBlock = new BN(result ?? 0);

    const seconds = stakingEndBlock
      .minus(currentBlockNumber)
      .multipliedBy(networkConfig.averageBlockTime)
      .toNumber();

    const date = dateUtils.format(dateUtils.addSeconds(seconds), DATE_FORMAT);

    const cant =
      stakingEndBlock.isGreaterThan(0) &&
      currentBlockNumber.isGreaterThanOrEqualTo(stakingEndBlock);

    return {
      cant,
      date,
      stakingEndBlock
    };
  }, [library, networkConfig, stakingContract]);

  useEffect(() => {
    if (stakingContract) {
      getState();
    }
  }, [stakingContract, getState]);

  useIntervalIfHasAccount(getState);

  return state;
};
