import { useAsyncRetry } from 'react-use';

import { StakingConfig, useStakingConfig } from 'src/staking-config';
import {
  BN,
  StakingReward,
  StakingRewardHistory,
  useStakingRewardHistory
} from 'src/common';

const getRewardHistorySum = (
  [sumReward, sumEarned]: [BN, BN],
  { totalReward, totalEarned }: StakingRewardHistory
): [BN, BN] => {
  return [sumReward.plus(totalReward), sumEarned.plus(totalEarned)];
};

export const useStakingTotal = () => {
  const { stakingConfig } = useStakingConfig();
  const getStakingRewardHistory = useStakingRewardHistory();

  const stakingConfigChainGrouped = Object.values(stakingConfig).reduce(
    (res, stakingConfigItem) => ({
      ...res,
      [stakingConfigItem.chainId]: [
        ...(res[stakingConfigItem.chainId] || []),
        stakingConfigItem
      ]
    }),
    {} as { [k: number]: StakingConfig[] }
  );
  const stakingRewardHistory = useAsyncRetry(async () => {
    const historyGroups = await Promise.all(
      Object.entries(stakingConfigChainGrouped).map(
        ([chainId, stakingConfigItems]) => {
          return getStakingRewardHistory(
            {
              addresses: stakingConfigItems.map(
                ({ configAddress }) => configAddress
              )
            },
            {
              init: {
                headers: { 'chain-id': chainId }
              }
            }
          );
        }
      )
    );
    return ([] as StakingReward[]).concat(
      ...historyGroups.map(({ data }) => data.stakingList)
    );
  }, [stakingConfig]);

  let sum = { leftTokens: new BN(0), totalSupplySum: new BN(0) };
  if (stakingRewardHistory.value) {
    sum = stakingRewardHistory.value.reduce(
      (
        { leftTokens, totalSupplySum },
        { rewardForDurationFloat, earnedFloat, rewardHistory }
      ) => {
        const [totalEarnedSum, totalRewardSum] = rewardHistory.reduce(
          getRewardHistorySum,
          [new BN(0), new BN(0)]
        );

        return {
          leftTokens: leftTokens.plus(earnedFloat).plus(totalEarnedSum),
          totalSupplySum: totalSupplySum
            .plus(rewardForDurationFloat)
            .plus(totalRewardSum)
        };
      },
      sum
    );
  }
  const totalSupplySum = sum.totalSupplySum.toFormat(0);
  const leftTokens = sum.totalSupplySum.minus(sum.leftTokens).toFormat(0);
  let percent = new BN(0);
  if (sum.totalSupplySum.gt(0)) {
    percent = sum.leftTokens.div(sum.totalSupplySum).multipliedBy(100);
  }

  return {
    totalSupplySum,
    percent,
    loading: stakingRewardHistory.loading,
    leftTokens
  };
};
