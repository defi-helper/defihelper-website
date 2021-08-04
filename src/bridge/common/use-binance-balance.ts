import { useWeb3React } from '@web3-react/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useWalletQuery } from 'src/graphql/_generated-hooks';
import { config } from 'src/config';
import { BN } from 'src/common';

export const useBinanceBalance = () => {
  const { account } = useWeb3React();

  const state = useWalletQuery({
    variables: { filter: { address: account ?? '' } },
    skip: !account,
    pollInterval: config.POLLING_INTERVAL,
    context: {
      headers: {
        'chain-id': config.CHAIN_BINANCE_IDS[0]
      }
    }
  });

  return new BN(state.data?.wallet.data?.balanceFloat ?? '').isLessThan('0.05');
};
