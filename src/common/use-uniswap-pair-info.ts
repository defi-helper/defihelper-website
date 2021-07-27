import { useLazyQuery } from './use-query';

const url = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';

const QUERY = `
  query Pair($id: ID!) {
    pair(
      id: $id
    ) {
      reserveUSD
      totalSupply
    }
  }
`;

type Maybe<T> = T | null;

type PairData = {
  reserveUSD: Maybe<string>;
  totalSupply: Maybe<string>;
};

export type PairInfo = {
  data: {
    pair: Maybe<PairData>;
  };
};

export const useUniswapPairInfo = () =>
  useLazyQuery<PairInfo>(url, {
    query: QUERY
  });
