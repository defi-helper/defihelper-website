import { gql } from 'urql';

import { GOV_TOKEN_FRAGMENT } from './gov-token.fragment.graphql';

export const GOV_TOKEN = gql`
  query GovToken($filter: GovTokenFilterInputType!) {
    govToken(filter: $filter) {
      price
      totalSupply
      marketCap
      circulation {
        total
        market {
          ...govTokenFragment
        }
        rewards {
          ...govTokenFragment
        }
        developers {
          ...govTokenFragment
        }
        community {
          ...govTokenFragment
        }
        earlyEcosistem {
          ...govTokenFragment
        }
      }
    }
  }
  ${GOV_TOKEN_FRAGMENT}
`;
