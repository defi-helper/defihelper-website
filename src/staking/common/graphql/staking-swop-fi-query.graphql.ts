import { gql } from '@apollo/client';

export const STAKING_SWOPFI_PAIR_QUERY = gql`
  query swopfiPair($filter: SwopfiPairQueryFilterInputType!) {
    swopfiPair(filter: $filter) {
      data {
        address
        token0Address
        token1Address
        token0Reserve
        token0ReserveFloat
        token1Reserve
        token1ReserveFloat
        incomeUSD
        totalLiquidityUSD
        dailyTxCount
        dailyFeesUSD
        dailyVolumeUSD
        apr {
          year
        }
      }
    }
  }
`;
