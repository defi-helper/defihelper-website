import { useWeb3React } from '@web3-react/core';
import React, { forwardRef } from 'react';
import { useToggle } from 'react-use';

import { Button } from 'src/common';
import { WalletModal } from '../wallet-modal';

export type WalletButtonWithFallbackProps = {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: string;
  children?: React.ReactNode;
};

export const WalletButtonWithFallback = forwardRef<
  HTMLButtonElement,
  WalletButtonWithFallbackProps
>((props, ref) => {
  const { account = null } = useWeb3React();

  const [walletsOpen, walletsToggle] = useToggle(false);

  return (
    <>
      <Button
        ref={ref}
        disabled={!account ? undefined : props.disabled}
        loading={props.loading}
        onClick={!account ? walletsToggle : props.onClick}
        className={props.className}
      >
        {!account ? 'Connect wallet' : props.children}
      </Button>
      <WalletModal open={walletsOpen} onClose={walletsToggle} />
    </>
  );
});

WalletButtonWithFallback.displayName = 'WalletButtonWithFallback';
