import { useCallback, useEffect, useMemo, useState } from 'react';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';

import {
  useGovernorContract,
  useGovernanceContract,
  useNetworkConfig,
  useUpdate,
  useBalance,
  BN
} from 'src/common';
import { ProposalState } from './constants';

export const useVoteInfo = () => {
  const [currentVotes, setCurrentVotes] = useState('0');
  const [currentGovCoin, setCurrentGovCoin] = useState('0');
  const [canDelegate, setCanDelegate] = useState(false);
  const [canCreateProposal, setCanCreateProposal] = useState(false);
  const [delegateTo, setDelegateTo] = useState<string | undefined>();
  const governorContract = useGovernorContract();
  const governanceContract = useGovernanceContract();
  const networkConfig = useNetworkConfig();
  const { account = null } = useWeb3React<Web3>();
  const getBalance = useBalance();
  const [update, handleUpdateVoteInfo] = useUpdate();
  const [
    votesGreaterThanProposalThreshold,
    setVotesGreaterThanProposalThreshold
  ] = useState(false);

  const handleGetVotes = useCallback(async () => {
    if (!account || !governanceContract) return;

    const votes = await governanceContract.methods
      .getCurrentVotes(account)
      .call();

    const govCoinBalance = await getBalance({
      tokenAddress: governanceContract.options.address
    });

    setCanDelegate(govCoinBalance.isGreaterThan(0));

    const govCoinBalanceNormalized = govCoinBalance
      .div(new BN(10).pow(networkConfig.assets.Governance.decimals))
      .toFixed(2);

    const votesNormalized = new BN(votes)
      .div(new BN(10).pow(networkConfig.assets.Governance.decimals))
      .toString(10);

    setCurrentGovCoin(govCoinBalanceNormalized);
    setCurrentVotes(votesNormalized);
  }, [account, governanceContract, networkConfig, getBalance]);

  const handleCanCreateProposal = useCallback(async () => {
    if (!account || !governorContract) return;

    const propsalThreshold = await governorContract.methods
      .proposalThreshold()
      .call();
    const proposalId = await governorContract.methods
      .latestProposalIds(account)
      .call();

    let latestProposalNotIncludePendingOrActive = true;

    if (proposalId !== '0') {
      const proposalState = await governorContract.methods
        .state(proposalId)
        .call();

      latestProposalNotIncludePendingOrActive = ![
        ProposalState.Pending,
        ProposalState.Active
      ].includes(Number(proposalState));
    }

    const proposalThresholdBN = new BN(propsalThreshold).div(
      new BN(10).pow(networkConfig.assets.Governance.decimals)
    );

    const currentVotesIsGreaterThanProposalThreshold = new BN(
      currentVotes
    ).isGreaterThan(proposalThresholdBN);

    setCanCreateProposal(
      currentVotesIsGreaterThanProposalThreshold &&
        latestProposalNotIncludePendingOrActive
    );

    setVotesGreaterThanProposalThreshold(
      currentVotesIsGreaterThanProposalThreshold
    );
  }, [governorContract, account, currentVotes, networkConfig]);

  const handleGetDelegates = useCallback(async () => {
    if (!account || !governanceContract) return;

    const delegates = await governanceContract.methods
      .delegates(account)
      .call();

    setDelegateTo(delegates);
  }, [account, governanceContract]);

  useEffect(() => {
    handleGetVotes();
  }, [handleGetVotes, update]);

  useEffect(() => {
    handleCanCreateProposal();
  }, [handleCanCreateProposal, update]);

  useEffect(() => {
    handleGetDelegates();
  }, [handleGetDelegates, update]);

  return useMemo(
    () => ({
      currentGovCoin,
      canDelegate,
      canCreateProposal,
      delegateTo,
      currentVotes: new BN(currentVotes).toFixed(2),
      handleUpdateVoteInfo,
      votesGreaterThanProposalThreshold
    }),
    [
      currentGovCoin,
      canCreateProposal,
      currentVotes,
      handleUpdateVoteInfo,
      delegateTo,
      canDelegate,
      votesGreaterThanProposalThreshold
    ]
  );
};
