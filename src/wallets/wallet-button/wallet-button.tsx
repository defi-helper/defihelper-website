import React from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import clsx from 'clsx';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import { useToggle } from 'react-use';
import networks from '@bondappetit/networks';

import {
  ButtonBase,
  Typography,
  cutAccount,
  Chip,
  useNetworkConfig
} from 'src/common';
import { ReactComponent as WalletIcon } from 'src/assets/icons/wallet.svg';
import { config } from 'src/config';
import { useWalletButtonStyles } from './wallet-button.styles';
import { WalletModal } from '../wallet-modal';

export const WalletButton: React.FC = () => {
  const classes = useWalletButtonStyles();
  const { account = null, chainId } = useWeb3React<Web3>();
  const [open, toggleOpen] = useToggle(false);
  const networkConfig = useNetworkConfig();

  const currentChainId = Number(chainId ?? config.DEFAULT_CHAIN_ID);

  const bscNetworks =
    config.CHAIN_BINANCE_IDS[0] === currentChainId
      ? undefined
      : networks.testnetBSC.networkName;

  const networkName = !config.CHAIN_IDS.includes(currentChainId)
    ? bscNetworks
    : networkConfig.networkName;

  return (
    <div className={classes.wrap}>
      {account && networkName && networkName !== networks.main.networkName && (
        <Chip className={classes.chip}>{networkName}</Chip>
      )}
      <ButtonBase onClick={toggleOpen} className={clsx(classes.connected)}>
        <Typography variant="body1" className={classes.account} as="span">
          {account ? cutAccount(account) : <>Connect wallet</>}
        </Typography>
        {account ? (
          <Jazzicon diameter={28} seed={jsNumberForAddress(account)} />
        ) : (
          <WalletIcon className={classes.walletIcon} />
        )}
      </ButtonBase>
      <WalletModal open={open} onClose={toggleOpen} />
    </div>
  );
};
