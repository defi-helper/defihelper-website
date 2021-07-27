import { gql } from '@apollo/client';

export const UNISWAP_PAIR_QUERY_STRING = `
  query UniswapPair($filter: UniswapPairQueryFilterInputType!) {
    uniswapPair(filter: $filter) {
      data {
        address
        totalSupplyFloat
        statistic {
          dailyVolumeUSD
          totalLiquidityUSD
        }
      }
    }
  }
`;

export const UNISWAP_PAIR_QUERY = gql`
  query UniswapPair($filter: UniswapPairQueryFilterInputType!) {
    uniswapPair(filter: $filter) {
      data {
        address
        totalSupplyFloat
        statistic {
          dailyVolumeUSD
          totalLiquidityUSD
        }
      }
    }
  }
`;
