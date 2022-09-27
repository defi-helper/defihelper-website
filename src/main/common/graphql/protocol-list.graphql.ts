import { gql } from 'urql';

export const PROTOCOLS = gql`
  query Protocols {
    protocols(
      filter: { hidden: false }
      sort: { column: tvl, order: desc }
      pagination: { limit: 5000 }
    ) {
      list {
        id
        name
        icon
        link
        adapter
      }
    }
  }
`;
