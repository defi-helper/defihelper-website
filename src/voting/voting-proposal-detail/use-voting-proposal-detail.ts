import { useWeb3React } from '@web3-react/core';
import { useAsyncRetry } from 'react-use';

import {
  useNetworkConfig,
  useGovernorContract,
  useGovernanceContract,
  BN,
  useLibrary,
  dateUtils
} from 'src/common';
import { useVotingEvents, getProposal } from '../common';

export const useVotingProposalDetail = (proposalId?: number) => {
  const governorContract = useGovernorContract();
  const eventData = useVotingEvents();
  const networkConfig = useNetworkConfig();
  const governanceToken = useGovernanceContract();

  const { account = null } = useWeb3React();

  const library = useLibrary();

  const state = useAsyncRetry(async () => {
    if (!proposalId || !governorContract || !eventData || !governanceToken)
      return;

    const result = await getProposal(proposalId)(governorContract)(eventData)(
      networkConfig
    );

    const currentBlockNumber = await library.eth.getBlockNumber();

    const endVoteDate = dateUtils.addSeconds(
      new BN(result.endBlock)
        .minus(currentBlockNumber)
        .multipliedBy(networkConfig.averageBlockTime)
        .toNumber()
    );

    let priorVotes = '0';

    try {
      priorVotes = account
        ? await governanceToken.methods
            .getPriorVotes(account, result.startBlock)
            .call()
        : priorVotes;
    } catch (error) {
      console.error(error.message);
    }

    return {
      ...result,
      endVoteDate: endVoteDate.toISOString(),
      priorVotes: new BN(priorVotes)
    };
  }, [
    proposalId,
    governorContract,
    eventData,
    networkConfig,
    account,
    library
  ]);

  return state;
};
