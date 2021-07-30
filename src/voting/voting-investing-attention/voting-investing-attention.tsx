import React from 'react';
import { analytics } from 'src/analytics';

import { Button, Modal, SmallModal, Typography, useModal } from 'src/common';
import { useVotingInvestingAttentionStyles } from './voting-investing-attention.styles';

export type VotingInvestingAttentionProps = {
  onClose?: () => void;
  open: boolean;
  onBuy: () => void;
};

export const VotingInvestingAttention: React.VFC<VotingInvestingAttentionProps> =
  (props) => {
    const classes = useVotingInvestingAttentionStyles();

    const handleBuy = () => {
      props.onBuy();

      analytics.send('invest_click');
    };

    return (
      <Modal open={props.open} onClose={props.onClose}>
        <SmallModal>
          <div className={classes.root}>
            <div className={classes.content}>
              <Typography variant="h5">
                <Typography variant="inherit" className={classes.redTitle}>
                  Attention!
                </Typography>{' '}
              </Typography>
              <Typography variant="h5">
                We&apos;re offering BAG tokens with a fixed price and a 6-month
                lockup period.
              </Typography>{' '}
              <Typography variant="h5">
                That means you won&apos;t be able to transfer or stake tokens
                for 6 months, but you will be able to vote and create proposals
                with them.
              </Typography>
            </div>
            <Button className={classes.button} onClick={handleBuy}>
              Buy
            </Button>
          </div>
        </SmallModal>
      </Modal>
    );
  };

export const useVotingInvestingAttention = (onBuy: () => void) =>
  useModal(<VotingInvestingAttention open onBuy={onBuy} />);
