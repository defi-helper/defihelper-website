import { AbstractConnector } from '@web3-react/abstract-connector';
import React from 'react';

import { ButtonBase, Typography } from 'src/common';
import { connectorsByName } from '../connectors';
import { useWalletListStyles } from './wallet-list.styles';

export type WalletListProps = {
  onClick: (connector: AbstractConnector) => void;
  errorMessage?: string;
};

type InjectedWalletProps = {
  component: 'a';
  link: string;
  target: string;
  title: string;
};

const injectWalletsMap = new Map<string, InjectedWalletProps>([
  [
    'MetaMask',
    {
      component: 'a',
      link: 'https://metamask.io/',
      target: '_blank',
      title: 'Install Metamask'
    }
  ],
  [
    'TrustWallet',
    {
      component: 'a',
      link: /Android/i.test(navigator.userAgent)
        ? 'https://trustwallet.com/dapp/'
        : 'https://community.trustwallet.com/t/enable-dapp-browser-on-trust-wallet-ios-version/98308',
      target: '_blank',
      title: 'Enable Trustwallet browser'
    }
  ]
]);

const getInjectedWalletProps = (name: string) => {
  if (!window.ethereum) {
    return injectWalletsMap.get(name);
  }
};

export const WalletList: React.FC<WalletListProps> = (props) => {
  const classes = useWalletListStyles();

  return (
    <div className={classes.wrap}>
      {Object.entries(connectorsByName).map(
        ([name, { connector, logo: Logo }]) => {
          const injectedWallet = getInjectedWalletProps(name);

          return (
            <ButtonBase
              key={name}
              onClick={() => props.onClick(connector)}
              className={classes.wallet}
              component={injectedWallet?.component}
            >
              <Typography
                variant="h4"
                component="span"
                className={classes.walletTitle}
              >
                {injectedWallet?.title ?? name}
              </Typography>
              <div className={classes.walletLogo}>
                <Logo />
              </div>
            </ButtonBase>
          );
        }
      )}
      {props.errorMessage && (
        <Typography
          variant="body1"
          align="center"
          className={classes.errorMessage}
        >
          {props.errorMessage}
        </Typography>
      )}
    </div>
  );
};
