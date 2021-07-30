import BN from 'bignumber.js';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';

import { useGovernanceContract, useNetworkConfig } from 'src/common';
import { useAsyncRetry } from 'react-use';

export const useVoteInfo = () => {
  const governanceContract = useGovernanceContract();
  const networkConfig = useNetworkConfig();
  const { account = null } = useWeb3React<Web3>();

  const state = useAsyncRetry(async () => {
    if (!account || !governanceContract) return;

    const votes = await governanceContract.methods
      .getCurrentVotes(account)
      .call();

    const votesNormalized = new BN(votes).div(
      new BN(10).pow(networkConfig.assets.Governance.decimals)
    );

    return votesNormalized;
  }, [account, governanceContract, networkConfig]);

  return state;
};
