import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import { useCallback } from 'react';

import { estimateGas } from 'src/common';
import type { Staking } from 'src/generate/Staking';

export const useStakingUnlock = (stakingContract?: Staking | null) => {
  const { account = null } = useWeb3React<Web3>();

  const handleUnstakeOrClaim = useCallback(
    async (unstake = true) => {
      if (!account || !stakingContract) return;

      const exit = unstake
        ? stakingContract.methods.exit()
        : stakingContract.methods.getReward();

      await exit.send({
        from: account,
        gas: await estimateGas(exit, { from: account })
      });
    },
    [stakingContract, account]
  );

  return handleUnstakeOrClaim;
};
