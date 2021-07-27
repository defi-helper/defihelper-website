import { useAsyncRetry } from 'react-use';

import {
  BN,
  useGovernanceContract,
  useInvestmentContract,
  useNetworkConfig
} from 'src/common';

const TOTAL_TOKENS = 480000;

export const useInvestingTotal = () => {
  const investmentContract = useInvestmentContract();
  const networkConfig = useNetworkConfig();
  const governanceContract = useGovernanceContract();

  const state = useAsyncRetry(async () => {
    if (!governanceContract || !investmentContract) return;

    const balanceOfGovernance = await governanceContract.methods
      .balanceOf(investmentContract.options.address)
      .call();

    let totalTokens = new BN(TOTAL_TOKENS);

    const balance = new BN(balanceOfGovernance).div(
      new BN(10).pow(networkConfig.assets.Governance.decimals)
    );

    totalTokens = totalTokens.isGreaterThan(balance) ? totalTokens : balance;

    return {
      balance,
      totalTokens,
      percent: new BN(1).minus(balance.div(totalTokens)).multipliedBy(100)
    };
  }, [networkConfig.assets]);

  return state;
};
