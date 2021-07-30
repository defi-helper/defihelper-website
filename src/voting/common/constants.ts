import { StatusProps } from 'src/common';

export enum ProposalState {
  Pending,
  Active,
  Canceled,
  Defeated,
  Succeeded,
  Queued,
  Expired,
  Executed
}

export const ProposalStateColors: Record<string, StatusProps['color']> = {
  [ProposalState.Pending]: 'grey',
  [ProposalState.Active]: 'blue',
  [ProposalState.Defeated]: 'red',
  [ProposalState.Canceled]: 'orange',
  [ProposalState.Succeeded]: 'green',
  [ProposalState.Queued]: 'purple',
  [ProposalState.Executed]: 'green',
  [ProposalState.Expired]: 'green'
};

export const FACTOID = [
  {
    percent: '20%',
    text: `BondAppétit team & future team members, subject to 4-year vesting;`
  },
  {
    percent: '14%',
    text: `to BondAppétit founders, subject to 18 - months moratorium on sale;`
  },
  {
    percent: '1%',
    text: `to the pre-launch investor.`
  }
];

export const DECISION_MAKING = [
  {
    title: 'Protocol’s Management',
    text: [
      'Add a new asset type (collateral) to the basket;',
      'Add a new asset type to the Price Oracle;',
      'Whitelist a new Depository smart contract;',
      'Start emergency shutdown procedure;',
      'Add new markets for automatic exchange of USDap.'
    ]
  },
  {
    title: 'Protocol’s assets liquidity',
    text: [
      'Change in the reward rates for participation in liquidity pools;',
      'Choose the profit distribution of the protocol;',
      'Change of the list of assets available for exchange for USDap.'
    ]
  },
  {
    title: 'Development of the protocol',
    text: [
      'Proposal and voting on new features of the protocol;',
      'Change the rate of technical costs for the maintenance of the protocol;',
      'Initiate additional capitalization of the protocol;',
      'Apply changes to current smart contracts.'
    ]
  }
];

export const FAQ = [
  {
    title: 'What is the BondAppétit governance token?',
    body: `BAG is the main tool for decision-making and the main reward for participants of the protocol and the community.
Technically, it is an ERC-20 token and is based on the Compound Governance system,
as it allows ensuring transparent and secure management of the protocol by the community. Check [this article](https://medium.com/bondappetit/bondappetit-governance-token-explained-87eeacead488) for more details.
    `
  },

  {
    title: 'Who can initiate governance proposals?',
    body: 'Any member of the community with more than 1,000,000 BAG can create a proposal. This threshold is needed to combat spam and other forms of abuse.'
  },

  {
    title: 'How to vote on governance proposals?',
    body: `1.  Connect your wallet to the Ethereum network.
  2.   Delegate your votes. Do it BEFORE the creation of the proposal. Otherwise they will not
  be counted.
  3.   Now, you can cast your votes.`
  },

  {
    title: 'How can I make profits on BondAppetit governance tokens?',
    body: `BAG token holders can earn passive income from bonds, which back the USDap. The
rewards of BAG holders are directly related to the volume of USDap stablecoins issued. The
emission of the stablecoins will constantly increase. By purchasing the tokens once, token
holders will be receiving incremental income from the entire amount of bonds in securing the
protocol.

When selecting the bonds, the protocol is guided by an annual yield of 3-6% per annum.
The income from coupons is paid on a quarterly basis and the funds are allocated for
distribution to a special contract, as determined by the community.
`
  },

  {
    title: 'Why invest in BondAppetit when you can just buy bonds or bond ETF?',
    body: `1.  Higher income. The number of BAG tokens is limited. BAG token holders will receive
passive income from bonds, which back the USDap. The more borrowers, the more coupon
payments for token holders.
  2.  Greater security. If you buy bonds and the issuer defaults, then you are left with nothing.
In the case of BondAppetit, a default is not the end of everything, since the protocol can
compensate losses by selling additional BAG tokens on the market.`
  }
];
