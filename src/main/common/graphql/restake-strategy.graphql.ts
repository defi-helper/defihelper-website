import { gql } from 'urql';

export const RESTAKE_STRATEGY = gql`
  query RestakeStrategy(
    $balance: Float!
    $apy: Float!
    $blockchain: BlockchainEnum = ethereum
    $network: String = "43114"
  ) {
    restakeStrategy(
      balance: $balance
      apy: $apy
      blockchain: $blockchain
      network: $network
    ) {
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
