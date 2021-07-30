import { useCallback } from 'react';
import networks from '@bondappetit/networks';

import { useNetworkConfig } from 'src/common/use-network-config';
import BAGIcon from 'src/assets/icons/coins/bag.svg';
import USDAPIcon from 'src/assets/icons/coins/usdap.svg';
import USDCicon from 'src/assets/icons/coins/usdc.svg';
import DaiIcon from 'src/assets/icons/coins/dai.svg';
import UsdtIcon from 'src/assets/icons/coins/usdt.svg';
import BtcIcon from 'src/assets/icons/coins/btc.svg';
import EthIcon from 'src/assets/icons/coins/eth.svg';
import USDNIcon from 'src/assets/icons/coins/usdn.svg';
import BNBIcon from 'src/assets/icons/coins/bnb.svg';
import PAXIcon from 'src/assets/icons/coins/pax.svg';

const ICONS = new Map([
  ['Stable', USDAPIcon],
  ['Governance', BAGIcon],
  ['bBAG', BAGIcon],
  ['BNB', BNBIcon],
  ['BUSD', BNBIcon],
  ['DAI', DaiIcon],
  ['WBTC', BtcIcon],
  ['ETH', EthIcon],
  ['USDT', UsdtIcon],
  ['USDC', USDCicon],
  ['USDN', USDNIcon],
  ['PAX', PAXIcon]
]);

export const useAddTokenMetamask = (type: string) => {
  const networkConfig = useNetworkConfig();

  return useCallback(() => {
    const assets = {
      ...networkConfig.assets,
      ...networks.mainBSC.assets
    };

    const asset = assets[type];

    if (!window.ethereum?.isMetaMask || !asset) return;

    const tokenAddress = asset.address;
    const tokenSymbol = asset.symbol;
    const tokenDecimals = asset.decimals;

    return window.ethereum?.request?.({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: `${window.location.origin}${ICONS.get(type)}`
        }
      }
    });
  }, [networkConfig, type]);
};
