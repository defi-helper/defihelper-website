import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { IERC20 } from 'src/generate/IERC20';
import IERC20Abi from '@bondappetit/networks/abi/IERC20.json';
import type { AbiItem } from 'web3-utils';

import { BN } from './bignumber';
import { useDynamicContract } from './create-use-contract';

type GetBalanceOptions = {
  tokenName?: string;
  tokenAddress?: string;
  accountAddress?: string | null;
};

export const useBalance = (chainId?: number) => {
  const { account: web3Account = null, library } = useWeb3React<Web3>();
  const balanceRef = useRef('');
  const getIERC20Contract = useDynamicContract<IERC20>(
    {
      abi: IERC20Abi.abi as AbiItem[]
    },
    chainId
  );

  const [account, setAccout] = useState(web3Account);

  const handleGetWETHBalance = useCallback(
    (accountAddress = account) => {
      if (!accountAddress || !library) return '';

      return library.eth.getBalance(accountAddress);
    },
    [library, account]
  );

  const handleGetIERC20Balance = useCallback(
    (address?: string, accountAddress = account) => {
      if (!accountAddress) return '';

      const contract = getIERC20Contract(address, undefined);

      return contract.methods.balanceOf(accountAddress).call();
    },
    [getIERC20Contract, account]
  );

  const getBalance = useCallback(
    async (options: GetBalanceOptions) => {
      if (options.tokenName === 'ETH') {
        balanceRef.current = await handleGetWETHBalance(options.accountAddress);
      }

      if (options.tokenName !== 'ETH') {
        balanceRef.current = await handleGetIERC20Balance(
          options.tokenAddress,
          options.accountAddress
        );
      }

      const balance = new BN(balanceRef.current);

      return balance.isNaN() ? new BN(0) : balance;
    },
    [handleGetWETHBalance, handleGetIERC20Balance]
  );

  useEffect(() => {
    if (web3Account) {
      setAccout(web3Account);
    }
  }, [web3Account]);

  return getBalance;
};
