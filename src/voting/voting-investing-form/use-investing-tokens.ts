import { useAsyncRetry } from 'react-use';

import { useNetworkConfig, BN, useBalance } from 'src/common';

export const useInvestingTokens = () => {
  const network = useNetworkConfig();

  const getBalance = useBalance();

  return useAsyncRetry(async () => {
    const tokensWithPrice = Object.values(network.assets)
      .filter(({ investing }) => investing)
      .map(async (asset) => {
        const balanceOfToken = await getBalance({
          tokenAddress: asset.address,
          tokenName: asset.symbol
        });

        const balance = balanceOfToken.div(new BN(10).pow(asset.decimals));

        return {
          ...asset,
          balance: balance.isNaN() ? '0' : balance.toString(10)
        };
      });

    return Promise.all(tokensWithPrice);
  }, [network, getBalance]);
};
