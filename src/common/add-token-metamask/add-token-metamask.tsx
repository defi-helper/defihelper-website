import React from 'react';
import clsx from 'clsx';
import networks from '@bondappetit/networks';

import { ButtonBase } from '../button-base';
import { useNetworkConfig } from '../use-network-config';
import { useAddTokenMetamask } from './use-add-token-metamask';
import { useAddTokenMetamaskStyles } from './add-token-metamask.styles';

export type AddTokenMetamaskProps = {
  token: string;
  className: string;
};

export const AddTokenMetamask: React.VFC<AddTokenMetamaskProps> = (props) => {
  const addTokenToMetaMask = useAddTokenMetamask(props.token);
  const networkConfig = useNetworkConfig();

  const classes = useAddTokenMetamaskStyles();

  const assets = {
    ...networkConfig.assets,
    ...networks.mainBSC.assets
  };

  if (!window.ethereum?.isMetaMask) return null;

  return (
    <ButtonBase
      onClick={addTokenToMetaMask}
      className={clsx(classes.root, props.className)}
    >
      Add {assets[props.token]?.symbol} on Metamask
    </ButtonBase>
  );
};
