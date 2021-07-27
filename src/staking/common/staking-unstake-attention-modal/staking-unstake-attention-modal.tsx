import React from 'react';

import { Button, useModal, Modal, SmallModal, Typography } from 'src/common';
import { useStakingUnstakeAttentionModalStyles } from './staking-unstake-attention-modal.styles';

export type StakingUnstakeAttentionModalProps = {
  onUnstake: () => void;
  onClose?: () => void;
};

const StakingUnstakeAttentionModal: React.VFC<StakingUnstakeAttentionModalProps> =
  (props) => {
    const classes = useStakingUnstakeAttentionModalStyles();

    const handleUnstake = () => {
      props.onUnstake();
      props.onClose?.();
    };

    return (
      <Modal open onClose={props.onClose}>
        <SmallModal>
          <div className={classes.root}>
            <div className={classes.content}>
              <Typography variant="h5" className={classes.attention}>
                Attention!
              </Typography>
              <br />
              <Typography variant="h5">
                1. Once you unstake your LP tokens, you will not be able to
                stake them again
              </Typography>
              <br />
              <Typography variant="h5">
                2. The USDap / USDC pool is closed for staking
              </Typography>
              <br />
              <Typography variant="h5">
                3. Staking rewards will be distributed at the same pool rate
                until 05 August 2021
              </Typography>
            </div>
            <Button onClick={handleUnstake}>Unstake anyway</Button>
          </div>
        </SmallModal>
      </Modal>
    );
  };

export const useStakingUnstakeAttentionModal = (onUnstake: () => void) =>
  useModal(<StakingUnstakeAttentionModal onUnstake={onUnstake} />);
