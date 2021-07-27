import React from 'react';

import MetamaskScreen from 'src/assets/images/metamask-screen.png';
import { Modal, SmallModal, useModal } from '../modal';
import { Typography } from '../typography';
import { useChangeNetworkModalStyles } from './change-network-modal.styles';

export type ChangeNetworkModalProps = {
  onClose?: () => void;
};

const ChangeNetworkModal: React.VFC<ChangeNetworkModalProps> = (props) => {
  const classes = useChangeNetworkModalStyles();

  return (
    <Modal open onClose={props.onClose}>
      <SmallModal className={classes.modal}>
        <div className={classes.root}>
          <Typography variant="h4" className={classes.title}>
            Switch from Binance Smart Chain to Ethereum Mainnet manually in your
            MetaMask
          </Typography>
          <img src={MetamaskScreen} alt="" className={classes.img} />
        </div>
      </SmallModal>
    </Modal>
  );
};

export const useChangeNetworkModal = () => useModal(<ChangeNetworkModal />);
