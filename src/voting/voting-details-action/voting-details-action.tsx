import React from 'react';
import { useAsyncFn, useAsyncRetry, useToggle } from 'react-use';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import { WalletModal } from 'src/wallets';

import {
  Skeleton,
  useGovernorContract,
  Button,
  estimateGas,
  BN,
  dateUtils
} from 'src/common';
import { ProposalState, VotingButton, VotingDetailInfo } from '../common';
import { useVotingDetailsActionStyles } from './voting-details-action.styles';

export type VotingDetailsActionProps = {
  loading: boolean;
  proposalId: string;
  forCount?: BN;
  againstCount?: BN;
  onUpdate?: () => void;
  status?: string;
  currentVotes?: BN;
  eta?: string;
};

export const VotingDetailsAction: React.FC<VotingDetailsActionProps> = (
  props
) => {
  const classes = useVotingDetailsActionStyles();
  const governorContract = useGovernorContract();
  const { account = null } = useWeb3React<Web3>();

  const [open, toggleWalletModal] = useToggle(false);

  const { onUpdate } = props;

  const [votingState, handleVote] = useAsyncFn(
    async (value: boolean) => {
      if (!account || !governorContract || props.currentVotes?.eq(0)) return;

      try {
        const castVote = governorContract.methods.castVote(
          props.proposalId,
          value
        );

        await castVote.send({
          from: account,
          gas: await estimateGas(castVote, { from: account })
        });
      } finally {
        onUpdate?.();
      }
    },
    [governorContract, props.proposalId, account, onUpdate, props.currentVotes]
  );

  const [executingState, handleExecuteProposal] = useAsyncFn(async () => {
    if (!account || !governorContract) return;

    try {
      const execute = governorContract.methods.execute(props.proposalId);

      await execute.send({
        from: account,
        gas: await estimateGas(execute, { from: account })
      });
    } finally {
      onUpdate?.();
    }
  }, [governorContract, props.proposalId, account, onUpdate]);

  const [queueState, handleQueueProposal] = useAsyncFn(async () => {
    if (!account || !governorContract) return;

    try {
      const queue = governorContract.methods.queue(props.proposalId);

      await queue.send({
        from: account,
        gas: await estimateGas(queue, { from: account })
      });
    } finally {
      onUpdate?.();
    }
  }, [governorContract, props.proposalId, account, onUpdate]);

  const receiptState = useAsyncRetry(async () => {
    if (!account || !governorContract) return;

    const result = await governorContract.methods
      .getReceipt(props.proposalId, account)
      .call();

    const [hasVoted, support, votes] = result;

    return {
      hasVoted,
      support,
      votes
    };
  }, [
    governorContract,
    account,
    props.proposalId,
    props.status,
    props.againstCount,
    props.forCount
  ]);

  return (
    <>
      {props.loading && <Skeleton height={116} />}
      <div className={classes.root}>
        {!props.loading && (
          <>
            {!account && Number(props.status) === ProposalState.Active && (
              <div className={classes.row}>
                <VotingButton onClick={toggleWalletModal} variant="voteFor">
                  Vote for
                </VotingButton>
                <VotingButton onClick={toggleWalletModal} variant="voteAgainst">
                  Vote against
                </VotingButton>
              </div>
            )}
            {!receiptState.value?.hasVoted &&
              props.currentVotes?.isGreaterThan(0) &&
              Number(props.status) === ProposalState.Active && (
                <div className={classes.row}>
                  <VotingButton
                    onClick={() => handleVote(true)}
                    variant="voteFor"
                    loading={votingState.loading}
                  >
                    Vote for
                  </VotingButton>
                  <VotingButton
                    onClick={() => handleVote(false)}
                    variant="voteAgainst"
                    loading={votingState.loading}
                  >
                    Vote against
                  </VotingButton>
                </div>
              )}
            {(receiptState.value?.hasVoted ||
              Number(props.status) === ProposalState.Defeated ||
              Number(props.status) === ProposalState.Executed ||
              Number(props.status) === ProposalState.Expired ||
              Number(props.status) === ProposalState.Succeeded) && (
              <div className={classes.row}>
                <VotingDetailInfo
                  active={
                    receiptState.value?.hasVoted
                      ? receiptState.value.support === true
                      : undefined
                  }
                  variant="voteFor"
                  total={props.forCount?.plus(props.againstCount ?? 0)}
                  count={props.forCount}
                >
                  voted for
                </VotingDetailInfo>
                <VotingDetailInfo
                  active={
                    receiptState.value?.hasVoted
                      ? receiptState.value.support === false
                      : undefined
                  }
                  variant="voteAgainst"
                  total={props.forCount?.plus(props.againstCount ?? 0)}
                  count={props.againstCount}
                >
                  voted against
                </VotingDetailInfo>
              </div>
            )}
          </>
        )}
        {ProposalState.Succeeded === Number(props.status) && (
          <Button
            onClick={!account ? toggleWalletModal : handleQueueProposal}
            loading={queueState.loading}
            disabled={queueState.loading}
          >
            Queue
          </Button>
        )}
        {dateUtils.after(
          new Date(),
          dateUtils.formatUnix(Number(props.eta), 'YYYY-MM-DD HH:mm:ss')
        ) &&
          ProposalState.Queued === Number(props.status) && (
            <Button
              onClick={!account ? toggleWalletModal : handleExecuteProposal}
              loading={executingState.loading}
              disabled={executingState.loading}
            >
              Execute
            </Button>
          )}
      </div>
      <WalletModal open={open} onClose={toggleWalletModal} />
    </>
  );
};
