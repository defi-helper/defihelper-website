import { useCallback, useState } from 'react';

import {
  useNetworkConfig,
  useMarketContract,
  useBalance,
  Asset,
  BN,
  useIntervalIfHasAccount
} from 'src/common';

export const useGovernanceTokens = () => {
  const [tokens, setTokens] = useState<Asset[]>([]);
  const network = useNetworkConfig();
  const marketContract = useMarketContract();

  const getBalance = useBalance();

  const handleLoadTokenPrices = useCallback(async () => {
    if (!marketContract) return;

    const tokensWithPrice = Object.values(network.assets).reduce<
      Promise<Asset[]>
    >(async (previusPromise, asset) => {
      const acc = await previusPromise;

      const isAllowedToken = await marketContract.methods
        .isAllowedToken(asset.address)
        .call();

      if (isAllowedToken) {
        const balanceOfToken = await getBalance({
          tokenAddress: asset.address,
          tokenName: asset.symbol
        });

        const balance = balanceOfToken.div(new BN(10).pow(asset.decimals));

        const token: Asset = {
          ...asset,
          balance: balance.isNaN() ? '0' : balance.toString(10)
        };

        acc.push(token);
      }

      return acc;
    }, Promise.resolve([]));

    try {
      setTokens(await tokensWithPrice);
    } catch (e) {
      console.error(e.message);
    }
  }, [network, marketContract, getBalance]);

  useIntervalIfHasAccount(handleLoadTokenPrices);

  return tokens;
};
