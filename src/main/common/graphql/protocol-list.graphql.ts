import { gql } from 'urql';

export const PROTOCOLS = gql`
  query Protocols {
    protocols {
      list {
        id
        name
        icon
        link
      }
    }
  }
`;
