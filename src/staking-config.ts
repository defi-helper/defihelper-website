import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import networks from '@bondappetit/networks';

import { Network } from './common';
import { config } from './config';

export enum StakingStatuses {
  archived = 'archived',
  active = 'active'
}

export type StakingConfig = {
  contractName: string;
  tokenName: string;
  token: string[];
  liquidityPool: boolean;
  configAddress: string;
  networkName: string;
  chainId: number;
  status: StakingStatuses;
};

const Gov = 'BAG';
const GovBNB = 'bBAG';
const Stable = 'USDap';
const USDC = 'USDC';
const USDN = 'USDN';
const USDT = 'USDT';
// const ETH = 'ETH';
const LP = 'UNI-V2';
const BNB = 'BNB';
const CAKE_LP = 'Cake-LP';

const stakingConfig = [
  // {
  //   contractName: 'GovStaking',
  //   tokenName: Gov,
  //   token: [Gov],
  //   liquidityPool: false
  // },

  // {
  //   contractName: 'StableStaking',
  //   tokenName: Stable,
  //   token: [Stable],
  //   liquidityPool: false
  // },

  // {
  //   contractName: 'WethGovLPStaking',
  //   tokenName: LP,
  //   token: [Gov, ETH],
  //   liquidityPool: true
  // },

  // {
  //   contractName: 'UsdcStableLPStaking',
  //   tokenName: LP,
  //   token: [Stable, USDC],
  //   liquidityPool: true
  // },

  // {
  //   contractName: 'GovStableLPStaking',
  //   tokenName: LP,
  //   token: [Stable, Gov],
  //   liquidityPool: true
  // },

  {
    contractName: 'BnbGovLPStaking',
    tokenName: CAKE_LP,
    chainId: config.CHAIN_BINANCE_IDS[0],
    token: [GovBNB, BNB],
    liquidityPool: true,
    status: StakingStatuses.active
  },

  {
    contractName: 'BnbGovLPStaking',
    tokenName: CAKE_LP,
    chainId: config.CHAIN_BINANCE_IDS[1],
    token: [GovBNB, BNB],
    liquidityPool: true,
    status: StakingStatuses.active
  },

  {
    contractName: 'UsdcStableLPLockStaking',
    tokenName: LP,
    chainId: config.CHAIN_IDS[0],
    token: [Stable, USDC],
    liquidityPool: true,
    status: StakingStatuses.active
  },

  {
    contractName: 'UsdtGovLPStaking',
    tokenName: LP,
    chainId: config.CHAIN_IDS[0],
    token: [Gov, USDT],
    liquidityPool: true,
    status: StakingStatuses.active
  },

  {
    contractName: 'UsdnGovLPStaking',
    tokenName: LP,
    chainId: config.CHAIN_IDS[0],
    token: [Gov, USDN],
    liquidityPool: true,
    status: StakingStatuses.active
  },

  {
    contractName: 'UsdcGovLPStaking',
    tokenName: LP,
    chainId: config.CHAIN_IDS[0],
    token: [Gov, USDC],
    liquidityPool: true,
    status: StakingStatuses.archived
  }
];

const chainContracts: Record<number, Network['contracts']> = {
  [config.CHAIN_IDS[0]]: networks.main.contracts,
  [config.CHAIN_IDS[1]]: networks.ropsten.contracts,
  [config.CHAIN_BINANCE_IDS[0]]: networks.mainBSC.contracts,
  [config.CHAIN_BINANCE_IDS[1]]: networks.testnetBSC.contracts
};

const getStakingAddress = (
  contracts: Network['contracts'],
  contractName: string
): string | undefined => contracts[contractName]?.address;

const getStakingConfig = (chainId?: number): Record<string, StakingConfig> => {
  const currentChainId = Number(chainId);

  const currentChainContracts = {
    ...chainContracts
  };

  if (
    currentChainId === config.CHAIN_BINANCE_IDS[0] ||
    config.CHAIN_IDS.includes(currentChainId)
  ) {
    delete currentChainContracts[config.CHAIN_BINANCE_IDS[1]];
  }

  if (currentChainId === config.CHAIN_BINANCE_IDS[1]) {
    delete currentChainContracts[config.CHAIN_BINANCE_IDS[0]];
  }

  return stakingConfig.reduce<Record<string, StakingConfig>>(
    (acc, configItem) => {
      const contracts = currentChainContracts[configItem.chainId];

      if (!contracts) return acc;

      const address = getStakingAddress(contracts, configItem.contractName);

      if (address) {
        const lowerAddress = address.toLowerCase();

        acc[lowerAddress] = {
          ...configItem,
          configAddress: lowerAddress,
          networkName: 'networkConfig.networkName'
        };
      }

      return acc;
    },
    {}
  );
};

export const useStakingConfig = () => {
  const { chainId } = useWeb3React();

  const stakingConfigMemo = useMemo(
    () => getStakingConfig(chainId ?? Number(config.DEFAULT_CHAIN_ID)),
    [chainId]
  );

  const stakingConfigValues = useMemo(
    () => Object.values(stakingConfigMemo),
    [stakingConfigMemo]
  );

  return { stakingConfigValues, stakingConfig: stakingConfigMemo };
};
