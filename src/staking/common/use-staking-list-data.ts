import { useWeb3React } from '@web3-react/core';
import { useEffect, useMemo, useState } from 'react';
import { useAsyncRetry } from 'react-use';
import Web3 from 'web3';

import {
  BN,
  useIntervalIfHasAccount,
  useLazyQuery,
  useNetworkConfig
} from 'src/common';
import { config } from 'src/config';
import {
  StakingListQuery,
  StakingQuery,
  useSwopfiPairQuery,
  useTokenPriceQuery
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from 'src/graphql/_generated-hooks';
import {
  StakingConfig,
  StakingStatuses,
  useStakingConfig
} from 'src/staking-config';
import { useGovernanceCost } from './use-governance-cost';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { STAKING_LIST_QUERY_STRING } from './graphql/staking-list-query.graphql';

type StakingToken = {
  token: string[];
  contractName: string;
  configAddress: string;
  pair?: StakingListQuery['stakingList'][number]['stakingTokenUniswap'];
  staking?: StakingQuery['staking']['data'];
  chainId?: number;
  sort: number;
  status: StakingStatuses;
};

export type SakingItem = {
  id: number;
  amount: BN;
  address: string | undefined;
  apy: string;
  lockable: boolean;
  poolRate: string | undefined;
  totalValueLocked: string;
  stacked: boolean;
  token: string[];
  decimals: number;
  contractName: string;
  configAddress: string;
  unstakingStartDate?: string | null;
  chainId?: number;
  tokenAddress?: string;
  totalSupplyFloat: string;
  amountInUSDC: BN;
  earnToken: string;
  stakingEndBlock?: string | null;
  stakingEndDate?: string | null;
  status: StakingStatuses;
};

const useStakingListQuery = () =>
  useLazyQuery<{ data?: StakingListQuery }>(config.API_URL ?? '', {
    query: STAKING_LIST_QUERY_STRING
  });

const SWOP_FI_ADDRESS = '3PAgYAV4jYJ7BF8LCVNU9tyWCBtQaqeLQH4';

export const useStakingListData = (address?: string) => {
  const { stakingConfig, stakingConfigValues } = useStakingConfig();

  const swopfiQuery = useSwopfiPairQuery({
    variables: {
      filter: {
        address: SWOP_FI_ADDRESS
      }
    },

    pollInterval: config.POLLING_INTERVAL
  });

  const { account: web3Account = null, chainId: web3chainId } =
    useWeb3React<Web3>();
  const [account, setAccount] = useState(web3Account);

  const governanceInUSDC = useGovernanceCost();

  const stakingListQuery = useStakingListQuery();

  const networkConfig = useNetworkConfig();

  useEffect(() => {
    if (web3Account) {
      setAccount(web3Account);
    }
  }, [web3Account]);

  const stakingAddresses = useAsyncRetry(async () => {
    const stakingItem = address ? stakingConfig[address.toLowerCase()] : null;

    const groupedStakingConfig = (
      stakingItem ? [stakingItem] : stakingConfigValues
    ).reduce(
      (res, stakingConfigItem, i) => ({
        ...res,
        [stakingConfigItem.chainId]: [
          ...(res[stakingConfigItem.chainId] || []),
          { ...stakingConfigItem, sort: i }
        ]
      }),
      {} as { [k: number]: (StakingConfig & { sort: number })[] }
    );

    const stakingTokenList = await Promise.all(
      Object.entries(groupedStakingConfig).map(
        async ([chainId, stakingConfigAddresses]) => {
          const stakingList = await stakingListQuery(
            {
              filter: {
                address: stakingConfigAddresses.map(
                  ({ configAddress }) => configAddress
                )
              },
              userFilter: account ? { address: [account] } : undefined
            },
            {
              init: {
                headers: {
                  'chain-id': chainId
                }
              }
            }
          );
          if (!stakingList.data) return [];

          return stakingList.data?.stakingList.reduce(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (res, staking): StakingToken[] => {
              const stakingConfigItem = stakingConfigAddresses.find(
                ({ configAddress }) => configAddress === staking.address
              );
              if (!stakingConfigItem) return res;

              const { contractName, configAddress, token, sort, status } =
                stakingConfigItem;

              return [
                ...res,
                {
                  staking,
                  pair: staking.stakingTokenUniswap,
                  contractName,
                  configAddress,
                  token,
                  chainId: stakingConfigItem.chainId,
                  sort,
                  status
                }
              ];
            },
            [] as StakingToken[]
          );
        }
      )
    );

    return ([] as StakingToken[])
      .concat(...stakingTokenList)
      .sort((a, b) => a.sort - b.sort);
  }, [address, stakingConfigValues, account, web3chainId]);

  const govToken = useTokenPriceQuery({
    variables: {
      filter: { address: networkConfig.assets.Governance.address }
    }
  });

  const stakingList = useMemo(
    () =>
      stakingAddresses.value?.map<SakingItem>(
        (stakingAddress, index): SakingItem => {
          const stakingBalance = stakingAddress.staking;
          const pairItem = stakingAddress.pair;

          const priceItemtotalSupplyFloatBN = new BN(
            pairItem?.totalSupplyFloat ?? '1'
          );
          const priceItemtotalSupply = priceItemtotalSupplyFloatBN.isZero()
            ? new BN(1)
            : priceItemtotalSupplyFloatBN;

          const stakingBalanceTotalSupplyBN = new BN(
            stakingBalance?.totalSupplyFloat ?? '1'
          );
          const stakingBalanceTotalSupply = stakingBalanceTotalSupplyBN.isZero()
            ? new BN(1)
            : stakingBalanceTotalSupplyBN;

          const priceUSD = new BN(
            pairItem?.statistic?.totalLiquidityUSD ?? '0'
          ).div(priceItemtotalSupply);

          const [reward = undefined] = stakingBalance?.userList ?? [];

          const balanceFloat = new BN(reward?.balanceFloat ?? '0');

          return {
            id: index,
            configAddress: stakingAddress.configAddress,
            amount: balanceFloat,
            address: stakingBalance?.address,
            tokenAddress: stakingBalance?.stakingToken,
            apy: new BN(stakingBalance?.apr.year ?? '0')
              .multipliedBy(100)
              .toString(10),
            lockable: Boolean(stakingBalance?.stakingEnd.block),
            stakingEndBlock: stakingBalance?.stakingEnd.block,
            stakingEndDate: stakingBalance?.stakingEnd.date,
            poolRate: stakingBalance?.poolRate.dailyFloat,
            totalValueLocked: new BN(
              pairItem?.statistic?.totalLiquidityUSD ?? '0'
            )
              .div(priceItemtotalSupply)
              .multipliedBy(stakingBalanceTotalSupply)
              .toString(10),
            totalSupplyFloat: stakingAddress.staking?.totalSupplyFloat ?? '0',
            decimals: stakingBalance?.stakingTokenDecimals ?? 1,
            stacked: Boolean(reward?.staked),
            token: stakingAddress.token,
            contractName: stakingAddress.contractName,
            amountInUSDC: new BN(balanceFloat).multipliedBy(priceUSD),
            unstakingStartDate: stakingBalance?.unstakingStart.date,
            chainId: stakingAddress.chainId,
            earnToken: config.CHAIN_BINANCE_IDS.includes(
              Number(stakingAddress.chainId)
            )
              ? 'bBAG'
              : 'BAG',
            status: stakingAddress.status
          };
        }
      ),
    [stakingAddresses.value]
  );

  const totalValueLocked = useMemo(() => {
    if (!stakingList || !swopfiQuery.data) return new BN(0);

    return stakingList.reduce(
      (acc, stakingItem) => acc.plus(stakingItem.totalValueLocked),
      new BN(0)
    );
  }, [stakingList, swopfiQuery.data]);

  const rewardSum = useMemo(
    () =>
      stakingAddresses.value?.reduce(
        (sum, { staking }) => {
          const [reward = undefined] = staking?.userList ?? [];

          return {
            reward: sum.reward.plus(reward?.earnedFloat ?? '0'),
            rewardInUSDC: sum.rewardInUSDC.plus(
              new BN(reward?.earnedFloat ?? '0').multipliedBy(
                governanceInUSDC ?? '0'
              )
            )
          };
        },
        {
          reward: new BN('0'),
          rewardInUSDC: new BN('0')
        }
      ),
    [stakingAddresses.value, governanceInUSDC]
  );

  useIntervalIfHasAccount(stakingAddresses.retry);

  return {
    totalValueLocked,
    volume24: govToken.data?.token.data?.statistic?.dailyVolumeUSD,
    swopfiItem: swopfiQuery.data?.swopfiPair.data,
    swopfiLoading: swopfiQuery.loading,
    governanceInUSDC,
    stakingList,
    rewardSum,
    stakingAddresses
  };
};
