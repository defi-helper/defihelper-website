import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { useToggle } from 'react-use';
import { useWeb3React } from '@web3-react/core';

import { ReactComponent as BAGicon } from 'src/assets/icons/wallet-info.svg';
import { ButtonBase, LinkModal, useNetworkConfig } from 'src/common';
import { VotingInvestingForm } from 'src/voting/voting-investing-form';
import { config } from 'src/config';
import { VotingInvestingAttention } from 'src/voting/voting-investing-attention';
import { useWalletProfileStyles } from './wallet-profile.styles';
import { WalletProfileDropdown } from './wallet-profile-dropdown';
import { WalletModal } from '../wallet-modal';

export type WalletProfileProps = {
  className?: string;
};

export const WalletProfile: React.VFC<WalletProfileProps> = (props) => {
  const classes = useWalletProfileStyles();

  const networkConfig = useNetworkConfig();

  const { chainId } = useWeb3React();

  const ref = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [dropdownOpened, toggleDropdown] = useToggle(false);
  const [linkModalOpen, togglelinkModal] = useToggle(false);
  const [investFormIsOpen, toggleInvestForm] = useToggle(false);
  const [walletModalOpen, toggleWalletModal] = useToggle(false);
  const [attentionModalOpen, toggleAttentionModal] = useToggle(false);
  const [linksOpen, linksToggle] = useToggle(false);

  useEffect(() => {
    const onMouseOver = () => toggleDropdown(true);
    const onMouseOut = () => toggleDropdown(false);

    const { current } = ref;

    current?.addEventListener('mouseenter', onMouseOver);
    current?.addEventListener('mouseleave', onMouseOut);

    return () => {
      current?.addEventListener('mouseenter', onMouseOver);
      current?.addEventListener('mouseleave', onMouseOut);
    };
  }, [ref, toggleDropdown]);

  const handleAttention = () => {
    togglelinkModal(false);
    toggleAttentionModal(true);
  };
  const handleBuyInvestment = () => {
    toggleAttentionModal(false);
    toggleInvestForm(true);
  };

  return (
    <div className={clsx(classes.root, props.className)} ref={ref}>
      <ButtonBase>
        <BAGicon width="32" height="32" />
      </ButtonBase>
      {dropdownOpened && (
        <div ref={dropdownRef} className={classes.dropdown}>
          <WalletProfileDropdown
            onBuy={
              config.CHAIN_BINANCE_IDS.includes(Number(chainId))
                ? linksToggle
                : togglelinkModal
            }
            onConnect={toggleWalletModal}
          />
        </div>
      )}
      <LinkModal
        open={linkModalOpen}
        onClose={togglelinkModal}
        tokenName={networkConfig.assets.Governance?.symbol}
        tokenAddress={networkConfig.assets.Governance?.address}
        withBuyInvestment={config.IS_INVEST}
        onBuyInvestment={handleAttention}
      />
      <LinkModal
        open={linksOpen}
        onClose={linksToggle}
        tokenName={networkConfig.assets.Governance.symbol}
        tokenAddress={networkConfig.assets.Governance.address}
      />
      <VotingInvestingAttention
        open={attentionModalOpen}
        onClose={toggleAttentionModal}
        onBuy={handleBuyInvestment}
      />
      {investFormIsOpen && (
        <VotingInvestingForm
          open={investFormIsOpen}
          onClose={toggleInvestForm}
        />
      )}
      <WalletModal open={walletModalOpen} onClose={toggleWalletModal} />
    </div>
  );
};
