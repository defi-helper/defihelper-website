import { gql } from 'urql';

export const TREASURY = gql`
  query Treasury {
    treasury {
      portfoliosCount
      protocolsCount
      trackedUSD
    }
  }
`;
