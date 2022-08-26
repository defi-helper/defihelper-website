import { gql } from 'urql';

export const INVEST_CONTRACTS = gql`
  query InvestContracts(
    $filter: ContractListFilterInputType = {}
    $sort: [ContractListSortInputType!] = [{ column: name, order: asc }]
  ) {
    contracts(filter: $filter, pagination: { limit: 10 }, sort: $sort) {
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
          myStaked
          risk
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
