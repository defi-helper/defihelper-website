import IERC20Abi from '@bondappetit/networks/abi/IERC20.json';
import GovernanceTokenAbi from '@bondappetit/networks/abi/GovernanceToken.json';
import type { AbiItem } from 'web3-utils';
import Web3 from 'web3';
import networks from '@bondappetit/networks';
import { useMemo } from 'react';

import type { Investment } from 'src/generate/Investment';
import type { Market } from 'src/generate/Market';
import type { IERC20 } from 'src/generate/IERC20';
import type { GovernorAlpha } from 'src/generate/GovernorAlpha';
import type { GovernanceToken } from 'src/generate/GovernanceToken';
import type { IUniswapV2Router02 } from 'src/generate/IUniswapV2Router02';
import type { Issuer } from 'src/generate/Issuer';
import type { Vesting } from 'src/generate/Vesting';
import type { Treasury } from 'src/generate/Treasury';
import type { ProfitSplitter } from 'src/generate/ProfitSplitter';
import type { Budget } from 'src/generate/Budget';
import type { Buyback } from 'src/generate/Buyback';
import type { UniswapMarketMaker } from 'src/generate/UniswapMarketMaker';
import type { CollateralMarket } from 'src/generate/CollateralMarket';
import type { VestingSplitter } from 'src/generate/VestingSplitter';
import type { RealAssetDepositaryBalanceView } from 'src/generate/RealAssetDepositaryBalanceView';
import type { BuybackDepositaryBalanceView } from 'src/generate/BuybackDepositaryBalanceView';
import abi from 'src/bridge/common/abi/bbag-abi.json';
import { createUseContract } from './create-use-contract';

export const useInvestmentContract = createUseContract<Investment>(
  (network) => ({
    abi: network.contracts.Investment.abi,
    address: network.contracts.Investment.address
  })
);

export const useMarketContract = createUseContract<Market>((network) => ({
  abi: network.contracts.Market.abi,
  address: network.contracts.Market.address
}));

export const useUSDTContract = createUseContract<IERC20>((network) => ({
  abi: IERC20Abi.abi as AbiItem[],
  address: network.assets.USDT.address
}));

export const useDAIContract = createUseContract<IERC20>((network) => ({
  abi: IERC20Abi.abi as AbiItem[],
  address: network.assets.DAI.address
}));

export const useUSDCContract = createUseContract<IERC20>((network) => ({
  abi: IERC20Abi.abi as AbiItem[],
  address: network.assets.USDC.address
}));

export const useGovernanceTokenContract = createUseContract<IERC20>(
  (network) => ({
    abi: IERC20Abi.abi as AbiItem[],
    address: network.assets.Governance.address
  })
);

export const useStableCoinContract = createUseContract<IERC20>((network) => ({
  abi: IERC20Abi.abi as AbiItem[],
  address: network.assets.Stable.address
}));

export const useGovernorContract = createUseContract<GovernorAlpha>(
  (network) => ({
    abi: network.contracts.GovernorAlpha.abi,
    address: network.contracts.GovernorAlpha.address
  })
);

export const useGovernanceContract = createUseContract<GovernanceToken>(
  (network) => ({
    abi: GovernanceTokenAbi.abi as AbiItem[],
    address: network.assets.Governance.address
  })
);

export const useUniswapRouter = createUseContract<IUniswapV2Router02>(
  (network) => ({
    abi: network.contracts.UniswapV2Router02.abi,
    address: network.contracts.UniswapV2Router02.address
  })
);

export const useIssuerContract = createUseContract<Issuer>((network) => ({
  abi: network.contracts.Issuer.abi,
  address: network.contracts.Issuer.address
}));

export const useVestingContract = createUseContract<Vesting>((network) => ({
  abi: network.contracts.Vesting.abi,
  address: network.contracts.Vesting.address
}));

export const useTreasuryContract = createUseContract<Treasury>((network) => ({
  abi: network.contracts.Treasury.abi,
  address: network.contracts.Treasury.address
}));

export const useProfitSplitterContract = createUseContract<ProfitSplitter>(
  (network) => ({
    abi: network.contracts.ProfitSplitter.abi,
    address: network.contracts.ProfitSplitter.address
  })
);

export const useBuybackContract = createUseContract<Buyback>((network) => ({
  abi: network.contracts.Buyback.abi,
  address: network.contracts.Buyback.address
}));

export const useBudgetContract = createUseContract<Budget>((network) => ({
  abi: network.contracts.Budget.abi,
  address: network.contracts.Budget.address
}));

export const useUniswapMarketMakerContract =
  createUseContract<UniswapMarketMaker>((network) => ({
    abi: network.contracts.UniswapMarketMaker.abi,
    address: network.contracts.UniswapMarketMaker.address
  }));

export const useCollateralMarketContract = createUseContract<CollateralMarket>(
  (network) => ({
    abi: network.contracts.CollateralMarket.abi,
    address: network.contracts.CollateralMarket.address
  })
);

export const useVestingSplitterContract = createUseContract<VestingSplitter>(
  (network) => ({
    abi: network.contracts.VestingSplitter.abi,
    address: network.contracts.VestingSplitter.address
  })
);

export const useRealAssetDepositaryBalanceView =
  createUseContract<RealAssetDepositaryBalanceView>((network) => ({
    abi: network.contracts.RealAssetDepositaryBalanceView.abi,
    address: network.contracts.RealAssetDepositaryBalanceView.address
  }));

export const useBuybackDepositaryBalanceView =
  createUseContract<BuybackDepositaryBalanceView>((network) => ({
    abi: network.contracts.BuybackDepositaryBalanceView.abi,
    address: network.contracts.BuybackDepositaryBalanceView.address
  }));

const web3 = new Web3(networks.mainBSC.networkUrl);

export const useBBagContract2 = () => {
  return useMemo(
    () =>
      new web3.eth.Contract(
        abi as AbiItem[],
        networks.mainBSC.assets.bBAG.address
      ) as unknown as IERC20,
    []
  );
};
