import type { AbstractConnector } from '@web3-react/abstract-connector';
import { InjectedConnector } from '@web3-react/injected-connector';
import { LedgerConnector } from '@web3-react/ledger-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { FortmaticConnector } from '@web3-react/fortmatic-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { TrezorConnector } from '@web3-react/trezor-connector';
import React from 'react';
import { BscConnector } from '@binance-chain/bsc-connector';

import { ReactComponent as MetaMaskIcon } from 'src/assets/icons/metamask.svg';
import { ReactComponent as LedgerIcon } from 'src/assets/icons/ledger.svg';
import { ReactComponent as CoinBaseIcon } from 'src/assets/icons/coinbase-wallet.svg';
import { ReactComponent as WalletConnectIcon } from 'src/assets/icons/wallet-connect.svg';
import { ReactComponent as FortmaticIcon } from 'src/assets/icons/fortmatic-wallet.svg';
import { ReactComponent as PortisIcon } from 'src/assets/icons/portis-wallet.svg';
import { ReactComponent as TrustIcon } from 'src/assets/icons/trustwallet.svg';
import { ReactComponent as TrezorIcon } from 'src/assets/icons/trezor-wallet.svg';
import { ReactComponent as BinanceIcon } from 'src/assets/icons/binance-wallet.svg';
import { config } from 'src/config';
import { WalletLinkConnector } from './wallet-link';

export const injected = new InjectedConnector({
  supportedChainIds: [...config.CHAIN_IDS, ...config.CHAIN_BINANCE_IDS]
});

export const ledger = new LedgerConnector({
  chainId: config.DEFAULT_NETWORK_CONFIG.networkId,
  url: config.DEFAULT_NETWORK_CONFIG.networkUrl,
  pollingInterval: config.POLLING_INTERVAL
});

export const trezor = new TrezorConnector({
  chainId: config.DEFAULT_NETWORK_CONFIG.networkId,
  url: config.DEFAULT_NETWORK_CONFIG.networkUrl,
  pollingInterval: config.POLLING_INTERVAL,
  manifestEmail: config.TREZOR_EMAIL,
  manifestAppUrl: config.TREZOR_URL
});

export const walletlink = new WalletLinkConnector({
  url: config.DEFAULT_NETWORK_CONFIG.networkUrl,
  appName: 'Bondappetit'
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: config.DEFAULT_NETWORK_CONFIG.networkUrl },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: config.POLLING_INTERVAL
});

export const fortmatic = new FortmaticConnector({
  apiKey: config.FORTMATIC_KEY ?? '',
  chainId: config.DEFAULT_NETWORK_CONFIG.networkId
});

export const portis = new PortisConnector({
  dAppId: config.PORTIS_ID ?? '',
  networks: [config.DEFAULT_NETWORK_CONFIG.networkId]
});

export const binance = new BscConnector({
  supportedChainIds: [...config.CHAIN_IDS, ...config.CHAIN_BINANCE_IDS]
});

enum ConnectorNames {
  MetaMask = 'MetaMask',
  TrustWallet = 'TrustWallet',
  Ledger = 'Ledger',
  CoinBase = 'Coinbase',
  WalletConnect = 'WalletConnect',
  Fortmatic = 'Fortmatic',
  Portis = 'Portis',
  Trezor = 'Trezor',
  Binance = 'Binance'
}

export const connectorsByName: Record<
  ConnectorNames,
  { connector: AbstractConnector; logo: React.FC }
> = {
  [ConnectorNames.MetaMask]: {
    connector: injected,
    logo: MetaMaskIcon
  },
  [ConnectorNames.TrustWallet]: {
    connector: injected,
    logo: TrustIcon
  },
  [ConnectorNames.Ledger]: {
    connector: ledger,
    logo: LedgerIcon
  },
  [ConnectorNames.Trezor]: {
    connector: trezor,
    logo: TrezorIcon
  },
  [ConnectorNames.CoinBase]: {
    connector: walletlink,
    logo: CoinBaseIcon
  },
  [ConnectorNames.WalletConnect]: {
    connector: walletconnect,
    logo: WalletConnectIcon
  },
  [ConnectorNames.Binance]: {
    connector: binance,
    logo: BinanceIcon
  },
  [ConnectorNames.Fortmatic]: {
    connector: fortmatic,
    logo: FortmaticIcon
  },
  [ConnectorNames.Portis]: {
    connector: portis,
    logo: PortisIcon
  }
};
