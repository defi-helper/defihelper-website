import { gql } from '@apollo/client';

export const WALLET = gql`
  query Wallet($filter: WalletQueryFilterInputType!) {
    wallet(filter: $filter) {
      data {
        address
        balance
        balanceFloat
      }
    }
  }
`;
