import { gql } from '@apollo/client';

export const TOKEN_FILTER = gql`
  query TokenListFilter($filter: TokenListQueryFilterInputType) {
    tokenList(filter: $filter) {
      address
      name
      symbol
      decimals
      totalSupply
      totalSupplyFloat
      priceUSD
      statistic {
        dailyVolumeUSD
        totalLiquidityUSD
      }
    }
  }
`;
