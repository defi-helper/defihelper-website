import { gql } from '@apollo/client';

export const TOKEN_PRICE = gql`
  query TokenPrice($filter: TokenQueryFilterInputType!) {
    token(filter: $filter) {
      data {
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
  }
`;
