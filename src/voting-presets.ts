import { Network } from './common';

export type VotingPresetVariables = {
  [key: string]: {
    type: string;
    default: string;
  };
};

export type VotingPresetInput = {
  variable: boolean;
  type: string;
  value: string;
};

export type VotingPresetAction = {
  contract: string;
  method: string;
  input: VotingPresetInput[];
};

export type VotingPreset = {
  title: string;
  description: string;
  variables: VotingPresetVariables;
  actions: VotingPresetAction[];
};

type NetworkConfig = Network;

function transferRewardToStaking(
  networkConfig: NetworkConfig,
  stakingContract: string
) {
  return {
    title: `Staking: transfer reward to ${stakingContract}`,
    description: `Transfer rewards token to ${stakingContract} contract`,
    variables: {
      amount: {
        type: 'uint256',
        default: '1000000000000000000'
      }
    },
    actions: [
      {
        contract: 'Treasury',
        method: 'transfer',
        input: [
          {
            variable: false,
            type: 'address',
            value: networkConfig.assets.Governance.address
          },
          {
            variable: false,
            type: 'address',
            value: networkConfig.contracts[stakingContract]?.address
          },
          {
            variable: true,
            type: 'uint256',
            value: 'amount'
          }
        ]
      },
      {
        contract: stakingContract,
        method: 'notifyRewardAmount',
        input: [
          {
            variable: true,
            type: 'uint256',
            value: 'amount'
          }
        ]
      }
    ]
  };
}

export const getVotingPresets = (
  networkConfig: NetworkConfig
): VotingPreset[] => [
  {
    title: 'Treasury: transfer BAG',
    description: 'Transfer BAG token from Treasury contract',
    variables: {
      recipient: {
        type: 'address',
        default: ''
      },
      amount: {
        type: 'uint256',
        default: '1000000000000000000'
      }
    },
    actions: [
      {
        contract: 'Treasury',
        method: 'transfer',
        input: [
          {
            variable: false,
            type: 'address',
            value: networkConfig.assets.Governance.address
          },
          {
            variable: true,
            type: 'address',
            value: 'recipient'
          },
          {
            variable: true,
            type: 'uint256',
            value: 'amount'
          }
        ]
      }
    ]
  },
  {
    title: 'Treasury: transfer USDap',
    description: 'Transfer USDap token from Treasury contract',
    variables: {
      recipient: {
        type: 'address',
        default: ''
      },
      amount: {
        type: 'uint256',
        default: '1000000000000000000'
      }
    },
    actions: [
      {
        contract: 'Treasury',
        method: 'transfer',
        input: [
          {
            variable: false,
            type: 'address',
            value: networkConfig.assets.Stable.address
          },
          {
            variable: true,
            type: 'address',
            value: 'recipient'
          },
          {
            variable: true,
            type: 'uint256',
            value: 'amount'
          }
        ]
      }
    ]
  },
  {
    title: 'Issuer: burn USDap',
    description:
      'Transfer USDap token from Treasury to Issuer contract and call rebalance',
    variables: {
      amount: {
        type: 'uint256',
        default: '1000000000000000000'
      }
    },
    actions: [
      {
        contract: 'Treasury',
        method: 'transfer',
        input: [
          {
            variable: false,
            type: 'address',
            value: networkConfig.assets.Stable.address
          },
          {
            variable: true,
            type: 'address',
            value: networkConfig.contracts.Issuer.address
          },
          {
            variable: true,
            type: 'uint256',
            value: 'amount'
          }
        ]
      },
      {
        contract: 'Issuer',
        method: 'rebalance',
        input: []
      }
    ]
  },
  /*
  {
    title: 'Market: transfer USDap from Treasury',
    description: 'Transfer USDap token from Treasury to Market contract',
    variables: {
      amount: {
        type: 'uint256',
        default: '1000000000000000000'
      }
    },
    actions: [
      {
        contract: 'Treasury',
        method: 'transfer',
        input: [
          {
            variable: false,
            type: 'address',
            value: networkConfig.assets.Stable.address
          },
          {
            variable: true,
            type: 'address',
            value: networkConfig.contracts.Market.address
          },
          {
            variable: true,
            type: 'uint256',
            value: 'amount'
          }
        ]
      }
    ]
  },
  {
    title: 'Market: transfer USDC to Treasury',
    description: 'Transfer USDC token from Market contract to Treasury',
    variables: {
      amount: {
        type: 'uint256',
        default: '1000000000000000000'
      }
    },
    actions: [
      {
        contract: 'Market',
        method: 'transfer',
        input: [
          {
            variable: false,
            type: 'address',
            value: networkConfig.assets.USDC.address
          },
          {
            variable: true,
            type: 'address',
            value: networkConfig.contracts.Treasury.address
          },
          {
            variable: true,
            type: 'uint256',
            value: 'amount'
          }
        ]
      }
    ]
  },
  */
  transferRewardToStaking(networkConfig, 'UsdcStableLPLockStaking'),
  transferRewardToStaking(networkConfig, 'UsdcGovLPStaking'),
  transferRewardToStaking(networkConfig, 'UsdnGovLPStaking'),
  transferRewardToStaking(networkConfig, 'UsdtGovLPStaking'),
  transferRewardToStaking(networkConfig, 'StableGovLPStaking')
];
