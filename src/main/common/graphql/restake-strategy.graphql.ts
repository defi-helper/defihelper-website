import { gql } from 'urql';

export const RESTAKE_STRATEGY = gql`
  query RestakeStrategy($balance: Float!, $apy: Float!) {
    restakeStrategy(balance: $balance, apy: $apy) {
      hold {
        v
        t
      }
      everyDay {
        v
        t
      }
      optimal {
        v
        t
      }
    }
  }
`;
