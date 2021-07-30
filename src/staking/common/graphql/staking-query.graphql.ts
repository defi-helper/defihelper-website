import { gql } from '@apollo/client';

export const STAKING_QUERY = gql`
  query Staking(
    $filter: StakingQueryFilterInputType!
    $userFilter: StakingUserListFilterInputType
  ) {
    staking(filter: $filter) {
      data {
        address
        totalSupply
        totalSupplyFloat
        stakingTokenDecimals
        stakingToken
        stakingTokenUniswap {
          address
          totalSupplyFloat
          statistic {
            dailyVolumeUSD
            totalLiquidityUSD
          }
        }
        poolRate {
          block
          blockFloat
          daily
          dailyFloat
        }
        stakingEnd {
          block
          date
        }
        unstakingStart {
          block
          date
        }
        apr {
          block
          day
          week
          month
          year
        }
        userList(filter: $userFilter) {
          staking
          address
          balance
          balanceFloat
          staked
          earned
          earnedFloat
        }
      }
    }
  }
`;

export const STAKING_QUERY_STRING = STAKING_QUERY.loc?.source.body || '';
