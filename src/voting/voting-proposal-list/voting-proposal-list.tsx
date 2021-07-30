import React, { useState } from 'react';
import BN from 'bignumber.js';
import { Link as ReactRouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { useWeb3React } from '@web3-react/core';

import { LandingLayout } from 'src/layouts';
import {
  Typography,
  Button,
  Link,
  ButtonBase,
  Skeleton,
  cutAccount,
  useNetworkConfig,
  Head,
  humanizeNumeral
} from 'src/common';
import { URLS } from 'src/router/urls';
import { useVotingProposalListStyles } from './voting-proposal-list.styles';
import { useVoteInfo, VotingProposals, useVotingProposalList } from '../common';
import { VotingChoose } from '../voting-choose';

const DELEGATE_TO_DEFAULT = '0x0000000000000000000000000000000000000000';

export const VotingProposalList: React.FC = () => {
  const classes = useVotingProposalListStyles();
  const { account = null } = useWeb3React();
  const {
    proposals,
    nextPage,
    pages: proposalPages,
    currentPage
  } = useVotingProposalList();
  const {
    currentVotes,
    canCreateProposal,
    canDelegate,
    handleUpdateVoteInfo,
    delegateTo,
    currentGovCoin,
    votesGreaterThanProposalThreshold
  } = useVoteInfo();
  const [votingChooseOpen, setVotingChooseOpen] = useState(false);
  const networkConfig = useNetworkConfig();

  const handleToggleVotingChoose = () => {
    setVotingChooseOpen(!votingChooseOpen);
    handleUpdateVoteInfo();
  };

  let delegateButtonText = '';
  if (new BN(currentVotes).isGreaterThan(0)) {
    if (delegateTo === DELEGATE_TO_DEFAULT) {
      delegateButtonText = 'Delegate to';
    } else {
      delegateButtonText = 'Redelegate';
    }
  } else {
    delegateButtonText = 'Unlock votes';
  }

  return (
    <>
      <Head title="Proposals" />
      <LandingLayout>
        <div className={classes.root}>
          <div className={classes.header}>
            <Typography variant="body1" align="center">
              <Link as={ReactRouterLink} to={URLS.voting.info} color="blue">
                ← Governance
              </Link>
            </Typography>
            <Typography variant="h3" align="center">
              {proposals.loading && (
                <Skeleton className={classes.votesSkeleton} />
              )}
              {!proposals.loading &&
                (new BN(currentVotes).isGreaterThan(0) ||
                  new BN(currentGovCoin).isGreaterThan(0)) && (
                  <>
                    {new BN(currentVotes).isEqualTo(0)
                      ? currentGovCoin
                      : currentVotes}{' '}
                    {new BN(currentVotes).isEqualTo(0) ? 'BAG' : 'Votes'}
                    {new BN(currentVotes).isGreaterThan(0) &&
                      new BN(currentGovCoin).isGreaterThan(currentVotes) && (
                        <> ({humanizeNumeral(currentGovCoin)} BAG)</>
                      )}
                  </>
                )}
              {!proposals.loading &&
                new BN(currentVotes).isEqualTo(0) &&
                new BN(currentGovCoin).isEqualTo(0) && (
                  <>
                    No Votes <br />
                  </>
                )}
            </Typography>
            {proposals.loading && (
              <Skeleton className={classes.delegatesSkeleton} />
            )}
            {!proposals.loading && (
              <>
                <Typography variant="h2" align="center">
                  {new BN(currentGovCoin).isGreaterThan(0) &&
                    delegateTo !== DELEGATE_TO_DEFAULT && (
                      <>
                        deligated to{' '}
                        <Link
                          target="_blank"
                          className={classes.delegateTo}
                          href={`${networkConfig.networkEtherscan}/address/${delegateTo}`}
                        >
                          {cutAccount(delegateTo)}
                        </Link>
                      </>
                    )}
                  {new BN(currentVotes).isEqualTo(0) &&
                    new BN(currentGovCoin).isGreaterThan(0) && (
                      <>Unlock it so you can vote</>
                    )}
                </Typography>
                {canDelegate && (
                  <Button onClick={handleToggleVotingChoose}>
                    {delegateButtonText}
                  </Button>
                )}
              </>
            )}
          </div>
          {!proposals.loading && canCreateProposal && (
            <Button
              as={ReactRouterLink}
              variant="outlined"
              className={clsx(
                classes.createProposal,
                classes.createProposalMargin
              )}
            >
              + Create new proposal
            </Button>
          )}
          {!proposals.loading && !votesGreaterThanProposalThreshold && account && (
            <Typography
              variant="h4"
              as="div"
              align="center"
              className={classes.createProposalMargin}
            >
              You need to have more than 1 000 000 BAG tokens to create proposal
            </Typography>
          )}
          <VotingProposals
            loading={proposals.loading}
            proposals={proposals.value}
            className={classes.list}
          />
          {proposalPages.length > 1 &&
            currentPage < proposalPages.length - 1 && (
              <ButtonBase onClick={nextPage}>show more</ButtonBase>
            )}
        </div>
        <VotingChoose
          votes={currentGovCoin}
          open={votingChooseOpen}
          onClose={handleToggleVotingChoose}
        />
      </LandingLayout>
    </>
  );
};
