import { gql } from '@apollo/client';

export const UNISWAP_PAIR_LIST = gql`
  query UniswapPairList($filter: UniswapPairListQueryFilterInputType) {
    uniswapPairList(filter: $filter) {
      address
      totalSupplyFloat
      statistic {
        dailyVolumeUSD
        totalLiquidityUSD
      }
    }
  }
`;
