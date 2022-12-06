import { BlockchainEnum } from './graphql/_generated-types';
import AvalanceIcon from './assets/icons/blockchains/avalanche.svg';
import BSCIcon from './assets/icons/blockchains/bsc.svg';
import EthereumIcon from './assets/icons/blockchains/ethereum.svg';
import Moonriver from './assets/icons/blockchains/moonriver.svg';
import FantomIcon from './assets/icons/blockchains/fantom.svg';
import CronosIcon from './assets/icons/blockchains/cronos.svg';
import ArbitrumIcon from './assets/icons/blockchains/arbitrum.svg';
import PolygonIcon from './assets/icons/blockchains/polygon.svg';
import OptimismIcon from './assets/icons/blockchains/optimism.svg';
import HarmonyIcon from './assets/icons/blockchains/harmony.svg';
import MoonbeamIcon from './assets/icons/blockchains/moonbeam.svg';
import AuroraIcon from './assets/icons/blockchains/aurora.svg';

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
  1313161554: {
    chainId: 1313161554,
    title: 'Aurora',
    explorerUrl: 'https://aurorascan.dev',
    coin: 'ETH',
    decimals: 18,
    blockchain: BlockchainEnum.Ethereum,
    icon: AuroraIcon,
    rpcUrls: ['https://mainnet.aurora.dev', 'https://mainnet.aurora.dev']
  },
  1284: {
    chainId: 1284,
    title: 'MoonBeam',
    explorerUrl: 'https://moonbeam.moonscan.io',
    coin: 'GLMR',
    decimals: 18,
    blockchain: BlockchainEnum.Ethereum,
    icon: MoonbeamIcon,
    rpcUrls: [
      'https://rpc.api.moonbeam.network',
      'https://rpc.api.moonbeam.network'
    ]
  },
  56: {
    chainId: 56,
    title: 'BNB Chain',
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
  137: {
    chainId: 137,
    title: 'Polygon',
    explorerUrl: 'https://polygonscan.com',
    coin: 'MATIC',
    decimals: 18,
    blockchain: BlockchainEnum.Ethereum,
    icon: PolygonIcon,
    rpcUrls: [
      'https://rpc-mainnet.maticvigil.com/',
      'https://rpc-mainnet.maticvigil.com/'
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
    icon: OptimismIcon,
    rpcUrls: ['https://mainnet.optimism.io']
  }
};

export const networksConfig: Record<string, Network> = prodNetworks;
