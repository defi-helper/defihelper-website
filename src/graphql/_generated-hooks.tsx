/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Ethereum wallet address */
  AddressType: string;
  /** Дата и время */
  DateTimeType: string;
  /** Ethereum transaction hash */
  TxHashType: any;
};

export type BurgerSwapBridgeTransitInput = {
  /** Transaction hash */
  tx: Scalars['TxHashType'];
  /** Wallet address of transaction owner */
  owner: Scalars['AddressType'];
  /** Transit type */
  type: BurgerSwapBridgeTransitTypeEnum;
};

export type BurgerSwapBridgeTransitType = {
  __typename?: 'BurgerSwapBridgeTransitType';
  /** Transaction hash */
  tx: Scalars['TxHashType'];
  /** Transit type */
  type: BurgerSwapBridgeTransitTypeEnum;
  /** Wallet address of transaction owner */
  owner: Scalars['AddressType'];
  /** Created at date */
  createdAt: Scalars['DateTimeType'];
};

export enum BurgerSwapBridgeTransitTypeEnum {
  /** Withdraw BEP20 on Binance */
  BscWithdraw = 'bscWithdraw',
  /** Withdraw ERC20 on Ethereum */
  EthTransit = 'ethTransit'
}

export type MediumPostType = {
  __typename?: 'MediumPostType';
  /** Global unique id */
  guid: Scalars['String'];
  /** Title */
  title: Scalars['String'];
  /** Publication date */
  pubDate: Scalars['DateTimeType'];
  /** Link */
  link: Scalars['String'];
  /** Author */
  author: Scalars['String'];
  /** Thumbnail */
  thumbnail: Scalars['String'];
  /** Description */
  description: Scalars['String'];
  /** Content */
  content: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBurgerSwapBridgeTransit: BurgerSwapBridgeTransitType;
};

export type MutationAddBurgerSwapBridgeTransitArgs = {
  input: BurgerSwapBridgeTransitInput;
};

export type Query = {
  __typename?: 'Query';
  getTVL: Scalars['String'];
  token: TokenPayload;
  tokenList: Array<TokenType>;
  uniswapPair: UniswapPairPayload;
  uniswapPairList: Array<UniswapPairType>;
  staking: StakingPayload;
  stakingList: Array<StakingType>;
  mediumPostList: Array<MediumPostType>;
  wallet: WalletPayload;
  walletList: Array<WalletType>;
  swopfiPair: SwopfiPairPayload;
  swopfiPairList: Array<SwopfiPairType>;
};

export type QueryTokenArgs = {
  filter: TokenQueryFilterInputType;
};

export type QueryTokenListArgs = {
  filter?: Maybe<TokenListQueryFilterInputType>;
};

export type QueryUniswapPairArgs = {
  filter: UniswapPairQueryFilterInputType;
};

export type QueryUniswapPairListArgs = {
  filter?: Maybe<UniswapPairListQueryFilterInputType>;
};

export type QueryStakingArgs = {
  filter: StakingQueryFilterInputType;
};

export type QueryStakingListArgs = {
  filter?: Maybe<StakingListQueryFilterInputType>;
};

export type QueryWalletArgs = {
  filter: WalletQueryFilterInputType;
};

export type QueryWalletListArgs = {
  filter?: Maybe<WalletListQueryFilterInputType>;
};

export type QuerySwopfiPairArgs = {
  filter: SwopfiPairQueryFilterInputType;
};

export type QuerySwopfiPairListArgs = {
  filter?: Maybe<SwopfiPairListQueryFilterInputType>;
};

export type StakingAprType = {
  __typename?: 'StakingAprType';
  /** APR per block */
  block: Scalars['String'];
  /** APR per day */
  day: Scalars['String'];
  /** APR per week */
  week: Scalars['String'];
  /** APR per month */
  month: Scalars['String'];
  /** APR per year */
  year: Scalars['String'];
};

export type StakingListQueryFilterInputType = {
  /** List of target staking contract addresses */
  address?: Maybe<Array<Scalars['AddressType']>>;
};

export type StakingPayload = {
  __typename?: 'StakingPayload';
  data?: Maybe<StakingType>;
  error?: Maybe<Scalars['String']>;
};

export type StakingPoolRateType = {
  __typename?: 'StakingPoolRateType';
  /** Pool rate per block */
  block: Scalars['String'];
  /** Pool rate per block normalize */
  blockFloat: Scalars['String'];
  /** Pool rate per day */
  daily: Scalars['String'];
  /** Pool rate per day normalize */
  dailyFloat: Scalars['String'];
};

export type StakingQueryFilterInputType = {
  /** Target staking contract address */
  address: Scalars['AddressType'];
};

export type StakingRewardHistoryType = {
  __typename?: 'StakingRewardHistoryType';
  /** History block number */
  blockNumber: Scalars['String'];
  /** Distributable reward */
  totalReward: Scalars['String'];
  /** Distributed reward */
  totalEarned: Scalars['String'];
};

export type StakingStakingEndType = {
  __typename?: 'StakingStakingEndType';
  /** Block number of end staking */
  block?: Maybe<Scalars['String']>;
  /** Date of end staking */
  date?: Maybe<Scalars['DateTimeType']>;
};

export type StakingType = {
  __typename?: 'StakingType';
  /** Staking contract address */
  address: Scalars['AddressType'];
  /** Staking token address */
  stakingToken: Scalars['AddressType'];
  /** Staking token decimals */
  stakingTokenDecimals: Scalars['Int'];
  /** Plain staking token */
  stakingTokenPlain?: Maybe<TokenType>;
  /** Uniswap LP staking token */
  stakingTokenUniswap?: Maybe<UniswapPairType>;
  /** Reward token address */
  rewardToken: Scalars['AddressType'];
  /** Reward token decimals */
  rewardTokenDecimals: Scalars['Int'];
  /** Staking total supply */
  totalSupply: Scalars['String'];
  /** Staking total supply normalize */
  totalSupplyFloat: Scalars['String'];
  /** Block number of staking period start */
  periodStart: Scalars['String'];
  /** Block number of staking period finish */
  periodFinish: Scalars['String'];
  /** Rewards duration */
  rewardsDuration: Scalars['String'];
  /** Reward for duration */
  rewardForDuration: Scalars['String'];
  /** Reward for duration normalize */
  rewardForDurationFloat: Scalars['String'];
  /** Already earned */
  earned: Scalars['String'];
  /** Already earned normalize */
  earnedFloat: Scalars['String'];
  poolRate: StakingPoolRateType;
  stakingEnd: StakingStakingEndType;
  unstakingStart: StakingUnstakingStartType;
  apr: StakingAprType;
  userList: Array<StakingUserType>;
  rewardHistory: Array<StakingRewardHistoryType>;
};

export type StakingTypeUserListArgs = {
  filter?: Maybe<StakingUserListFilterInputType>;
};

export type StakingUnstakingStartType = {
  __typename?: 'StakingUnstakingStartType';
  /** Block number of start unstaking */
  block?: Maybe<Scalars['String']>;
  /** Date of start unstaking */
  date?: Maybe<Scalars['DateTimeType']>;
};

export type StakingUserListFilterInputType = {
  /** List of target wallets */
  address?: Maybe<Array<Scalars['AddressType']>>;
};

export type StakingUserType = {
  __typename?: 'StakingUserType';
  /** Staking contract address */
  staking: Scalars['AddressType'];
  /** User wallet address */
  address: Scalars['AddressType'];
  /** Staking balance */
  balance: Scalars['String'];
  /** Staking balance normalize */
  balanceFloat: Scalars['String'];
  /** Is staked */
  staked: Scalars['Boolean'];
  /** Earned balance */
  earned: Scalars['String'];
  /** Earned balance normalize */
  earnedFloat: Scalars['String'];
};

export type SwopfiLpAprType = {
  __typename?: 'SwopfiLPAprType';
  /** APR per year */
  year: Scalars['String'];
};

export type SwopfiPairListQueryFilterInputType = {
  /** List of target pair addresses */
  address?: Maybe<Array<Scalars['String']>>;
};

export type SwopfiPairPayload = {
  __typename?: 'SwopfiPairPayload';
  data?: Maybe<SwopfiPairType>;
  error?: Maybe<Scalars['String']>;
};

export type SwopfiPairQueryFilterInputType = {
  /** Target pair address */
  address: Scalars['String'];
};

export type SwopfiPairType = {
  __typename?: 'SwopfiPairType';
  /** Pair address */
  address: Scalars['String'];
  /** Token 0 */
  token0Address: Scalars['String'];
  /** Token 0 */
  token1Address: Scalars['String'];
  /** Token 0 reserve */
  token0Reserve: Scalars['String'];
  /** Token 0 reserve normalize */
  token0ReserveFloat: Scalars['String'];
  /** Token 1 reserve */
  token1Reserve: Scalars['String'];
  /** Token 1 reserve normalize */
  token1ReserveFloat: Scalars['String'];
  /** Daily income */
  incomeUSD: Scalars['String'];
  /** Total liquidity */
  totalLiquidityUSD: Scalars['String'];
  /** Daily fees */
  dailyFeesUSD: Scalars['String'];
  /** Daily volume */
  dailyVolumeUSD: Scalars['String'];
  /** Daily transactions count */
  dailyTxCount: Scalars['String'];
  apr: SwopfiLpAprType;
};

export type TokenListQueryFilterInputType = {
  /** List of target token addresses */
  address?: Maybe<Array<Scalars['AddressType']>>;
};

export type TokenPayload = {
  __typename?: 'TokenPayload';
  data?: Maybe<TokenType>;
  error?: Maybe<Scalars['String']>;
};

export type TokenQueryFilterInputType = {
  /** Target token address */
  address: Scalars['AddressType'];
};

export type TokenStatisticType = {
  __typename?: 'TokenStatisticType';
  /** Token daily volume at USD */
  dailyVolumeUSD: Scalars['String'];
  /** Token total liquidity at USD */
  totalLiquidityUSD: Scalars['String'];
};

export type TokenType = {
  __typename?: 'TokenType';
  /** Token address */
  address: Scalars['AddressType'];
  /** Token name */
  name: Scalars['String'];
  /** Token symbol */
  symbol: Scalars['String'];
  /** Token decimals */
  decimals: Scalars['Int'];
  /** Token total supply */
  totalSupply: Scalars['String'];
  /** Token total supply normalize */
  totalSupplyFloat: Scalars['String'];
  /** Token price at USD */
  priceUSD: Scalars['String'];
  statistic?: Maybe<TokenStatisticType>;
};

export type UniswapPairListQueryFilterInputType = {
  /** List of target pair addresses */
  address?: Maybe<Array<Scalars['AddressType']>>;
};

export type UniswapPairPayload = {
  __typename?: 'UniswapPairPayload';
  data?: Maybe<UniswapPairType>;
  error?: Maybe<Scalars['String']>;
};

export type UniswapPairQueryFilterInputType = {
  /** Target pair address */
  address: Scalars['AddressType'];
};

export type UniswapPairStatisticType = {
  __typename?: 'UniswapPairStatisticType';
  /** Pair daily volume at USD */
  dailyVolumeUSD: Scalars['String'];
  /** Pair total liquidity at USD */
  totalLiquidityUSD: Scalars['String'];
};

export type UniswapPairType = {
  __typename?: 'UniswapPairType';
  /** Pair address */
  address: Scalars['AddressType'];
  /** Token 0 */
  token0Address: Scalars['AddressType'];
  /** Token 1 */
  token1Address: Scalars['AddressType'];
  /** Token 0 reserve */
  token0Reserve: Scalars['String'];
  /** Token 0 reserve normalize */
  token0ReserveFloat: Scalars['String'];
  /** Token 1 reserve */
  token1Reserve: Scalars['String'];
  /** Token 1 reserve normalize */
  token1ReserveFloat: Scalars['String'];
  /** Pair total supply normalize */
  totalSupplyFloat: Scalars['String'];
  statistic?: Maybe<UniswapPairStatisticType>;
};

export type WalletListQueryFilterInputType = {
  /** List of target wallet addresses */
  address?: Maybe<Array<Scalars['AddressType']>>;
};

export type WalletPayload = {
  __typename?: 'WalletPayload';
  data?: Maybe<WalletType>;
  error?: Maybe<Scalars['String']>;
};

export type WalletQueryFilterInputType = {
  /** Target wallet address */
  address: Scalars['AddressType'];
};

export type WalletType = {
  __typename?: 'WalletType';
  /** Wallet address */
  address: Scalars['AddressType'];
  /** ETH balance */
  balance: Scalars['String'];
  /** ETH balance normalize */
  balanceFloat: Scalars['String'];
};

export type AddBurgerSwapBridgeTransitMutationVariables = Exact<{
  input: BurgerSwapBridgeTransitInput;
}>;

export type AddBurgerSwapBridgeTransitMutation = { __typename?: 'Mutation' } & {
  addBurgerSwapBridgeTransit: {
    __typename?: 'BurgerSwapBridgeTransitType';
  } & Pick<BurgerSwapBridgeTransitType, 'tx' | 'type' | 'owner' | 'createdAt'>;
};

export type WalletQueryVariables = Exact<{
  filter: WalletQueryFilterInputType;
}>;

export type WalletQuery = { __typename?: 'Query' } & {
  wallet: { __typename?: 'WalletPayload' } & {
    data?: Maybe<
      { __typename?: 'WalletType' } & Pick<
        WalletType,
        'address' | 'balance' | 'balanceFloat'
      >
    >;
  };
};

export type StakingListQueryVariables = Exact<{
  filter?: Maybe<StakingListQueryFilterInputType>;
  userFilter?: Maybe<StakingUserListFilterInputType>;
}>;

export type StakingListQuery = { __typename?: 'Query' } & {
  stakingList: Array<
    { __typename?: 'StakingType' } & Pick<
      StakingType,
      | 'address'
      | 'totalSupply'
      | 'totalSupplyFloat'
      | 'stakingTokenDecimals'
      | 'stakingToken'
    > & {
        stakingTokenUniswap?: Maybe<
          { __typename?: 'UniswapPairType' } & Pick<
            UniswapPairType,
            'address' | 'totalSupplyFloat'
          > & {
              statistic?: Maybe<
                { __typename?: 'UniswapPairStatisticType' } & Pick<
                  UniswapPairStatisticType,
                  'dailyVolumeUSD' | 'totalLiquidityUSD'
                >
              >;
            }
        >;
        poolRate: { __typename?: 'StakingPoolRateType' } & Pick<
          StakingPoolRateType,
          'block' | 'blockFloat' | 'daily' | 'dailyFloat'
        >;
        stakingEnd: { __typename?: 'StakingStakingEndType' } & Pick<
          StakingStakingEndType,
          'block' | 'date'
        >;
        unstakingStart: { __typename?: 'StakingUnstakingStartType' } & Pick<
          StakingUnstakingStartType,
          'block' | 'date'
        >;
        apr: { __typename?: 'StakingAprType' } & Pick<
          StakingAprType,
          'block' | 'day' | 'week' | 'month' | 'year'
        >;
        userList: Array<
          { __typename?: 'StakingUserType' } & Pick<
            StakingUserType,
            | 'staking'
            | 'address'
            | 'balance'
            | 'balanceFloat'
            | 'staked'
            | 'earned'
            | 'earnedFloat'
          >
        >;
      }
  >;
};

export type StakingQueryVariables = Exact<{
  filter: StakingQueryFilterInputType;
  userFilter?: Maybe<StakingUserListFilterInputType>;
}>;

export type StakingQuery = { __typename?: 'Query' } & {
  staking: { __typename?: 'StakingPayload' } & {
    data?: Maybe<
      { __typename?: 'StakingType' } & Pick<
        StakingType,
        | 'address'
        | 'totalSupply'
        | 'totalSupplyFloat'
        | 'stakingTokenDecimals'
        | 'stakingToken'
      > & {
          stakingTokenUniswap?: Maybe<
            { __typename?: 'UniswapPairType' } & Pick<
              UniswapPairType,
              'address' | 'totalSupplyFloat'
            > & {
                statistic?: Maybe<
                  { __typename?: 'UniswapPairStatisticType' } & Pick<
                    UniswapPairStatisticType,
                    'dailyVolumeUSD' | 'totalLiquidityUSD'
                  >
                >;
              }
          >;
          poolRate: { __typename?: 'StakingPoolRateType' } & Pick<
            StakingPoolRateType,
            'block' | 'blockFloat' | 'daily' | 'dailyFloat'
          >;
          stakingEnd: { __typename?: 'StakingStakingEndType' } & Pick<
            StakingStakingEndType,
            'block' | 'date'
          >;
          unstakingStart: { __typename?: 'StakingUnstakingStartType' } & Pick<
            StakingUnstakingStartType,
            'block' | 'date'
          >;
          apr: { __typename?: 'StakingAprType' } & Pick<
            StakingAprType,
            'block' | 'day' | 'week' | 'month' | 'year'
          >;
          userList: Array<
            { __typename?: 'StakingUserType' } & Pick<
              StakingUserType,
              | 'staking'
              | 'address'
              | 'balance'
              | 'balanceFloat'
              | 'staked'
              | 'earned'
              | 'earnedFloat'
            >
          >;
        }
    >;
  };
};

export type SwopfiPairQueryVariables = Exact<{
  filter: SwopfiPairQueryFilterInputType;
}>;

export type SwopfiPairQuery = { __typename?: 'Query' } & {
  swopfiPair: { __typename?: 'SwopfiPairPayload' } & {
    data?: Maybe<
      { __typename?: 'SwopfiPairType' } & Pick<
        SwopfiPairType,
        | 'address'
        | 'token0Address'
        | 'token1Address'
        | 'token0Reserve'
        | 'token0ReserveFloat'
        | 'token1Reserve'
        | 'token1ReserveFloat'
        | 'incomeUSD'
        | 'totalLiquidityUSD'
        | 'dailyTxCount'
        | 'dailyFeesUSD'
        | 'dailyVolumeUSD'
      > & {
          apr: { __typename?: 'SwopfiLPAprType' } & Pick<
            SwopfiLpAprType,
            'year'
          >;
        }
    >;
  };
};

export type TokenListFilterQueryVariables = Exact<{
  filter?: Maybe<TokenListQueryFilterInputType>;
}>;

export type TokenListFilterQuery = { __typename?: 'Query' } & {
  tokenList: Array<
    { __typename?: 'TokenType' } & Pick<
      TokenType,
      | 'address'
      | 'name'
      | 'symbol'
      | 'decimals'
      | 'totalSupply'
      | 'totalSupplyFloat'
      | 'priceUSD'
    > & {
        statistic?: Maybe<
          { __typename?: 'TokenStatisticType' } & Pick<
            TokenStatisticType,
            'dailyVolumeUSD' | 'totalLiquidityUSD'
          >
        >;
      }
  >;
};

export type TokenPriceQueryVariables = Exact<{
  filter: TokenQueryFilterInputType;
}>;

export type TokenPriceQuery = { __typename?: 'Query' } & {
  token: { __typename?: 'TokenPayload' } & {
    data?: Maybe<
      { __typename?: 'TokenType' } & Pick<
        TokenType,
        | 'address'
        | 'name'
        | 'symbol'
        | 'decimals'
        | 'totalSupply'
        | 'totalSupplyFloat'
        | 'priceUSD'
      > & {
          statistic?: Maybe<
            { __typename?: 'TokenStatisticType' } & Pick<
              TokenStatisticType,
              'dailyVolumeUSD' | 'totalLiquidityUSD'
            >
          >;
        }
    >;
  };
};

export type UniswapPairListQueryVariables = Exact<{
  filter?: Maybe<UniswapPairListQueryFilterInputType>;
}>;

export type UniswapPairListQuery = { __typename?: 'Query' } & {
  uniswapPairList: Array<
    { __typename?: 'UniswapPairType' } & Pick<
      UniswapPairType,
      'address' | 'totalSupplyFloat'
    > & {
        statistic?: Maybe<
          { __typename?: 'UniswapPairStatisticType' } & Pick<
            UniswapPairStatisticType,
            'dailyVolumeUSD' | 'totalLiquidityUSD'
          >
        >;
      }
  >;
};

export type UniswapPairQueryVariables = Exact<{
  filter: UniswapPairQueryFilterInputType;
}>;

export type UniswapPairQuery = { __typename?: 'Query' } & {
  uniswapPair: { __typename?: 'UniswapPairPayload' } & {
    data?: Maybe<
      { __typename?: 'UniswapPairType' } & Pick<
        UniswapPairType,
        'address' | 'totalSupplyFloat'
      > & {
          statistic?: Maybe<
            { __typename?: 'UniswapPairStatisticType' } & Pick<
              UniswapPairStatisticType,
              'dailyVolumeUSD' | 'totalLiquidityUSD'
            >
          >;
        }
    >;
  };
};

export const AddBurgerSwapBridgeTransitDocument = gql`
  mutation AddBurgerSwapBridgeTransit($input: BurgerSwapBridgeTransitInput!) {
    addBurgerSwapBridgeTransit(input: $input) {
      tx
      type
      owner
      createdAt
    }
  }
`;
export type AddBurgerSwapBridgeTransitMutationFn = Apollo.MutationFunction<
  AddBurgerSwapBridgeTransitMutation,
  AddBurgerSwapBridgeTransitMutationVariables
>;

/**
 * __useAddBurgerSwapBridgeTransitMutation__
 *
 * To run a mutation, you first call `useAddBurgerSwapBridgeTransitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBurgerSwapBridgeTransitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBurgerSwapBridgeTransitMutation, { data, loading, error }] = useAddBurgerSwapBridgeTransitMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddBurgerSwapBridgeTransitMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddBurgerSwapBridgeTransitMutation,
    AddBurgerSwapBridgeTransitMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    AddBurgerSwapBridgeTransitMutation,
    AddBurgerSwapBridgeTransitMutationVariables
  >(AddBurgerSwapBridgeTransitDocument, options);
}
export type AddBurgerSwapBridgeTransitMutationHookResult = ReturnType<
  typeof useAddBurgerSwapBridgeTransitMutation
>;
export type AddBurgerSwapBridgeTransitMutationResult = Apollo.MutationResult<
  AddBurgerSwapBridgeTransitMutation
>;
export type AddBurgerSwapBridgeTransitMutationOptions = Apollo.BaseMutationOptions<
  AddBurgerSwapBridgeTransitMutation,
  AddBurgerSwapBridgeTransitMutationVariables
>;
export const WalletDocument = gql`
  query Wallet($filter: WalletQueryFilterInputType!) {
    wallet(filter: $filter) {
      data {
        address
        balance
        balanceFloat
      }
    }
  }
`;

/**
 * __useWalletQuery__
 *
 * To run a query within a React component, call `useWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useWalletQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    WalletQuery,
    WalletQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<WalletQuery, WalletQueryVariables>(
    WalletDocument,
    options
  );
}
export function useWalletLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    WalletQuery,
    WalletQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<WalletQuery, WalletQueryVariables>(
    WalletDocument,
    options
  );
}
export type WalletQueryHookResult = ReturnType<typeof useWalletQuery>;
export type WalletLazyQueryHookResult = ReturnType<typeof useWalletLazyQuery>;
export type WalletQueryResult = Apollo.QueryResult<
  WalletQuery,
  WalletQueryVariables
>;
export const StakingListDocument = gql`
  query StakingList(
    $filter: StakingListQueryFilterInputType
    $userFilter: StakingUserListFilterInputType
  ) {
    stakingList(filter: $filter) {
      address
      totalSupply
      totalSupplyFloat
      stakingTokenDecimals
      stakingToken
      stakingTokenUniswap {
        address
        totalSupplyFloat
        statistic {
          dailyVolumeUSD
          totalLiquidityUSD
        }
      }
      poolRate {
        block
        blockFloat
        daily
        dailyFloat
      }
      stakingEnd {
        block
        date
      }
      unstakingStart {
        block
        date
      }
      apr {
        block
        day
        week
        month
        year
      }
      userList(filter: $userFilter) {
        staking
        address
        balance
        balanceFloat
        staked
        earned
        earnedFloat
      }
    }
  }
`;

/**
 * __useStakingListQuery__
 *
 * To run a query within a React component, call `useStakingListQuery` and pass it any options that fit your needs.
 * When your component renders, `useStakingListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStakingListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      userFilter: // value for 'userFilter'
 *   },
 * });
 */
export function useStakingListQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    StakingListQuery,
    StakingListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<StakingListQuery, StakingListQueryVariables>(
    StakingListDocument,
    options
  );
}
export function useStakingListLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    StakingListQuery,
    StakingListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    StakingListQuery,
    StakingListQueryVariables
  >(StakingListDocument, options);
}
export type StakingListQueryHookResult = ReturnType<typeof useStakingListQuery>;
export type StakingListLazyQueryHookResult = ReturnType<
  typeof useStakingListLazyQuery
>;
export type StakingListQueryResult = Apollo.QueryResult<
  StakingListQuery,
  StakingListQueryVariables
>;
export const StakingDocument = gql`
  query Staking(
    $filter: StakingQueryFilterInputType!
    $userFilter: StakingUserListFilterInputType
  ) {
    staking(filter: $filter) {
      data {
        address
        totalSupply
        totalSupplyFloat
        stakingTokenDecimals
        stakingToken
        stakingTokenUniswap {
          address
          totalSupplyFloat
          statistic {
            dailyVolumeUSD
            totalLiquidityUSD
          }
        }
        poolRate {
          block
          blockFloat
          daily
          dailyFloat
        }
        stakingEnd {
          block
          date
        }
        unstakingStart {
          block
          date
        }
        apr {
          block
          day
          week
          month
          year
        }
        userList(filter: $userFilter) {
          staking
          address
          balance
          balanceFloat
          staked
          earned
          earnedFloat
        }
      }
    }
  }
`;

/**
 * __useStakingQuery__
 *
 * To run a query within a React component, call `useStakingQuery` and pass it any options that fit your needs.
 * When your component renders, `useStakingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStakingQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      userFilter: // value for 'userFilter'
 *   },
 * });
 */
export function useStakingQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    StakingQuery,
    StakingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<StakingQuery, StakingQueryVariables>(
    StakingDocument,
    options
  );
}
export function useStakingLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    StakingQuery,
    StakingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<StakingQuery, StakingQueryVariables>(
    StakingDocument,
    options
  );
}
export type StakingQueryHookResult = ReturnType<typeof useStakingQuery>;
export type StakingLazyQueryHookResult = ReturnType<typeof useStakingLazyQuery>;
export type StakingQueryResult = Apollo.QueryResult<
  StakingQuery,
  StakingQueryVariables
>;
export const SwopfiPairDocument = gql`
  query swopfiPair($filter: SwopfiPairQueryFilterInputType!) {
    swopfiPair(filter: $filter) {
      data {
        address
        token0Address
        token1Address
        token0Reserve
        token0ReserveFloat
        token1Reserve
        token1ReserveFloat
        incomeUSD
        totalLiquidityUSD
        dailyTxCount
        dailyFeesUSD
        dailyVolumeUSD
        apr {
          year
        }
      }
    }
  }
`;

/**
 * __useSwopfiPairQuery__
 *
 * To run a query within a React component, call `useSwopfiPairQuery` and pass it any options that fit your needs.
 * When your component renders, `useSwopfiPairQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSwopfiPairQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useSwopfiPairQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    SwopfiPairQuery,
    SwopfiPairQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<SwopfiPairQuery, SwopfiPairQueryVariables>(
    SwopfiPairDocument,
    options
  );
}
export function useSwopfiPairLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    SwopfiPairQuery,
    SwopfiPairQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    SwopfiPairQuery,
    SwopfiPairQueryVariables
  >(SwopfiPairDocument, options);
}
export type SwopfiPairQueryHookResult = ReturnType<typeof useSwopfiPairQuery>;
export type SwopfiPairLazyQueryHookResult = ReturnType<
  typeof useSwopfiPairLazyQuery
>;
export type SwopfiPairQueryResult = Apollo.QueryResult<
  SwopfiPairQuery,
  SwopfiPairQueryVariables
>;
export const TokenListFilterDocument = gql`
  query TokenListFilter($filter: TokenListQueryFilterInputType) {
    tokenList(filter: $filter) {
      address
      name
      symbol
      decimals
      totalSupply
      totalSupplyFloat
      priceUSD
      statistic {
        dailyVolumeUSD
        totalLiquidityUSD
      }
    }
  }
`;

/**
 * __useTokenListFilterQuery__
 *
 * To run a query within a React component, call `useTokenListFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenListFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenListFilterQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useTokenListFilterQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    TokenListFilterQuery,
    TokenListFilterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    TokenListFilterQuery,
    TokenListFilterQueryVariables
  >(TokenListFilterDocument, options);
}
export function useTokenListFilterLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    TokenListFilterQuery,
    TokenListFilterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    TokenListFilterQuery,
    TokenListFilterQueryVariables
  >(TokenListFilterDocument, options);
}
export type TokenListFilterQueryHookResult = ReturnType<
  typeof useTokenListFilterQuery
>;
export type TokenListFilterLazyQueryHookResult = ReturnType<
  typeof useTokenListFilterLazyQuery
>;
export type TokenListFilterQueryResult = Apollo.QueryResult<
  TokenListFilterQuery,
  TokenListFilterQueryVariables
>;
export const TokenPriceDocument = gql`
  query TokenPrice($filter: TokenQueryFilterInputType!) {
    token(filter: $filter) {
      data {
        address
        name
        symbol
        decimals
        totalSupply
        totalSupplyFloat
        priceUSD
        statistic {
          dailyVolumeUSD
          totalLiquidityUSD
        }
      }
    }
  }
`;

/**
 * __useTokenPriceQuery__
 *
 * To run a query within a React component, call `useTokenPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenPriceQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useTokenPriceQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    TokenPriceQuery,
    TokenPriceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<TokenPriceQuery, TokenPriceQueryVariables>(
    TokenPriceDocument,
    options
  );
}
export function useTokenPriceLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    TokenPriceQuery,
    TokenPriceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    TokenPriceQuery,
    TokenPriceQueryVariables
  >(TokenPriceDocument, options);
}
export type TokenPriceQueryHookResult = ReturnType<typeof useTokenPriceQuery>;
export type TokenPriceLazyQueryHookResult = ReturnType<
  typeof useTokenPriceLazyQuery
>;
export type TokenPriceQueryResult = Apollo.QueryResult<
  TokenPriceQuery,
  TokenPriceQueryVariables
>;
export const UniswapPairListDocument = gql`
  query UniswapPairList($filter: UniswapPairListQueryFilterInputType) {
    uniswapPairList(filter: $filter) {
      address
      totalSupplyFloat
      statistic {
        dailyVolumeUSD
        totalLiquidityUSD
      }
    }
  }
`;

/**
 * __useUniswapPairListQuery__
 *
 * To run a query within a React component, call `useUniswapPairListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUniswapPairListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUniswapPairListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUniswapPairListQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    UniswapPairListQuery,
    UniswapPairListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    UniswapPairListQuery,
    UniswapPairListQueryVariables
  >(UniswapPairListDocument, options);
}
export function useUniswapPairListLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    UniswapPairListQuery,
    UniswapPairListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    UniswapPairListQuery,
    UniswapPairListQueryVariables
  >(UniswapPairListDocument, options);
}
export type UniswapPairListQueryHookResult = ReturnType<
  typeof useUniswapPairListQuery
>;
export type UniswapPairListLazyQueryHookResult = ReturnType<
  typeof useUniswapPairListLazyQuery
>;
export type UniswapPairListQueryResult = Apollo.QueryResult<
  UniswapPairListQuery,
  UniswapPairListQueryVariables
>;
export const UniswapPairDocument = gql`
  query UniswapPair($filter: UniswapPairQueryFilterInputType!) {
    uniswapPair(filter: $filter) {
      data {
        address
        totalSupplyFloat
        statistic {
          dailyVolumeUSD
          totalLiquidityUSD
        }
      }
    }
  }
`;

/**
 * __useUniswapPairQuery__
 *
 * To run a query within a React component, call `useUniswapPairQuery` and pass it any options that fit your needs.
 * When your component renders, `useUniswapPairQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUniswapPairQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUniswapPairQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    UniswapPairQuery,
    UniswapPairQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<UniswapPairQuery, UniswapPairQueryVariables>(
    UniswapPairDocument,
    options
  );
}
export function useUniswapPairLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    UniswapPairQuery,
    UniswapPairQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    UniswapPairQuery,
    UniswapPairQueryVariables
  >(UniswapPairDocument, options);
}
export type UniswapPairQueryHookResult = ReturnType<typeof useUniswapPairQuery>;
export type UniswapPairLazyQueryHookResult = ReturnType<
  typeof useUniswapPairLazyQuery
>;
export type UniswapPairQueryResult = Apollo.QueryResult<
  UniswapPairQuery,
  UniswapPairQueryVariables
>;
