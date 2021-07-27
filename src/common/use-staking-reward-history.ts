import { config } from 'src/config';
import { useLazyQuery } from './use-query';

const QUERY = `
  query($addresses:[AddressType!]!) {
    stakingList(
      filter:{address:$addresses}
    ) {
      rewardForDurationFloat
      earnedFloat
      rewardHistory {
        totalReward
        totalEarned
      }
    }
  }
`;

export type StakingRewardHistory = {
  totalReward: string;
  totalEarned: string;
};

export type StakingReward = {
  rewardForDurationFloat: string;
  earnedFloat: string;
  rewardHistory: StakingRewardHistory[];
};

export type StakingRewardPayload = {
  data: {
    stakingList: StakingReward[];
  };
};

export const useStakingRewardHistory = () =>
  useLazyQuery<StakingRewardPayload>(config.API_URL ?? '', {
    query: QUERY
  });
