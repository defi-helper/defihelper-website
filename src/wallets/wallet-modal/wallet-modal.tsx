import React, { useCallback, useMemo, useState } from 'react';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { useUpdateEffect } from 'react-use';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import clsx from 'clsx';

import { Modal, SmallModal } from 'src/common';
import { analytics } from 'src/analytics';
import { Sentry } from 'src/error-boundary';
import {
  WalletInfo,
  WalletList,
  getWalletErrorMessage,
  connectorsByName
} from '../common';
import { useWalletModalStyles } from './wallet-modal.styles';

export type WalletModalProps = {
  open: boolean;
  onClose: () => void;
};

export const WalletModal: React.FC<WalletModalProps> = (props) => {
  const {
    activate,
    chainId,
    account = null,
    error,
    connector,
    setError
  } = useWeb3React<Web3>();
  const [currentComponentIndex, setCurrentComponentIndex] = useState(
    account ? 1 : 0
  );

  const { onClose, open } = props;

  const classes = useWalletModalStyles();

  const handleActivateWallet = useCallback(
    async (wallet: AbstractConnector) => {
      try {
        await activate(wallet, undefined, true);

        if (connector && !error) {
          onClose();
          setCurrentComponentIndex(1);
        }

        analytics.send('connect_wallet');
      } catch (e) {
        setError(e);
        console.error(e.message);
      }
    },
    [onClose, connector, activate, error, setError]
  );

  const handleChangeWallet = useCallback(() => {
    setCurrentComponentIndex(0);
  }, []);

  useUpdateEffect(() => {
    if (account) {
      setCurrentComponentIndex(1);
    }
  }, [account]);

  useUpdateEffect(() => {
    if (error) return;

    if (connector && open) {
      onClose();
    }
  }, [connector, error]);

  const currentConnector = useMemo(
    () =>
      Object.entries(connectorsByName).find(
        ([, value]) => value.connector === connector
      ),
    [connector]
  );

  useUpdateEffect(() => {
    if (!currentConnector || !account || !chainId) return;

    const [connectorName] = currentConnector;

    const user = {
      account,
      wallet: connectorName,
      chainId
    };

    Sentry.configureScope(user);
  }, [account, currentConnector, chainId]);

  const components = [
    <WalletList
      onClick={handleActivateWallet}
      errorMessage={error ? getWalletErrorMessage(error) : undefined}
    />,
    <WalletInfo
      account={account}
      onChange={handleChangeWallet}
      errorMessage={error ? getWalletErrorMessage(error) : undefined}
    />
  ];

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={clsx(classes.root, {
        [classes.innerConnected]: currentComponentIndex
      })}
    >
      <SmallModal
        className={clsx(classes.inner, {
          [classes.innerConnected]: currentComponentIndex
        })}
      >
        {components[currentComponentIndex]}
      </SmallModal>
    </Modal>
  );
};
