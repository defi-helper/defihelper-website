import { formatUnits } from 'ethers/lib.esm/utils';

import { BN, Network } from 'src/common';
import type { GovernorAlpha } from 'src/generate/GovernorAlpha';
import { FormattedEventData } from './voting.types';

const TITLE_REGEX = /# |\n/g;

export const getProposal =
  (proposalId: number) =>
  (governorContract: GovernorAlpha) =>
  (eventData: Record<string, FormattedEventData>) =>
  async (networkConfig: Network) => {
    const proposal = await governorContract.methods
      .proposals(proposalId)
      .call();
    const formattedEvent = eventData[proposalId];
    const quorumVotes = await governorContract.methods.quorumVotes().call();

    const [title] = formattedEvent?.description?.split(TITLE_REGEX) ?? [];

    return {
      id: proposal?.id,
      eta: proposal?.eta,
      title: title?.replace('#', '') ?? 'Untitled',
      description:
        formattedEvent?.description?.replace(title, '') ?? 'No description.',
      proposer: proposal?.proposer,
      status: await governorContract.methods.state(proposalId).call(),
      forCount: new BN(
        formatUnits(
          String(proposal?.forVotes ?? 0),
          networkConfig.assets.Governance.decimals
        )
      ),
      againstCount: new BN(
        formatUnits(
          String(proposal?.againstVotes ?? 0),
          networkConfig.assets.Governance.decimals
        )
      ),
      startBlock: parseInt(proposal?.startBlock?.toString() ?? '', 10),
      endBlock: parseInt(proposal?.endBlock?.toString() ?? '', 10),
      details: formattedEvent?.details,
      forVotes: proposal.forVotes,
      quorumVotes
    };
  };
