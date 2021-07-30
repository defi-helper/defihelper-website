import React, { useCallback, useState } from 'react';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';

import {
  useGovernanceContract,
  Modal,
  SmallModal,
  estimateGas
} from 'src/common';
import { useVotingChooseStyles } from './voting-choose.styles';
import { VotingDelegate, VotingManual, VotingChooseButtons } from '../common';

enum VotingVariants {
  choose,
  manual,
  delegate
}

export type VotingChooseProps = {
  open: boolean;
  onClose: () => void;
  votes: string;
};

export const VotingChoose: React.FC<VotingChooseProps> = (props) => {
  const [currentVotingState, setCurrentVotingState] = useState<VotingVariants>(
    VotingVariants.choose
  );
  const classes = useVotingChooseStyles();
  const governanceContract = useGovernanceContract();
  const { account = null } = useWeb3React<Web3>();

  const { onClose } = props;

  const handleClose = useCallback(() => {
    onClose();

    setCurrentVotingState(VotingVariants.choose);
  }, [onClose]);

  const handleVote = useCallback(
    async (address?: string | null) => {
      if (!address || !account || !governanceContract) return;

      const delegate = governanceContract.methods.delegate(address);

      await delegate.send({
        from: account,
        gas: await estimateGas(delegate, { from: account })
      });

      handleClose();
    },
    [governanceContract, account, handleClose]
  );

  const components = [
    <VotingChooseButtons
      title={`Redelegate ${props.votes} votes`}
      subtitle="BAG tokens represent voting shares in BondAppetit governance."
      buttons={[
        {
          title: 'Self Delegate',
          subtitle: `Deligate votes to your wallet so you can
            vote on each proposal and create new ones by yourself.`,
          onClick: () => setCurrentVotingState(VotingVariants.manual)
        },
        {
          title: 'Add Delegant',
          subtitle: `Deligate your votes to a third party to setup a delegant which will
            can vote on proposals and create ones for you.`,
          onClick: () => setCurrentVotingState(VotingVariants.delegate)
        }
      ]}
    />,
    <VotingManual onManual={() => handleVote(account)} />,
    <VotingDelegate onDelegate={(address) => handleVote(address)} />
  ];

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      onBack={
        currentVotingState !== VotingVariants.choose
          ? () => setCurrentVotingState(VotingVariants.choose)
          : undefined
      }
    >
      <SmallModal>
        <div className={classes.root}>{components[currentVotingState]}</div>
      </SmallModal>
    </Modal>
  );
};
