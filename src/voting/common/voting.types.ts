import { BN } from 'src/common';

export type Proposal = {
  id: string;
  proposer: string;
  eta: string;
  startBlock: string;
  endBlock: string;
  forVotes: string;
  againstVotes: string;
  canceled: boolean;
  executed: boolean;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: boolean;
  8: boolean;
};

export type FormattedProposal = {
  id: string | undefined;
  title: string;
  description: string;
  proposer: string | undefined;
  status: string | undefined;
  forCount: BN;
  eta?: string;
  againstCount: BN;
  startBlock: number;
  endBlock: number;
  details: EventDetail[];
};

export type EventDetail = {
  callData: string;
  functionSig: string;
  target: string;
};

export type FormattedEventData = {
  proposalId: string;
  description: string;
  details: EventDetail[];
};
