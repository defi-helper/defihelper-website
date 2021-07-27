import { useWeb3React } from '@web3-react/core';
import { useAsyncRetry } from 'react-use';

import {
  BN,
  useBalance,
  useGovernanceContract,
  useNetworkConfig,
  useBBagContract2
} from 'src/common';
import { useGovernanceCost } from 'src/staking';

export const useWalletInfo = () => {
  const { account = null } = useWeb3React();

  const governanceContract = useGovernanceContract();

  const networkConfig = useNetworkConfig();

  const getBalance = useBalance();
  const bBagContract = useBBagContract2();

  const governanceInUSDC = useGovernanceCost();

  const state = useAsyncRetry(async () => {
    if (!governanceContract || !account || !governanceInUSDC) return;

    const locking = await governanceContract.methods.locking(account).call();

    const asset = networkConfig.assets.Governance;

    const balance = await getBalance({
      tokenName: asset.symbol,
      tokenAddress: asset.address
    });

    const bbagBalance = new BN(
      await bBagContract.methods.balanceOf(account).call()
    );

    const unstakedBAG = new BN(locking.amount).div(
      new BN(10).pow(asset.decimals)
    );

    const unstakedInBAG = balance
      .plus(bbagBalance)
      .div(new BN(10).pow(asset.decimals))
      .minus(unstakedBAG);

    const unstakedInUSDC = unstakedInBAG.multipliedBy(governanceInUSDC);

    const lockedUSDC = unstakedBAG.multipliedBy(governanceInUSDC);

    return {
      unstaked: {
        inBAG: unstakedInBAG.isLessThan(0) ? new BN(0) : unstakedInBAG,
        inUSDC: unstakedInUSDC.isLessThan(0) ? new BN(0) : unstakedInUSDC
      },
      locked: {
        inBAG: unstakedBAG.isLessThan(0) ? new BN(0) : unstakedBAG,
        inUSDC: lockedUSDC.isLessThan(0) ? new BN(0) : lockedUSDC,
        date: locking.date
      }
    };
  }, [
    account,
    governanceContract,
    getBalance,
    networkConfig.assets,
    governanceInUSDC
  ]);

  return {
    state,
    governanceInUSDC
  };
};
