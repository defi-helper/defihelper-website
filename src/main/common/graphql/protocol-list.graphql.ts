import { gql } from 'urql';

export const PROTOCOLS = gql`
  query Protocols {
    protocols(filter: { hidden: false }, pagination: { limit: 30 }) {
      list {
        id
        name
        icon
        link
      }
    }
  }
`;
