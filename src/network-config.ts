import { BlockchainEnum } from './graphql/_generated-types';
import AvalanceIcon from './assets/icons/blockchains/avalanche.svg';
import BSCIcon from './assets/icons/blockchains/bsc.svg';
import EthereumIcon from './assets/icons/blockchains/ethereum.svg';
import Moonriver from './assets/icons/blockchains/moonriver.svg';
import FantomIcon from './assets/icons/blockchains/fantom.svg';
import CronosIcon from './assets/icons/blockchains/cronos.svg';
import ArbitrumIcon from './assets/icons/blockchains/arbitrum.svg';

type Network = {
  title: string;
  explorerUrl: string;
  coin: string;
  decimals?: number;
  blockchain: BlockchainEnum;
  rpcUrls?: string[];
  chainId: number | string;
  icon: string;
};

const prodNetworks: Record<string, Network> = {
  1: {
    chainId: 1,
    title: 'Ethereum',
    explorerUrl: 'https://etherscan.io',
    coin: 'ETH',
    decimals: 18,
    blockchain: BlockchainEnum.Ethereum,
    icon: EthereumIcon
  },
  56: {
    chainId: 56,
    title: 'Binance Smart Chain',
    explorerUrl: 'https://bscscan.com',
    coin: 'BNB',
    decimals: 18,
    blockchain: BlockchainEnum.Ethereum,
    icon: BSCIcon,
    rpcUrls: [
      'https://bsc-dataseed.binance.org/',
      'https://bsc-dataseed1.defibit.io/',
      'https://bsc-dataseed1.ninicoin.io/'
    ]
  },
  1285: {
    chainId: 1285,
    title: 'Moonriver',
    explorerUrl: 'https://moonriver.moonscan.io',
    coin: 'MOVR',
    decimals: 18,
    blockchain: BlockchainEnum.Ethereum,
    icon: Moonriver,
    rpcUrls: [
      'https://rpc.moonriver.moonbeam.network',
      'https://rpc.moonriver.moonbeam.network'
    ]
  },
  43114: {
    chainId: 43114,
    title: 'Avalanche',
    explorerUrl: 'https://snowtrace.io',
    coin: 'AVAX',
    decimals: 18,
    blockchain: BlockchainEnum.Ethereum,
    icon: AvalanceIcon,
    rpcUrls: [
      'https://api.avax.network/ext/bc/C/rpc',
      'https://api.avax.network/ext/bc/C/rpc'
    ]
  },
  250: {
    chainId: 250,
    title: 'Fantom',
    explorerUrl: 'https://ftmscan.com',
    coin: 'FTM',
    decimals: 18,
    blockchain: BlockchainEnum.Ethereum,
    icon: FantomIcon,
    rpcUrls: ['https://rpc.ftm.tools']
  },
  25: {
    chainId: 25,
    title: 'Cronos',
    explorerUrl: 'https://cronoscan.com',
    coin: 'CRO',
    decimals: 18,
    blockchain: BlockchainEnum.Ethereum,
    icon: CronosIcon,
    rpcUrls: ['https://evm.cronos.org']
  },
  42161: {
    chainId: 42161,
    title: 'Arbitrum',
    explorerUrl: 'https://arbiscan.io',
    coin: 'ETH',
    decimals: 18,
    blockchain: BlockchainEnum.Ethereum,
    icon: ArbitrumIcon,
    rpcUrls: ['https://arb1.arbitrum.io/rpc']
  },
  10: {
    chainId: 10,
    title: 'Optimistic Ethereum',
    explorerUrl: 'https://optimistic.etherscan.io',
    coin: 'ETH',
    decimals: 18,
    blockchain: BlockchainEnum.Ethereum,
    icon: EthereumIcon,
    rpcUrls: ['https://mainnet.optimism.io']
  }
};

export const networksConfig: Record<string, Network> = prodNetworks;
