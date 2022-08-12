import { gql } from 'urql';

export const INVEST_CONTRACTS = gql`
  query InvestContracts {
    contracts(filter: { hidden: false }, pagination: { limit: 10 }) {
      list {
        id
        protocol {
          id
          name
          icon
        }
        name
        network
        blockchain
        metric {
          tvl
          aprDay
          aprWeek
          aprMonth
          aprYear
          aprWeekReal
          myAPYBoost
        }
        tokens {
          stake {
            alias {
              logoUrl
            }
            network
            address
            name
          }
          reward {
            alias {
              logoUrl
            }
            network
            address
            name
          }
        }
      }
      pagination {
        count
      }
    }
  }
`;
