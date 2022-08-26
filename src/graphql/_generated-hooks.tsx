/* eslint-disable */
import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date and time */
  DateTimeType: string;
  /** Metric column */
  MetricColumnType: any;
  /** Identificator */
  UuidType: any;
};

export type AddWalletInputType = {
  /** Blockchain */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  /** Wallet address */
  address: Scalars['String'];
};

export type AuthEthereumInputType = {
  /** Blockchain network id */
  network: Scalars['String'];
  /** Wallet address */
  address: Scalars['String'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** Signed message */
  signature?: Maybe<Scalars['String']>;
  /** Code */
  code?: Maybe<Scalars['String']>;
  /** Timezone */
  timezone: Scalars['String'];
  /** Merged target account to current account */
  merge?: Maybe<Scalars['Boolean']>;
};

export type AuthType = {
  __typename?: 'AuthType';
  /** Authenticated user account */
  user: UserType;
  /** Session ID */
  sid: Scalars['String'];
};

export type AuthWavesInputType = {
  /** Blockchain network id */
  network: Scalars['String'];
  /** Wallet public key */
  publicKey: Scalars['String'];
  /** Wallet address */
  address: Scalars['String'];
  /** Message */
  message?: Maybe<Scalars['String']>;
  /** Signed message */
  signature?: Maybe<Scalars['String']>;
  /** Promo id */
  code?: Maybe<Scalars['String']>;
  /** Timezone */
  timezone: Scalars['String'];
  /** Merged target account to current account */
  merge?: Maybe<Scalars['Boolean']>;
};

export type AutomateActionCreateInputType = {
  /** Trigger */
  trigger: Scalars['UuidType'];
  /** Type */
  type: AutomateActionTypeEnum;
  /** Parameters */
  params: Scalars['String'];
  /** Execution priority (ascending) */
  priority?: Maybe<Scalars['Int']>;
};

export type AutomateActionListFilterInputType = {
  id?: Maybe<Scalars['UuidType']>;
  type?: Maybe<AutomateConditionTypeEnum>;
};

export type AutomateActionListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type AutomateActionListSortInputType = {
  column: AutomateActionListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum AutomateActionListSortInputTypeColumnEnum {
  Priority = 'priority'
}

export type AutomateActionListType = {
  __typename?: 'AutomateActionListType';
  /** Elements */
  list?: Maybe<Array<AutomateActionType>>;
  pagination: Pagination;
};

export type AutomateActionType = {
  __typename?: 'AutomateActionType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Type */
  type: AutomateActionTypeEnum;
  /** Action parameters */
  params: Scalars['String'];
  /** Stringify parameters */
  paramsDescription: Scalars['String'];
  /** Execution priority (ascending) */
  priority: Scalars['Int'];
  /** Created at date */
  createdAt: Scalars['DateTimeType'];
};

export enum AutomateActionTypeEnum {
  Notification = 'notification',
  EthereumAutomateRun = 'ethereumAutomateRun',
  WavesAutomateRun = 'wavesAutomateRun'
}

export type AutomateActionUpdateInputType = {
  /** Action identifier */
  id: Scalars['UuidType'];
  /** Parameters */
  params?: Maybe<Scalars['String']>;
  /** Execution priority (ascending) */
  priority?: Maybe<Scalars['Int']>;
};

export type AutomateActionsDescriptionType = {
  __typename?: 'AutomateActionsDescriptionType';
  notification: AutomateDescriptionType;
  ethereumAutomateRun: AutomateDescriptionType;
  wavesAutomateRun: AutomateDescriptionType;
};

export type AutomateConditionCreateInputType = {
  /** Trigger */
  trigger: Scalars['UuidType'];
  /** Type */
  type: AutomateConditionTypeEnum;
  /** Parameters */
  params: Scalars['String'];
  /** Execution priority (ascending) */
  priority?: Maybe<Scalars['Int']>;
};

export type AutomateConditionListFilterInputType = {
  id?: Maybe<Scalars['UuidType']>;
  type?: Maybe<AutomateConditionTypeEnum>;
};

export type AutomateConditionListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type AutomateConditionListSortInputType = {
  column: AutomateConditionListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum AutomateConditionListSortInputTypeColumnEnum {
  Priority = 'priority'
}

export type AutomateConditionListType = {
  __typename?: 'AutomateConditionListType';
  /** Elements */
  list?: Maybe<Array<AutomateConditionType>>;
  pagination: Pagination;
};

export type AutomateConditionType = {
  __typename?: 'AutomateConditionType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Type */
  type: AutomateConditionTypeEnum;
  /** Condition parameters */
  params: Scalars['String'];
  /** Stringify parameters */
  paramsDescription: Scalars['String'];
  /** Execution priority (ascending) */
  priority: Scalars['Int'];
  /** Created at date */
  createdAt: Scalars['DateTimeType'];
};

export enum AutomateConditionTypeEnum {
  Schedule = 'schedule',
  EthereumAvgGasPrice = 'ethereumAvgGasPrice',
  EthereumBalance = 'ethereumBalance',
  EthereumOptimalAutomateRun = 'ethereumOptimalAutomateRun',
  ContractMetric = 'contractMetric'
}

export type AutomateConditionUpdateInputType = {
  /** Condition identifier */
  id: Scalars['UuidType'];
  /** Parameters */
  params?: Maybe<Scalars['String']>;
  /** Execution priority (ascending) */
  priority?: Maybe<Scalars['Int']>;
};

export type AutomateConditionsDescriptionType = {
  __typename?: 'AutomateConditionsDescriptionType';
  schedule: AutomateDescriptionType;
  ethereumAvgGasPrice: AutomateDescriptionType;
  ethereumBalance: AutomateDescriptionType;
  ethereumOptimalAutomateRun: AutomateDescriptionType;
  contractMetric: AutomateDescriptionType;
};

export type AutomateContractCreateInputType = {
  /** Wallet owner */
  wallet: Scalars['UuidType'];
  /** Protocol */
  protocol: Scalars['UuidType'];
  /** Protocol contract */
  contract?: Maybe<Scalars['UuidType']>;
  type: AutomateContractTypeEnum;
  /** Address */
  address: Scalars['String'];
  /** Adapter name */
  adapter: Scalars['String'];
  /** Init method parameters */
  initParams: Scalars['String'];
};

export type AutomateContractListFilterInputType = {
  user?: Maybe<Scalars['UuidType']>;
  /** Owner wallet */
  wallet?: Maybe<Scalars['UuidType']>;
  protocol?: Maybe<Scalars['UuidType']>;
  contract?: Maybe<Array<Scalars['UuidType']>>;
  type?: Maybe<Array<AutomateContractTypeEnum>>;
  address?: Maybe<Array<Scalars['String']>>;
  archived?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
};

export type AutomateContractListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type AutomateContractListQuery = {
  __typename?: 'AutomateContractListQuery';
  /** Elements */
  list?: Maybe<Array<AutomateContractType>>;
  pagination: Pagination;
};

export type AutomateContractListSortInputType = {
  column: AutomateContractListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum AutomateContractListSortInputTypeColumnEnum {
  CreatedAt = 'createdAt'
}

export type AutomateContractMetricType = {
  __typename?: 'AutomateContractMetricType';
  staked: Scalars['String'];
  earned: Scalars['String'];
  apyBoost: Scalars['String'];
};

export type AutomateContractType = {
  __typename?: 'AutomateContractType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Contract type */
  type: AutomateContractTypeEnum;
  /** Owner wallet */
  wallet: WalletBlockchainType;
  /** Protocol */
  protocol: ProtocolType;
  /** Protocol contract */
  contract?: Maybe<ContractType>;
  /** Address in blockchain */
  address: Scalars['String'];
  /** Automate contract wallet */
  contractWallet?: Maybe<WalletBlockchainType>;
  /** Adapter name */
  adapter: Scalars['String'];
  /** Init method parameters */
  initParams: Scalars['String'];
  /** Verification status */
  verification: AutomateContractVerificationStatusEnum;
  rejectReason: Scalars['String'];
  /** restake at */
  restakeAt?: Maybe<Scalars['DateTimeType']>;
  metric: AutomateContractMetricType;
  /** Date at archived contract */
  archivedAt?: Maybe<Scalars['DateTimeType']>;
};

export enum AutomateContractTypeEnum {
  Autorestake = 'autorestake'
}

export type AutomateContractUpdateInputType = {
  /** Contract identifier */
  id: Scalars['UuidType'];
  /** Init method parameters */
  initParams?: Maybe<Scalars['String']>;
};

export enum AutomateContractVerificationStatusEnum {
  Pending = 'pending',
  Confirmed = 'confirmed',
  Rejected = 'rejected'
}

export type AutomateDescriptionType = {
  __typename?: 'AutomateDescriptionType';
  name: Scalars['String'];
  description: Scalars['String'];
};

export type AutomateTriggerCallHistoryListFilterInputType = {
  hasError?: Maybe<Scalars['Boolean']>;
};

export type AutomateTriggerCallHistoryListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type AutomateTriggerCallHistoryListQuery = {
  __typename?: 'AutomateTriggerCallHistoryListQuery';
  /** Elements */
  list?: Maybe<Array<AutomateTriggerCallHistoryType>>;
  pagination: Pagination;
};

export type AutomateTriggerCallHistoryListSortInputType = {
  column: AutomateTriggerCallHistoryListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum AutomateTriggerCallHistoryListSortInputTypeColumnEnum {
  CreatedAt = 'createdAt'
}

export type AutomateTriggerCallHistoryType = {
  __typename?: 'AutomateTriggerCallHistoryType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Call error */
  error?: Maybe<Scalars['String']>;
  /** Created at date */
  createdAt: Scalars['DateTimeType'];
};

export type AutomateTriggerCreateInputType = {
  /** Wallet owner */
  wallet: Scalars['UuidType'];
  /** Type */
  type: AutomateTriggerTypeEnum;
  /** Parameters */
  params: Scalars['String'];
  /** Name */
  name: Scalars['String'];
  /** Is active */
  active?: Maybe<Scalars['Boolean']>;
};

export type AutomateTriggerFilterInputType = {
  id: Scalars['UuidType'];
};

export type AutomateTriggerListFilterInputType = {
  user?: Maybe<Scalars['UuidType']>;
  wallet?: Maybe<Scalars['UuidType']>;
  active?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
};

export type AutomateTriggerListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type AutomateTriggerListQuery = {
  __typename?: 'AutomateTriggerListQuery';
  /** Elements */
  list?: Maybe<Array<AutomateTriggerType>>;
  pagination: Pagination;
};

export type AutomateTriggerListSortInputType = {
  column: AutomateTriggerListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum AutomateTriggerListSortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  CreatedAt = 'createdAt'
}

export type AutomateTriggerType = {
  __typename?: 'AutomateTriggerType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Type */
  type: AutomateTriggerTypeEnum;
  /** Trigger parameters */
  params: Scalars['String'];
  /** Wallet of owner */
  wallet: WalletBlockchainType;
  /** Name */
  name: Scalars['String'];
  /** Is trigger active */
  active: Scalars['Boolean'];
  /** Date of last call */
  lastCallAt?: Maybe<Scalars['DateTimeType']>;
  /** Created at date */
  createdAt: Scalars['DateTimeType'];
  conditions: AutomateConditionListType;
  actions: AutomateActionListType;
  callHistory: AutomateTriggerCallHistoryListQuery;
};

export type AutomateTriggerTypeConditionsArgs = {
  filter?: Maybe<AutomateConditionListFilterInputType>;
  sort?: Maybe<Array<AutomateConditionListSortInputType>>;
  pagination?: Maybe<AutomateConditionListPaginationInputType>;
};

export type AutomateTriggerTypeActionsArgs = {
  filter?: Maybe<AutomateActionListFilterInputType>;
  sort?: Maybe<Array<AutomateActionListSortInputType>>;
  pagination?: Maybe<AutomateActionListPaginationInputType>;
};

export type AutomateTriggerTypeCallHistoryArgs = {
  filter?: Maybe<AutomateTriggerCallHistoryListFilterInputType>;
  sort?: Maybe<Array<AutomateTriggerCallHistoryListSortInputType>>;
  pagination?: Maybe<AutomateTriggerCallHistoryListPaginationInputType>;
};

export enum AutomateTriggerTypeEnum {
  EveryMonth = 'everyMonth',
  EveryWeek = 'everyWeek',
  EveryDay = 'everyDay',
  EveryHour = 'everyHour',
  ContractEvent = 'contractEvent'
}

export type AutomateTriggerUpdateInputType = {
  /** Trigger identifier */
  id: Scalars['UuidType'];
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Is active */
  active?: Maybe<Scalars['Boolean']>;
};

export type AutomateTriggersDescriptionType = {
  __typename?: 'AutomateTriggersDescriptionType';
  everyMonth: AutomateDescriptionType;
  everyWeek: AutomateDescriptionType;
  everyDay: AutomateDescriptionType;
  everyHour: AutomateDescriptionType;
  contractEvent: AutomateDescriptionType;
};

export type AutomatesDescriptionType = {
  __typename?: 'AutomatesDescriptionType';
  triggers: AutomateTriggersDescriptionType;
  conditions: AutomateConditionsDescriptionType;
  actions: AutomateActionsDescriptionType;
};

export type BalanceMetaType = {
  __typename?: 'BalanceMetaType';
  token: Scalars['String'];
  recomendedIncome: Scalars['String'];
  priceUSD: Scalars['String'];
};

export type BillingBalanceType = {
  __typename?: 'BillingBalanceType';
  lowFeeFunds: Scalars['Boolean'];
  pending: Scalars['Float'];
  balance: Scalars['Float'];
  claim: Scalars['Float'];
  netBalance: Scalars['Float'];
};

export enum BillingBillStatusEnum {
  /** Bill awaiting confirmation */
  Pending = 'pending',
  /** Bill accepted */
  Accepted = 'accepted',
  /** Bill rejected */
  Rejected = 'rejected'
}

export type BillingBillType = {
  __typename?: 'BillingBillType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Blockchain type */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  /** Account */
  account: Scalars['String'];
  /** Claimant */
  claimant: Scalars['String'];
  /** Declarate gas fee */
  claimGasFee: Scalars['Float'];
  /** Declarate protocol fee */
  claimProtocolFee: Scalars['Float'];
  /** Confirmed gas fee */
  gasFee?: Maybe<Scalars['Float']>;
  /** Confirmed protocol fee */
  protocolFee?: Maybe<Scalars['Float']>;
  /** Balance of claim after make the bill */
  claim: Scalars['Float'];
  /** Current status */
  status: BillingBillStatusEnum;
  /** Transaction id */
  tx: Scalars['String'];
  /** Date of created */
  createdAt: Scalars['DateTimeType'];
  /** Date of last updated */
  updatedAt: Scalars['DateTimeType'];
};

export type BillingTransferCreateInputType = {
  blockchain: BlockchainEnum;
  network: Scalars['String'];
  account: Scalars['String'];
  amount: Scalars['String'];
  tx: Scalars['String'];
};

export type BillingTransferType = {
  __typename?: 'BillingTransferType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Blockchain type */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  /** Account */
  account: Scalars['String'];
  /** Transfer amount (must be negative) */
  amount: Scalars['Float'];
  /** Transaction id */
  tx: Scalars['String'];
  /** Bill */
  bill?: Maybe<BillingBillType>;
  /** Is transfer confirmed */
  confirmed: Scalars['Boolean'];
  /** Date of created */
  createdAt: Scalars['DateTimeType'];
};

export enum BlockchainEnum {
  Ethereum = 'ethereum',
  Waves = 'waves'
}

export type BlockchainFilterInputType = {
  protocol: BlockchainEnum;
  network?: Maybe<Scalars['String']>;
};

export type ConfigBlockchainFilterInputType = {
  testnet?: Maybe<Scalars['Boolean']>;
};

export type ConfigBlockchainType = {
  __typename?: 'ConfigBlockchainType';
  ethereum: Array<ConfigEthereumNetworkType>;
  waves: Array<ConfigWavesNetworkType>;
};

export type ConfigBlockchainTypeEthereumArgs = {
  filter?: Maybe<ConfigBlockchainFilterInputType>;
};

export type ConfigBlockchainTypeWavesArgs = {
  filter?: Maybe<ConfigBlockchainFilterInputType>;
};

export enum ConfigEthereumNetworkIconEnum {
  EthereumRegular = 'ethereumRegular',
  Cronos = 'cronos',
  BnbRegular = 'bnbRegular',
  Polygon = 'polygon',
  Fantom = 'fantom',
  Moonbeam = 'moonbeam',
  Moonriver = 'moonriver',
  Arbitrum = 'arbitrum',
  Avalanche = 'avalanche',
  Aurora = 'aurora',
  Harmony = 'harmony'
}

export type ConfigEthereumNetworkType = {
  __typename?: 'ConfigEthereumNetworkType';
  id: Scalars['String'];
  title: Scalars['String'];
  testnet: Scalars['Boolean'];
  explorerURL: Scalars['String'];
  coin: Scalars['String'];
  decimals: Scalars['Int'];
  blockchain: BlockchainEnum;
  icon: ConfigEthereumNetworkIconEnum;
  rpcUrls?: Maybe<Array<Scalars['String']>>;
};

export type ConfigType = {
  __typename?: 'ConfigType';
  blockchain: ConfigBlockchainType;
};

export enum ConfigWavesNetworkIconEnum {
  WavesRegular = 'wavesRegular'
}

export type ConfigWavesNetworkType = {
  __typename?: 'ConfigWavesNetworkType';
  id: Scalars['String'];
  title: Scalars['String'];
  testnet: Scalars['Boolean'];
  explorerURL: Scalars['String'];
  coin: Scalars['String'];
  decimals: Scalars['Int'];
  blockchain: BlockchainEnum;
  icon: ConfigWavesNetworkIconEnum;
};

export type ContractAutomateBuyLiquidityType = {
  __typename?: 'ContractAutomateBuyLiquidityType';
  /** Liquidity pool router address */
  router: Scalars['String'];
  /** Target pool address */
  pair: Scalars['String'];
};

export type ContractAutomatesType = {
  __typename?: 'ContractAutomatesType';
  /** Usable automate adapters */
  adapters: Array<Scalars['String']>;
  /** Autorestake adapter name */
  autorestake?: Maybe<Scalars['String']>;
  /** Liquidity pool tokens manager automate config */
  lpTokensManager?: Maybe<ContractAutomateBuyLiquidityType>;
};

export type ContractCreateInputType = {
  /** Blockchain protocol */
  blockchain: BlockchainEnum;
  /** Blockchain network */
  network: Scalars['String'];
  /** Address */
  address: Scalars['String'];
  /** Adapter name */
  adapter: Scalars['String'];
  /** Contract deployment block number */
  deployBlockNumber?: Maybe<Scalars['String']>;
  /** Layout name */
  layout: Scalars['String'];
  /** Usable automates */
  automates?: Maybe<Array<Scalars['String']>>;
  /** Usable autorestake contract adapter */
  autorestakeAdapter?: Maybe<Scalars['String']>;
  /** Name */
  name: Scalars['String'];
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Website URL */
  link?: Maybe<Scalars['String']>;
  /** Is hidden */
  hidden?: Maybe<Scalars['Boolean']>;
  /** Events to subscribe in scanner */
  eventsToSubscribe?: Maybe<Array<Scalars['String']>>;
};

export type ContractDebankListFilterInputType = {
  id?: Maybe<Scalars['UuidType']>;
  protocol?: Maybe<Array<Scalars['UuidType']>>;
  hidden?: Maybe<Scalars['Boolean']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
};

export type ContractDebankListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type ContractDebankListSortInputType = {
  column: ContractDebankListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum ContractDebankListSortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  Address = 'address',
  CreatedAt = 'createdAt',
  Tvl = 'tvl',
  MyStaked = 'myStaked'
}

export type ContractDebankListType = {
  __typename?: 'ContractDebankListType';
  /** Elements */
  list?: Maybe<Array<ContractDebankType>>;
  pagination: Pagination;
};

export type ContractDebankMetricChartFilterInputType = {
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type ContractDebankMetricChartPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type ContractDebankMetricChartSortInputType = {
  column: ContractDebankMetricChartSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum ContractDebankMetricChartSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export type ContractDebankMetricFilterInputType = {
  wallet?: Maybe<ContractDebankMetricWalletFilterInputType>;
};

export type ContractDebankMetricWalletFilterInputType = {
  type?: Maybe<Array<WalletBlockchainTypeEnum>>;
};

export type ContractDebankType = {
  __typename?: 'ContractDebankType';
  /** Identificator */
  id: Scalars['UuidType'];
  protocol: ProtocolType;
  /** Layout name */
  layout: Scalars['String'];
  /** Address */
  address: Scalars['String'];
  /** Name */
  name: Scalars['String'];
  /** Description */
  description: Scalars['String'];
  /** View URL */
  link?: Maybe<Scalars['String']>;
  /** Is hidden */
  hidden: Scalars['Boolean'];
  /** Is deprecated */
  deprecated: Scalars['Boolean'];
  metricChart: Array<MetricChartType>;
  metric: ContractMetricType;
  tokens: ContractTokenLinkType;
  /** Date of created account */
  createdAt: Scalars['DateTimeType'];
};

export type ContractDebankTypeMetricChartArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<ContractDebankMetricChartFilterInputType>;
  sort?: Maybe<Array<ContractDebankMetricChartSortInputType>>;
  pagination?: Maybe<ContractDebankMetricChartPaginationInputType>;
};

export type ContractDebankTypeMetricArgs = {
  filter?: Maybe<ContractDebankMetricFilterInputType>;
};

export type ContractListAutomateFilterInputType = {
  /** Has LP tokens manager automate */
  lpTokensManager?: Maybe<Scalars['Boolean']>;
  /** Has autorestake automate */
  autorestake?: Maybe<Scalars['Boolean']>;
  /** Is autorestake automate candidate */
  autorestakeCandidate?: Maybe<Scalars['Boolean']>;
};

export type ContractListFilterInputType = {
  id?: Maybe<Scalars['UuidType']>;
  protocol?: Maybe<Array<Scalars['UuidType']>>;
  blockchain?: Maybe<BlockchainFilterInputType>;
  hidden?: Maybe<Scalars['Boolean']>;
  deprecated?: Maybe<Scalars['Boolean']>;
  userLink?: Maybe<ContractUserLinkTypeEnum>;
  risk?: Maybe<ContractRiskFactorEnum>;
  automate?: Maybe<ContractListAutomateFilterInputType>;
  search?: Maybe<Scalars['String']>;
};

export type ContractListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type ContractListSortInputType = {
  column: ContractListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum ContractListSortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  Address = 'address',
  CreatedAt = 'createdAt',
  Tvl = 'tvl',
  AprYear = 'aprYear',
  AprWeekReal = 'aprWeekReal',
  AprBoosted = 'aprBoosted',
  MyStaked = 'myStaked',
  RiskFactor = 'riskFactor'
}

export type ContractListType = {
  __typename?: 'ContractListType';
  /** Elements */
  list?: Maybe<Array<ContractType>>;
  pagination: Pagination;
};

export type ContractMetricChartFilterInputType = {
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type ContractMetricChartPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type ContractMetricChartSortInputType = {
  column: ContractMetricChartSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum ContractMetricChartSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export type ContractMetricFilterInputType = {
  wallet?: Maybe<ContractMetricWalletFilterInputType>;
};

export type ContractMetricType = {
  __typename?: 'ContractMetricType';
  tvl: Scalars['String'];
  aprDay: Scalars['String'];
  aprWeek: Scalars['String'];
  aprMonth: Scalars['String'];
  aprYear: Scalars['String'];
  risk: ContractRiskFactorEnum;
  aprWeekReal?: Maybe<Scalars['String']>;
  myStaked: Scalars['String'];
  myStakedChange: MetricChangeType;
  myEarned: Scalars['String'];
  myEarnedChange: MetricChangeType;
  myAPYBoost: Scalars['String'];
};

export type ContractMetricWalletFilterInputType = {
  type?: Maybe<Array<WalletBlockchainTypeEnum>>;
};

export enum ContractRiskFactorEnum {
  NotCalculated = 'notCalculated',
  Low = 'low',
  Moderate = 'moderate',
  High = 'high'
}

export type ContractTokenLinkType = {
  __typename?: 'ContractTokenLinkType';
  stake: Array<TokenType>;
  reward: Array<TokenType>;
};

export type ContractType = {
  __typename?: 'ContractType';
  /** Identificator */
  id: Scalars['UuidType'];
  protocol: ProtocolType;
  /** Adapter name */
  adapter: Scalars['String'];
  /** Layout name */
  layout: Scalars['String'];
  /** Blockchain type */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  /** Address */
  address: Scalars['String'];
  /** Watcher id */
  watcherId?: Maybe<Scalars['String']>;
  /** Contract deployment block number */
  deployBlockNumber?: Maybe<Scalars['String']>;
  /** Usable automates */
  automate: ContractAutomatesType;
  /** Name */
  name: Scalars['String'];
  /** Description */
  description: Scalars['String'];
  /** View URL */
  link?: Maybe<Scalars['String']>;
  /** Is hidden */
  hidden: Scalars['Boolean'];
  /** Is deprecated */
  deprecated: Scalars['Boolean'];
  metricChart: Array<MetricChartType>;
  metric: ContractMetricType;
  events: Array<Scalars['String']>;
  tokens: ContractTokenLinkType;
  /** Date of created account */
  createdAt: Scalars['DateTimeType'];
};

export type ContractTypeMetricChartArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<ContractMetricChartFilterInputType>;
  sort?: Maybe<Array<ContractMetricChartSortInputType>>;
  pagination?: Maybe<ContractMetricChartPaginationInputType>;
};

export type ContractTypeMetricArgs = {
  filter?: Maybe<ContractMetricFilterInputType>;
};

export type ContractUpdateInputType = {
  /** Blockchain protocol */
  blockchain?: Maybe<BlockchainEnum>;
  /** Blockchain network */
  network?: Maybe<Scalars['String']>;
  /** Address */
  address?: Maybe<Scalars['String']>;
  /** Contract deployment block number */
  deployBlockNumber?: Maybe<Scalars['String']>;
  /** Adapter name */
  adapter?: Maybe<Scalars['String']>;
  /** Layout name */
  layout?: Maybe<Scalars['String']>;
  /** Usable automates */
  automates?: Maybe<Array<Scalars['String']>>;
  /** Usable autorestake contract adapter */
  autorestakeAdapter?: Maybe<Scalars['String']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Website URL */
  link?: Maybe<Scalars['String']>;
  /** Is hidden */
  hidden?: Maybe<Scalars['Boolean']>;
  /** Is deprecated */
  deprecated?: Maybe<Scalars['Boolean']>;
};

export enum ContractUserLinkTypeEnum {
  AutorestakeHide = 'autorestakeHide'
}

export type GovProposalFilterInputType = {
  network: Scalars['String'];
  contract: Scalars['String'];
  proposalId: Scalars['Int'];
  cache: Scalars['Boolean'];
};

export type GovProposalListFilterInputType = {
  network: Scalars['String'];
  contract: Scalars['String'];
  cache: Scalars['Boolean'];
};

export type GovProposalListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type GovProposalListQuery = {
  __typename?: 'GovProposalListQuery';
  /** Elements */
  list?: Maybe<Array<GovProposalType>>;
  pagination: Pagination;
};

export type GovProposalListSortInputType = {
  column: GovProposalListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum GovProposalListSortInputTypeColumnEnum {
  Id = 'id'
}

export enum GovProposalStateEnum {
  Pending = 'pending',
  Active = 'active',
  Canceled = 'canceled',
  Defeated = 'defeated',
  Succeeded = 'succeeded',
  Queued = 'queued',
  Expired = 'expired',
  Executed = 'executed'
}

export type GovProposalType = {
  __typename?: 'GovProposalType';
  /** Identificator */
  id: Scalars['Int'];
  /** Proposer */
  proposer: Scalars['String'];
  /** The timesamp that the protposal will be available for execution, set once the vote succeeds */
  eta: Scalars['Int'];
  /** Target addresses for calls */
  targets: Array<Scalars['String']>;
  /** List of values to be passed to the calls */
  values: Array<Scalars['String']>;
  /** List of function signatures to be calls */
  signatures: Array<Scalars['String']>;
  /** List of calldata to be passed to each call */
  calldatas: Array<Array<Scalars['String']>>;
  /** Start block of vote */
  startBlock: Scalars['Int'];
  /** End block of vote */
  endBlock: Scalars['Int'];
  /** End vote datetime */
  endVoteDate: Scalars['DateTimeType'];
  /** For votes */
  forVotes: Scalars['String'];
  /** Against votes */
  againstVotes: Scalars['String'];
  /** Abstain votes */
  abstainVotes: Scalars['String'];
  /** Is canceled */
  canceled: Scalars['Boolean'];
  /** Is executed */
  executed: Scalars['Boolean'];
  /** Current state */
  state: GovProposalStateEnum;
  /** Description */
  description: Scalars['String'];
};

export type GovReceiptFilterInputType = {
  network: Scalars['Int'];
  contract: Scalars['String'];
  proposalId: Scalars['Int'];
  wallet: Scalars['String'];
  cache: Scalars['Boolean'];
};

export enum GovReceiptSupportEnum {
  Against = 'against',
  For = 'for',
  Abstain = 'Abstain'
}

export type GovReceiptType = {
  __typename?: 'GovReceiptType';
  /** Whether or not a vote has been cast */
  hasVoted: Scalars['Boolean'];
  /** Whether or not the voter supports the proposal or abstains */
  support: GovReceiptSupportEnum;
  /** The number of votes the voter had, which were cast */
  votes: Scalars['String'];
  /** The reason given for the vote by the voter */
  reason: Scalars['String'];
};

export type GovTokenCirculationType = {
  __typename?: 'GovTokenCirculationType';
  total: Scalars['String'];
  market: GovTokenCirculationValueType;
  rewards: GovTokenCirculationValueType;
  developers: GovTokenCirculationValueType;
  community: GovTokenCirculationValueType;
  earlyEcosistem: GovTokenCirculationValueType;
};

export type GovTokenCirculationValueType = {
  __typename?: 'GovTokenCirculationValueType';
  timeLeft: Scalars['String'];
  timeTotal: Scalars['String'];
  tokenLeft: Scalars['String'];
  tokenTotal: Scalars['String'];
};

export type GovTokenFilterInputType = {
  network: Scalars['Int'];
  contract: Scalars['String'];
};

export type GovTokenType = {
  __typename?: 'GovTokenType';
  price: Scalars['String'];
  totalSupply: Scalars['String'];
  marketCap: Scalars['String'];
  circulation: GovTokenCirculationType;
};

export type GovVoteType = {
  __typename?: 'GovVoteType';
  balance: Scalars['String'];
  votes: Scalars['String'];
  delegates: Scalars['String'];
};

export type GovVotesFilterInputType = {
  network: Scalars['Int'];
  contract: Scalars['String'];
  wallet: Scalars['String'];
};

export type IntegrationExchangeApiConnectInputType = {
  /** Exchange object keys */
  objectKeys: Array<Scalars['String']>;
  /** Exchange object values */
  objectValues: Array<Scalars['String']>;
  /** Exchange */
  type: WalletExchangeTypeEnum;
};

export type LandingMediumPostType = {
  __typename?: 'LandingMediumPostType';
  /** Title */
  title: Scalars['String'];
  /** Text */
  text: Scalars['String'];
  /** Link */
  link: Scalars['String'];
  /** Posted at */
  createdAt: Scalars['DateTimeType'];
};

export enum LocaleEnum {
  EnUs = 'enUS',
  RuRu = 'ruRU'
}

export type MeInputType = {
  /** Timezone */
  timezone?: Maybe<Scalars['String']>;
};

export type MetricChangeType = {
  __typename?: 'MetricChangeType';
  day: Scalars['String'];
  week: Scalars['String'];
  month: Scalars['String'];
};

export type MetricChartType = {
  __typename?: 'MetricChartType';
  date: Scalars['DateTimeType'];
  entityIdentifier: Scalars['UuidType'];
  provider: Scalars['String'];
  min: Scalars['String'];
  max: Scalars['String'];
  avg: Scalars['String'];
  sum: Scalars['String'];
  count: Scalars['String'];
};

export enum MetricGroupEnum {
  Hour = 'hour',
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Year = 'year'
}

export enum MonitoringAutomateRunHistoryFilterEnum {
  /** Only successful */
  OnlySuccessful = 'onlySuccessful',
  /** Only failed */
  OnlyFailed = 'onlyFailed',
  /** All */
  All = 'all'
}

export type MonitoringStatisticsEarningsPointType = {
  __typename?: 'MonitoringStatisticsEarningsPointType';
  date: Scalars['DateTimeType'];
  number: Scalars['Float'];
};

export type MonitoringStatisticsPointType = {
  __typename?: 'MonitoringStatisticsPointType';
  date: Scalars['DateTimeType'];
  number: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  userUpdate: UserType;
  authThroughAdmin?: Maybe<AuthType>;
  authEth?: Maybe<AuthType>;
  authDemo?: Maybe<AuthType>;
  authWaves?: Maybe<AuthType>;
  addWallet?: Maybe<AuthType>;
  walletUpdate: WalletBlockchainType;
  walletDelete: Scalars['Boolean'];
  walletUpdateStatistics: Scalars['Boolean'];
  walletMetricScan: Scalars['Boolean'];
  integrationExchangeApiConnect: WalletExchangeType;
  integrationDisconnect: Scalars['Boolean'];
  protocolCreate: ProtocolType;
  protocolUpdate: ProtocolType;
  protocolResolveContracts: Scalars['Boolean'];
  contractScannerRegister: Scalars['Boolean'];
  protocolDelete: Scalars['Boolean'];
  protocolFavorite: Scalars['Boolean'];
  contractCreate: ContractType;
  contractUpdate: ContractType;
  contractDelete: Scalars['Boolean'];
  contractWalletLink: Scalars['Boolean'];
  contractWalletUnlink: Scalars['Boolean'];
  contractUserLink: Scalars['Boolean'];
  contractUserUnlink: Scalars['Boolean'];
  contractMetricScan: Scalars['Boolean'];
  userNotificationToggle: Scalars['Boolean'];
  tokenUpdate: TokenType;
  tokenAliasCreate: TokenAlias;
  tokenAliasUpdate: TokenAlias;
  tokenAliasDelete: Scalars['Boolean'];
  proposalCreate: ProposalType;
  proposalUpdate: ProposalType;
  proposalDelete: Scalars['Boolean'];
  vote: VoteType;
  unvote: Scalars['Boolean'];
  proposalTag: Array<ProposalTagType>;
  proposalUntag: Scalars['Boolean'];
  userContactCreate: UserContactType;
  userContactUpdate: UserContactType;
  userContactEmailConfirm: Scalars['Boolean'];
  userContactDelete: Scalars['Boolean'];
  productCreate: StoreProductType;
  productUpdate: StoreProductType;
  productDelete: Scalars['Boolean'];
  billingTransferCreate: BillingTransferType;
  automateTriggerCreate: AutomateTriggerType;
  automateTriggerUpdate: AutomateTriggerType;
  automateTriggerDelete: Scalars['Boolean'];
  automateConditionCreate: AutomateConditionType;
  automateConditionUpdate: AutomateConditionType;
  automateConditionDelete: Scalars['Boolean'];
  automateActionCreate: AutomateActionType;
  automateActionUpdate: AutomateActionType;
  automateActionDelete: Scalars['Boolean'];
  automateContractCreate: AutomateContractType;
  automateContractUpdate: AutomateContractType;
  automateContractDelete: Scalars['Boolean'];
  tradingAuth?: Maybe<TradingAuthType>;
};

export type MutationUserUpdateArgs = {
  id: Scalars['UuidType'];
  input: UserUpdateInputType;
};

export type MutationAuthThroughAdminArgs = {
  userId: Scalars['UuidType'];
};

export type MutationAuthEthArgs = {
  input: AuthEthereumInputType;
};

export type MutationAuthWavesArgs = {
  input: AuthWavesInputType;
};

export type MutationAddWalletArgs = {
  input: AddWalletInputType;
};

export type MutationWalletUpdateArgs = {
  id: Scalars['UuidType'];
  input: WalletUpdateInputType;
};

export type MutationWalletDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationWalletUpdateStatisticsArgs = {
  id: Scalars['UuidType'];
};

export type MutationWalletMetricScanArgs = {
  wallet: Scalars['UuidType'];
  contract: Scalars['UuidType'];
  txId?: Maybe<Scalars['String']>;
};

export type MutationIntegrationExchangeApiConnectArgs = {
  input: IntegrationExchangeApiConnectInputType;
};

export type MutationIntegrationDisconnectArgs = {
  id: Scalars['UuidType'];
};

export type MutationProtocolCreateArgs = {
  input: ProtocolCreateInputType;
};

export type MutationProtocolUpdateArgs = {
  id: Scalars['UuidType'];
  input: ProtocolUpdateInputType;
};

export type MutationProtocolResolveContractsArgs = {
  id: Scalars['UuidType'];
  input: ProtocolResolveContractsInputType;
};

export type MutationContractScannerRegisterArgs = {
  id: Scalars['UuidType'];
  events: Array<Scalars['String']>;
};

export type MutationProtocolDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationProtocolFavoriteArgs = {
  input: ProtocolFavoriteInputType;
};

export type MutationContractCreateArgs = {
  protocol: Scalars['UuidType'];
  input: ContractCreateInputType;
};

export type MutationContractUpdateArgs = {
  id: Scalars['UuidType'];
  input: ContractUpdateInputType;
};

export type MutationContractDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationContractWalletLinkArgs = {
  contract: Scalars['UuidType'];
  wallet: Scalars['UuidType'];
};

export type MutationContractWalletUnlinkArgs = {
  contract: Scalars['UuidType'];
  wallet: Scalars['UuidType'];
};

export type MutationContractUserLinkArgs = {
  contract: Scalars['UuidType'];
  user: Scalars['UuidType'];
  type?: Maybe<ContractUserLinkTypeEnum>;
};

export type MutationContractUserUnlinkArgs = {
  contract: Scalars['UuidType'];
  user: Scalars['UuidType'];
  type?: Maybe<ContractUserLinkTypeEnum>;
};

export type MutationContractMetricScanArgs = {
  contract: Scalars['UuidType'];
};

export type MutationUserNotificationToggleArgs = {
  contact: Scalars['UuidType'];
  type: UserNotificationTypeEnum;
  state: Scalars['Boolean'];
  hour: Scalars['Int'];
};

export type MutationTokenUpdateArgs = {
  id: Scalars['UuidType'];
  input: TokenUpdateInputType;
};

export type MutationTokenAliasCreateArgs = {
  input: TokenAliasCreateInputType;
};

export type MutationTokenAliasUpdateArgs = {
  id: Scalars['UuidType'];
  input: TokenAliasUpdateInputType;
};

export type MutationTokenAliasDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationProposalCreateArgs = {
  input: ProposalCreateInputType;
};

export type MutationProposalUpdateArgs = {
  id: Scalars['UuidType'];
  input: ProposalUpdateInputType;
};

export type MutationProposalDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationVoteArgs = {
  proposal: Scalars['UuidType'];
};

export type MutationUnvoteArgs = {
  proposal: Scalars['UuidType'];
};

export type MutationProposalTagArgs = {
  proposal: Scalars['UuidType'];
  tag: Array<ProposalTagEnum>;
};

export type MutationProposalUntagArgs = {
  proposal: Scalars['UuidType'];
  tag: Array<ProposalTagEnum>;
};

export type MutationUserContactCreateArgs = {
  input: UserContactCreateInputType;
};

export type MutationUserContactUpdateArgs = {
  id: Scalars['UuidType'];
  input: UserContactUpdateInputType;
};

export type MutationUserContactEmailConfirmArgs = {
  input: UserContactConfirmEmailInputType;
};

export type MutationUserContactDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationProductCreateArgs = {
  input: StoreProductCreateInputType;
};

export type MutationProductUpdateArgs = {
  id: Scalars['UuidType'];
  input: StoreProductUpdateInputType;
};

export type MutationProductDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationBillingTransferCreateArgs = {
  input: BillingTransferCreateInputType;
};

export type MutationAutomateTriggerCreateArgs = {
  input: AutomateTriggerCreateInputType;
};

export type MutationAutomateTriggerUpdateArgs = {
  input: AutomateTriggerUpdateInputType;
};

export type MutationAutomateTriggerDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationAutomateConditionCreateArgs = {
  input: AutomateConditionCreateInputType;
};

export type MutationAutomateConditionUpdateArgs = {
  input: AutomateConditionUpdateInputType;
};

export type MutationAutomateConditionDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationAutomateActionCreateArgs = {
  input: AutomateActionCreateInputType;
};

export type MutationAutomateActionUpdateArgs = {
  input: AutomateActionUpdateInputType;
};

export type MutationAutomateActionDeleteArgs = {
  id: Scalars['UuidType'];
};

export type MutationAutomateContractCreateArgs = {
  input: AutomateContractCreateInputType;
};

export type MutationAutomateContractUpdateArgs = {
  input: AutomateContractUpdateInputType;
};

export type MutationAutomateContractDeleteArgs = {
  id: Scalars['UuidType'];
};

export type OnTokenMetricUpdatedFilterInputType = {
  token?: Maybe<Array<Scalars['UuidType']>>;
  contract?: Maybe<Array<Scalars['UuidType']>>;
  wallet?: Maybe<Array<Scalars['UuidType']>>;
  user?: Maybe<Array<Scalars['UuidType']>>;
};

export type OnTransferCreatedFilterInputType = {
  wallet?: Maybe<Array<Scalars['UuidType']>>;
  user?: Maybe<Array<Scalars['UuidType']>>;
};

export type OnTransferUpdatedFilterInputType = {
  wallet?: Maybe<Array<Scalars['UuidType']>>;
  user?: Maybe<Array<Scalars['UuidType']>>;
};

export type OnWalletCreatedFilterInputType = {
  user?: Maybe<Array<Scalars['UuidType']>>;
};

export type OnWalletMetricUpdatedFilterInputType = {
  contract?: Maybe<Array<Scalars['UuidType']>>;
  wallet?: Maybe<Array<Scalars['UuidType']>>;
  user?: Maybe<Array<Scalars['UuidType']>>;
};

export type Pagination = {
  __typename?: 'Pagination';
  /** Count of list elements */
  count: Scalars['Int'];
};

export type ProposalCreateInputType = {
  /** Title */
  title: Scalars['String'];
  /** Description */
  description: Scalars['String'];
};

export type ProposalFilterInputType = {
  id: Scalars['String'];
};

export type ProposalListFilterInputType = {
  author?: Maybe<Scalars['UuidType']>;
  status?: Maybe<ProposalStatusEnum>;
  tag?: Maybe<Array<ProposalTagEnum>>;
  search?: Maybe<Scalars['String']>;
};

export type ProposalListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type ProposalListQuery = {
  __typename?: 'ProposalListQuery';
  /** Elements */
  list?: Maybe<Array<ProposalType>>;
  pagination: Pagination;
};

export type ProposalListSortInputType = {
  column: ProposalListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum ProposalListSortInputTypeColumnEnum {
  Id = 'id',
  Title = 'title',
  CreatedAt = 'createdAt'
}

export enum ProposalStatusEnum {
  /** Proposal is open for vote */
  Open = 'open',
  /** Proposal in process */
  InProcess = 'in_process',
  /** Proposal is executed */
  Executed = 'executed',
  /** Proposal is defeated */
  Defeated = 'defeated'
}

export enum ProposalTagEnum {
  TokenRequest = 'tokenRequest',
  ProtocolRequest = 'protocolRequest',
  BlockchainRequest = 'blockchainRequest',
  FeatureRequest = 'featureRequest',
  BugReport = 'bugReport'
}

export type ProposalTagType = {
  __typename?: 'ProposalTagType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Voting user */
  user: UserType;
  /** Tag value */
  tag: ProposalTagEnum;
  /** Date of created */
  createdAt: Scalars['DateTimeType'];
};

export type ProposalType = {
  __typename?: 'ProposalType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Title */
  title: Scalars['String'];
  /** Description */
  description: Scalars['String'];
  /** Current status */
  status: ProposalStatusEnum;
  /** Author */
  author?: Maybe<UserType>;
  votes: VoteListType;
  tags: Array<ProposalTagEnum>;
  /** Planned date */
  plannedAt?: Maybe<Scalars['DateTimeType']>;
  /** Released date */
  releasedAt?: Maybe<Scalars['DateTimeType']>;
  /** Date of updated */
  updatedAt: Scalars['DateTimeType'];
  /** Date of created */
  createdAt: Scalars['DateTimeType'];
};

export type ProposalTypeVotesArgs = {
  filter?: Maybe<VoteListFilterInputType>;
  sort?: Maybe<Array<VoteListSortInputType>>;
  pagination?: Maybe<VoteListPaginationInputType>;
};

export type ProposalUpdateInputType = {
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Current status */
  status?: Maybe<ProposalStatusEnum>;
  /** Planned date */
  plannedAt?: Maybe<Scalars['DateTimeType']>;
  /** Released date */
  releasedAt?: Maybe<Scalars['DateTimeType']>;
};

export type ProtocolCreateInputType = {
  /** Adapter name */
  adapter: Scalars['String'];
  /** Name */
  name: Scalars['String'];
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Icon image URL */
  icon?: Maybe<Scalars['String']>;
  /** Website URL */
  link?: Maybe<Scalars['String']>;
  /** Links */
  links?: Maybe<ProtocolLinkMapInputType>;
  /** Is hidden */
  hidden?: Maybe<Scalars['Boolean']>;
};

export type ProtocolFavoriteInputType = {
  /** Target protocol */
  protocol: Scalars['UuidType'];
  /** Is favorite */
  favorite: Scalars['Boolean'];
};

export type ProtocolFilterInputType = {
  id?: Maybe<Scalars['UuidType']>;
  adapter?: Maybe<Scalars['String']>;
};

export type ProtocolLinkInputType = {
  /** Identificator */
  id: Scalars['UuidType'];
  /** Name */
  name: Scalars['String'];
  /** Value */
  value: Scalars['String'];
};

export type ProtocolLinkMapInputType = {
  social?: Maybe<Array<ProtocolLinkInputType>>;
  listing?: Maybe<Array<ProtocolLinkInputType>>;
  audit?: Maybe<Array<ProtocolLinkInputType>>;
  other?: Maybe<Array<ProtocolLinkInputType>>;
};

export type ProtocolLinkMapType = {
  __typename?: 'ProtocolLinkMapType';
  social: Array<ProtocolLinkType>;
  listing: Array<ProtocolLinkType>;
  audit: Array<ProtocolLinkType>;
  other: Array<ProtocolLinkType>;
};

export type ProtocolLinkType = {
  __typename?: 'ProtocolLinkType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Name */
  name: Scalars['String'];
  /** Value */
  value: Scalars['String'];
};

export type ProtocolListFilterAutomateInputType = {
  lpTokensManager?: Maybe<Scalars['Boolean']>;
};

export type ProtocolListFilterInputType = {
  /** Target ID */
  id?: Maybe<Array<Scalars['UuidType']>>;
  blockchain?: Maybe<BlockchainFilterInputType>;
  /** Is favorite */
  favorite?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
  isDebank?: Maybe<Scalars['Boolean']>;
  automate?: Maybe<ProtocolListFilterAutomateInputType>;
};

export type ProtocolListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type ProtocolListQuery = {
  __typename?: 'ProtocolListQuery';
  /** Elements */
  list?: Maybe<Array<ProtocolType>>;
  pagination: Pagination;
};

export type ProtocolListSortInputType = {
  column: ProtocolListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum ProtocolListSortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  CreatedAt = 'createdAt'
}

export type ProtocolMetricChartContractsFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type ProtocolMetricChartContractsPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type ProtocolMetricChartContractsSortInputType = {
  column: ProtocolMetricChartContractsSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum ProtocolMetricChartContractsSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export type ProtocolMetricChartFilterInputType = {
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type ProtocolMetricChartPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type ProtocolMetricChartProtocolsFilterInputType = {
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type ProtocolMetricChartProtocolsPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type ProtocolMetricChartProtocolsSortInputType = {
  column: ProtocolMetricChartProtocolsSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum ProtocolMetricChartProtocolsSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export type ProtocolMetricChartSortInputType = {
  column: ProtocolMetricChartSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum ProtocolMetricChartSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export type ProtocolMetricChartUsersFilterInputType = {
  /** Target users id */
  user: Array<Maybe<Scalars['UuidType']>>;
  blockchain?: Maybe<BlockchainFilterInputType>;
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type ProtocolMetricChartUsersPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type ProtocolMetricChartUsersSortInputType = {
  column: ProtocolMetricChartUsersSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum ProtocolMetricChartUsersSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export type ProtocolMetricType = {
  __typename?: 'ProtocolMetricType';
  tvl: Scalars['String'];
  uniqueWalletsCount: Scalars['String'];
  myAPY: Scalars['String'];
  myStaked: Scalars['String'];
  myStakedChange: MetricChangeType;
  myEarned: Scalars['String'];
  myEarnedChange: MetricChangeType;
  myAPYBoost: Scalars['String'];
  myMinUpdatedAt?: Maybe<Scalars['DateTimeType']>;
};

export type ProtocolResolveContractsInputType = {
  /** Contracts resolver */
  resolver?: Scalars['String'];
  /** Blockchain type */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  /** Blockchain network id */
  events: Array<Scalars['String']>;
};

export type ProtocolSocialPostListFilterInputType = {
  provider?: Maybe<ProtocolSocialPostProviderEnum>;
};

export type ProtocolSocialPostListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type ProtocolSocialPostListSortInputType = {
  column: ProtocolSocialPostListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum ProtocolSocialPostListSortInputTypeColumnEnum {
  Id = 'id',
  Title = 'title',
  CreatedAt = 'createdAt'
}

export type ProtocolSocialPostListType = {
  __typename?: 'ProtocolSocialPostListType';
  /** Elements */
  list?: Maybe<Array<ProtocolSocialPostType>>;
  pagination: Pagination;
};

export enum ProtocolSocialPostProviderEnum {
  Medium = 'medium',
  Twitter = 'twitter'
}

export type ProtocolSocialPostType = {
  __typename?: 'ProtocolSocialPostType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Provider */
  provider: ProtocolSocialPostProviderEnum;
  /** Title */
  title: Scalars['String'];
  /** Content (maybe HTML) */
  content: Scalars['String'];
  /** URL */
  link: Scalars['String'];
  /** Date of created */
  createdAt: Scalars['DateTimeType'];
};

export type ProtocolType = {
  __typename?: 'ProtocolType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Adapter name */
  adapter: Scalars['String'];
  /** Debank Identifier */
  debankId?: Maybe<Scalars['String']>;
  /** Name */
  name: Scalars['String'];
  /** Description */
  description: Scalars['String'];
  /** Icon image URL */
  icon?: Maybe<Scalars['String']>;
  /** Website URL */
  link?: Maybe<Scalars['String']>;
  /** Links */
  links: ProtocolLinkMapType;
  /** Is hidden */
  hidden: Scalars['Boolean'];
  /** Preview picture */
  previewPicture?: Maybe<Scalars['String']>;
  favorite: Scalars['Boolean'];
  contracts: ContractListType;
  contractsDebank: ContractDebankListType;
  metricChart: Array<MetricChartType>;
  metricChartProtocols: Array<MetricChartType>;
  metricChartContracts: Array<MetricChartType>;
  metricChartUsers: Array<MetricChartType>;
  metric: ProtocolMetricType;
  socialPosts: ProtocolSocialPostListType;
  /** Date of created */
  createdAt: Scalars['DateTimeType'];
};

export type ProtocolTypeContractsArgs = {
  filter?: Maybe<ContractListFilterInputType>;
  sort?: Maybe<Array<ContractListSortInputType>>;
  pagination?: Maybe<ContractListPaginationInputType>;
};

export type ProtocolTypeContractsDebankArgs = {
  filter?: Maybe<ContractDebankListFilterInputType>;
  sort?: Maybe<Array<ContractDebankListSortInputType>>;
  pagination?: Maybe<ContractDebankListPaginationInputType>;
};

export type ProtocolTypeMetricChartArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<ProtocolMetricChartFilterInputType>;
  sort?: Maybe<Array<ProtocolMetricChartSortInputType>>;
  pagination?: Maybe<ProtocolMetricChartPaginationInputType>;
};

export type ProtocolTypeMetricChartProtocolsArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<ProtocolMetricChartProtocolsFilterInputType>;
  sort?: Maybe<Array<ProtocolMetricChartProtocolsSortInputType>>;
  pagination?: Maybe<ProtocolMetricChartProtocolsPaginationInputType>;
};

export type ProtocolTypeMetricChartContractsArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<ProtocolMetricChartContractsFilterInputType>;
  sort?: Maybe<Array<ProtocolMetricChartContractsSortInputType>>;
  pagination?: Maybe<ProtocolMetricChartContractsPaginationInputType>;
};

export type ProtocolTypeMetricChartUsersArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<ProtocolMetricChartUsersFilterInputType>;
  sort?: Maybe<Array<ProtocolMetricChartUsersSortInputType>>;
  pagination?: Maybe<ProtocolMetricChartUsersPaginationInputType>;
};

export type ProtocolTypeSocialPostsArgs = {
  filter?: Maybe<ProtocolSocialPostListFilterInputType>;
  sort?: Maybe<Array<ProtocolSocialPostListSortInputType>>;
  pagination?: Maybe<ProtocolSocialPostListPaginationInputType>;
};

export type ProtocolUpdateInputType = {
  /** Adapter name */
  adapter?: Maybe<Scalars['String']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Icon image URL */
  icon?: Maybe<Scalars['String']>;
  /** Preview picture URL */
  previewPicture?: Maybe<Scalars['String']>;
  /** Website URL */
  link?: Maybe<Scalars['String']>;
  /** Links */
  links?: Maybe<ProtocolLinkMapInputType>;
  /** Is hidden */
  hidden?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  ping: Scalars['String'];
  config: ConfigType;
  me?: Maybe<UserType>;
  userReferrer: UserReferrerCodeType;
  users: UserListQuery;
  protocol?: Maybe<ProtocolType>;
  protocols: ProtocolListQuery;
  userProtocols: UserProtocolListQuery;
  contracts: ContractListType;
  proposal?: Maybe<ProposalType>;
  proposals: ProposalListQuery;
  landingMediumPosts: Array<LandingMediumPostType>;
  userContact?: Maybe<UserContactType>;
  userContacts: UserContactListQuery;
  userNotifications: Array<UserNotificationType>;
  tokens: TokenListQuery;
  tokenAlias?: Maybe<TokenAlias>;
  tokensAlias: TokenAliasListQuery;
  products: StoreProductListQuery;
  productPriceFeed: StoreProductPriceFeedType;
  billingBalance: BalanceMetaType;
  govProposal?: Maybe<GovProposalType>;
  govProposals: GovProposalListQuery;
  govReceipt?: Maybe<GovReceiptType>;
  govVotes: GovVoteType;
  automateDescription: AutomatesDescriptionType;
  automateTrigger?: Maybe<AutomateTriggerType>;
  automateTriggers: AutomateTriggerListQuery;
  automateContracts: AutomateContractListQuery;
  govToken: GovTokenType;
  restakeStrategy: RestakeStrategyType;
  treasury: TreasuryType;
  monitoringUsersRegisteringHistory: Array<MonitoringStatisticsPointType>;
  monitoringWalletsRegisteringHistory: Array<MonitoringStatisticsPointType>;
  monitoringAutomateRunHistory: Array<MonitoringStatisticsPointType>;
  monitoringAutomatesCreationHistory: Array<MonitoringStatisticsPointType>;
  monitoringAutoRestakeAutomatesCreationHistory: Array<MonitoringStatisticsPointType>;
  monitoringProtocolEarningsHistory: Array<MonitoringStatisticsEarningsPointType>;
};

export type QueryMeArgs = {
  input?: Maybe<MeInputType>;
};

export type QueryUserReferrerArgs = {
  code: Scalars['String'];
};

export type QueryUsersArgs = {
  filter?: Maybe<UserListFilterInputType>;
  sort?: Maybe<Array<UserListSortInputType>>;
  pagination?: Maybe<UserListPaginationInputType>;
};

export type QueryProtocolArgs = {
  filter: ProtocolFilterInputType;
};

export type QueryProtocolsArgs = {
  filter?: Maybe<ProtocolListFilterInputType>;
  sort?: Maybe<Array<ProtocolListSortInputType>>;
  pagination?: Maybe<ProtocolListPaginationInputType>;
};

export type QueryUserProtocolsArgs = {
  filter: UserProtocolListFilterInputType;
  sort?: Maybe<Array<UserProtocolListSortInputType>>;
  pagination?: Maybe<UserProtocolListPaginationInputType>;
};

export type QueryContractsArgs = {
  filter?: Maybe<ContractListFilterInputType>;
  sort?: Maybe<Array<ContractListSortInputType>>;
  pagination?: Maybe<ContractListPaginationInputType>;
};

export type QueryProposalArgs = {
  filter: ProposalFilterInputType;
};

export type QueryProposalsArgs = {
  filter?: Maybe<ProposalListFilterInputType>;
  sort?: Maybe<Array<ProposalListSortInputType>>;
  pagination?: Maybe<ProposalListPaginationInputType>;
};

export type QueryUserContactArgs = {
  filter: UserContactFilterInputType;
};

export type QueryUserContactsArgs = {
  filter?: Maybe<UserContactListQueryFilterInputType>;
  sort?: Maybe<Array<UserContactListSortInputType>>;
  pagination?: Maybe<UserContactListPaginationInputType>;
};

export type QueryTokensArgs = {
  filter?: Maybe<TokenListQueryFilterInputType>;
  sort?: Maybe<Array<TokenListQuerySortInputType>>;
  pagination?: Maybe<TokenListQueryPaginationInputType>;
};

export type QueryTokenAliasArgs = {
  filter: TokenAliasFilterInputType;
};

export type QueryTokensAliasArgs = {
  filter?: Maybe<TokenAliasListFilterInputType>;
  sort?: Maybe<Array<TokenAliasListSortInputType>>;
  pagination?: Maybe<TokenAliasListPaginationInputType>;
};

export type QueryProductsArgs = {
  filter?: Maybe<StoreProductListQueryFilterInputType>;
  sort?: Maybe<Array<StoreProductListQuerySortInputType>>;
  pagination?: Maybe<StoreProductListQueryPaginationInputType>;
};

export type QueryProductPriceFeedArgs = {
  network: Scalars['String'];
  id: Scalars['UuidType'];
};

export type QueryBillingBalanceArgs = {
  blockchain: BlockchainEnum;
  network: Scalars['String'];
};

export type QueryGovProposalArgs = {
  filter: GovProposalFilterInputType;
};

export type QueryGovProposalsArgs = {
  filter: GovProposalListFilterInputType;
  sort?: Maybe<Array<GovProposalListSortInputType>>;
  pagination?: Maybe<GovProposalListPaginationInputType>;
};

export type QueryGovReceiptArgs = {
  filter: GovReceiptFilterInputType;
};

export type QueryGovVotesArgs = {
  filter: GovVotesFilterInputType;
};

export type QueryAutomateTriggerArgs = {
  filter: AutomateTriggerFilterInputType;
};

export type QueryAutomateTriggersArgs = {
  filter?: Maybe<AutomateTriggerListFilterInputType>;
  sort?: Maybe<Array<AutomateTriggerListSortInputType>>;
  pagination?: Maybe<AutomateTriggerListPaginationInputType>;
};

export type QueryAutomateContractsArgs = {
  filter?: Maybe<AutomateContractListFilterInputType>;
  sort?: Maybe<Array<AutomateContractListSortInputType>>;
  pagination?: Maybe<AutomateContractListPaginationInputType>;
};

export type QueryGovTokenArgs = {
  filter: GovTokenFilterInputType;
};

export type QueryRestakeStrategyArgs = {
  blockchain?: Maybe<BlockchainEnum>;
  network?: Maybe<Scalars['String']>;
  balance: Scalars['Float'];
  apy: Scalars['Float'];
};

export type QueryMonitoringAutomateRunHistoryArgs = {
  filter: MonitoringAutomateRunHistoryFilterEnum;
};

export type QueryMonitoringProtocolEarningsHistoryArgs = {
  network: Scalars['String'];
};

export type RestakeStrategyPointType = {
  __typename?: 'RestakeStrategyPointType';
  v: Scalars['Float'];
  t: Scalars['Float'];
};

export type RestakeStrategyType = {
  __typename?: 'RestakeStrategyType';
  hold: Array<RestakeStrategyPointType>;
  everyDay: Array<RestakeStrategyPointType>;
  optimal: Array<RestakeStrategyPointType>;
};

export enum SortOrderEnum {
  /** Ascending */
  Asc = 'asc',
  /** Descending */
  Desc = 'desc'
}

export enum StoreProductCodeEnum {
  /** Notification */
  Notification = 'notification'
}

export type StoreProductCreateInputType = {
  /** Number of blockchain */
  number: Scalars['Int'];
  /** System code */
  code: StoreProductCodeEnum;
  /** Name */
  name: Scalars['String'];
  /** Description */
  description: Scalars['String'];
  /** Price in USD */
  priceUSD: Scalars['Float'];
  /** Amount of product */
  amount: Scalars['Int'];
};

export type StoreProductListQuery = {
  __typename?: 'StoreProductListQuery';
  /** Elements */
  list?: Maybe<Array<StoreProductType>>;
  pagination: Pagination;
};

export type StoreProductListQueryFilterInputType = {
  code?: Maybe<Array<StoreProductCodeEnum>>;
  search?: Maybe<Scalars['String']>;
};

export type StoreProductListQueryPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type StoreProductListQuerySortInputType = {
  column: StoreProductListQuerySortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum StoreProductListQuerySortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  CreatedAt = 'createdAt'
}

export type StoreProductPriceFeedType = {
  __typename?: 'StoreProductPriceFeedType';
  product: StoreProductType;
  /** Price in native token */
  price: Scalars['Float'];
};

export type StoreProductType = {
  __typename?: 'StoreProductType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Number of blockchain */
  number: Scalars['Int'];
  /** System code */
  code: StoreProductCodeEnum;
  /** Name */
  name: Scalars['String'];
  /** Description */
  description: Scalars['String'];
  /** Price in USD */
  priceUSD: Scalars['Float'];
  /** Amount product */
  amount: Scalars['Int'];
  purchases: StorePurchaseListType;
  /** Date of updated */
  updatedAt: Scalars['DateTimeType'];
  /** Date of created */
  createdAt: Scalars['DateTimeType'];
};

export type StoreProductTypePurchasesArgs = {
  filter?: Maybe<StorePurchaseListFilterInputType>;
  sort?: Maybe<Array<StorePurchaseListSortInputType>>;
  pagination?: Maybe<StorePurchaseListPaginationInputType>;
};

export type StoreProductUpdateInputType = {
  /** Number of blockchain */
  number: Scalars['Int'];
  /** System code */
  code: StoreProductCodeEnum;
  /** Name */
  name: Scalars['String'];
  /** Description */
  description: Scalars['String'];
  /** Price in USD */
  priceUSD: Scalars['Float'];
  /** Amount of product */
  amount: Scalars['Int'];
};

export type StorePurchaseListFilterInputType = {
  user?: Maybe<Scalars['UuidType']>;
};

export type StorePurchaseListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type StorePurchaseListSortInputType = {
  column: StorePurchaseListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum StorePurchaseListSortInputTypeColumnEnum {
  Id = 'id',
  CreatedAt = 'createdAt'
}

export type StorePurchaseListType = {
  __typename?: 'StorePurchaseListType';
  /** Elements */
  list?: Maybe<Array<StorePurchaseType>>;
  pagination: Pagination;
};

export type StorePurchaseType = {
  __typename?: 'StorePurchaseType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Blockchain type */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  /** Account */
  account: Scalars['String'];
  /** Amount product */
  amount: Scalars['Int'];
  /** Transaction id */
  tx: Scalars['String'];
  /** Date of created */
  createdAt: Scalars['DateTimeType'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onWalletCreated: WalletBlockchainType;
  onWalletMetricUpdated: WalletMetricUpdatedEvent;
  onTokenMetricUpdated: TokenMetricUpdatedEvent;
  onBillingTransferCreated: BillingTransferType;
  onBillingTransferUpdated: BillingTransferType;
};

export type SubscriptionOnWalletCreatedArgs = {
  filter?: Maybe<OnWalletCreatedFilterInputType>;
};

export type SubscriptionOnWalletMetricUpdatedArgs = {
  filter?: Maybe<OnWalletMetricUpdatedFilterInputType>;
};

export type SubscriptionOnTokenMetricUpdatedArgs = {
  filter?: Maybe<OnTokenMetricUpdatedFilterInputType>;
};

export type SubscriptionOnBillingTransferCreatedArgs = {
  filter?: Maybe<OnTransferCreatedFilterInputType>;
};

export type SubscriptionOnBillingTransferUpdatedArgs = {
  filter?: Maybe<OnTransferUpdatedFilterInputType>;
};

export type TokenAlias = {
  __typename?: 'TokenAlias';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Name */
  name: Scalars['String'];
  /** Symbol */
  symbol: Scalars['String'];
  /** Logo url */
  logoUrl?: Maybe<Scalars['String']>;
  /** Token liquidity */
  liquidity: TokenAliasLiquidityEnum;
  metric: TokenAliasMetricType;
  tokens: TokenListType;
};

export type TokenAliasTokensArgs = {
  filter?: Maybe<TokenListFilterInputType>;
  sort?: Maybe<Array<TokenListSortInputType>>;
  pagination?: Maybe<TokenListPaginationInputType>;
};

export type TokenAliasCreateInputType = {
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Symbol */
  symbol?: Maybe<Scalars['String']>;
  /** Token liquidity */
  liquidity?: Maybe<TokenAliasLiquidityEnum>;
};

export type TokenAliasFilterInputType = {
  id: Scalars['String'];
};

export enum TokenAliasLiquidityEnum {
  Stable = 'stable',
  Unstable = 'unstable',
  Trash = 'trash',
  Unknown = 'unknown'
}

export type TokenAliasListFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  liquidity?: Maybe<TokenAliasLiquidityEnum>;
  symbol?: Maybe<Scalars['String']>;
  hasLogo?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
};

export type TokenAliasListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type TokenAliasListQuery = {
  __typename?: 'TokenAliasListQuery';
  /** Elements */
  list?: Maybe<Array<TokenAlias>>;
  pagination: Pagination;
};

export type TokenAliasListSortInputType = {
  column: TokenAliasListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum TokenAliasListSortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  CreatedAt = 'createdAt'
}

export type TokenAliasMetricType = {
  __typename?: 'TokenAliasMetricType';
  myBalance: Scalars['String'];
  myUSD: Scalars['String'];
  myUSDChange: MetricChangeType;
  myPortfolioPercent: Scalars['String'];
};

export type TokenAliasStakedStatistics = {
  __typename?: 'TokenAliasStakedStatistics';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Name */
  name: Scalars['String'];
  /** Symbol */
  symbol: Scalars['String'];
  /** Logo url */
  logoUrl?: Maybe<Scalars['String']>;
  /** Token liquidity */
  liquidity: TokenAliasLiquidityEnum;
  metric: TokenAliasMetricType;
  tokens: TokenListInteractedType;
};

export type TokenAliasStakedStatisticsTokensArgs = {
  filter?: Maybe<TokenListInteractedFilterInputType>;
  sort?: Maybe<Array<TokenListInteractedSortInputType>>;
  pagination?: Maybe<TokenListInteractedPaginationInputType>;
};

export type TokenAliasUpdateInputType = {
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Symbol */
  symbol?: Maybe<Scalars['String']>;
  /** Token liquidity */
  liquidity?: Maybe<TokenAliasLiquidityEnum>;
};

export type TokenListFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  address?: Maybe<Array<Scalars['String']>>;
  search?: Maybe<Scalars['String']>;
};

export type TokenListInteractedFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  address?: Maybe<Array<Scalars['String']>>;
  search?: Maybe<Scalars['String']>;
};

export type TokenListInteractedPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type TokenListInteractedSortInputType = {
  column: TokenListInteractedSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum TokenListInteractedSortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Address = 'address',
  CreatedAt = 'createdAt'
}

export type TokenListInteractedType = {
  __typename?: 'TokenListInteractedType';
  /** Elements */
  list?: Maybe<Array<TokenType>>;
  pagination: Pagination;
};

export type TokenListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type TokenListQuery = {
  __typename?: 'TokenListQuery';
  /** Elements */
  list?: Maybe<Array<TokenType>>;
  pagination: Pagination;
};

export type TokenListQueryFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  address?: Maybe<Array<Scalars['String']>>;
  tradable?: Maybe<Scalars['Boolean']>;
  tokenAlias?: Maybe<Scalars['UuidType']>;
  isPriceFeedNedded?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
};

export type TokenListQueryPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type TokenListQuerySortInputType = {
  column: TokenListQuerySortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum TokenListQuerySortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  CreatedAt = 'createdAt'
}

export type TokenListSortInputType = {
  column: TokenListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum TokenListSortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Address = 'address',
  CreatedAt = 'createdAt'
}

export type TokenListType = {
  __typename?: 'TokenListType';
  /** Elements */
  list?: Maybe<Array<TokenType>>;
  pagination: Pagination;
};

export type TokenMetricUpdatedEvent = {
  __typename?: 'TokenMetricUpdatedEvent';
  id: Scalars['UuidType'];
  wallet: WalletBlockchainType;
  contract?: Maybe<ContractType>;
  token: WalletBlockchainType;
};

export type TokenPriceFeedCoingeckoAddressInputType = {
  platform: TokenPriceFeedCoingeckoPlatformEnum;
  address: Scalars['String'];
};

export type TokenPriceFeedCoingeckoAddressType = {
  __typename?: 'TokenPriceFeedCoingeckoAddressType';
  type: Scalars['String'];
  platform: TokenPriceFeedCoingeckoPlatformEnum;
  address: Scalars['String'];
};

export type TokenPriceFeedCoingeckoIdInputType = {
  id: Scalars['String'];
};

export type TokenPriceFeedCoingeckoIdType = {
  __typename?: 'TokenPriceFeedCoingeckoIdType';
  type: Scalars['String'];
  id: Scalars['String'];
};

export enum TokenPriceFeedCoingeckoPlatformEnum {
  Ethereum = 'ethereum',
  BinanceSmartChain = 'binance_smart_chain',
  Avalanche = 'avalanche',
  Moonriver = 'moonriver',
  PolygonPos = 'polygon_pos',
  Fantom = 'fantom',
  Cronos = 'cronos',
  ArbitrumOne = 'arbitrum_one',
  OptimisticEthereum = 'optimistic_ethereum'
}

export type TokenPriceFeedInputType = {
  coingeckoId?: Maybe<TokenPriceFeedCoingeckoIdInputType>;
  coingeckoAddress?: Maybe<TokenPriceFeedCoingeckoAddressInputType>;
};

export type TokenPriceFeedType =
  | TokenPriceFeedCoingeckoIdType
  | TokenPriceFeedCoingeckoAddressType;

export type TokenType = {
  __typename?: 'TokenType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Token alias id */
  alias?: Maybe<TokenAlias>;
  /** Blockchain type */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  /** Address */
  address: Scalars['String'];
  /** Name */
  name: Scalars['String'];
  /** Symbol */
  symbol: Scalars['String'];
  /** Decimals */
  decimals: Scalars['Int'];
  priceFeed?: Maybe<TokenPriceFeedType>;
  priceFeedNeeded: Scalars['Boolean'];
};

export type TokenUpdateInputType = {
  /** Token alias ID */
  alias?: Maybe<Scalars['UuidType']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Symbol */
  symbol?: Maybe<Scalars['String']>;
  /** Decimals */
  decimals?: Maybe<Scalars['Int']>;
  priceFeed?: Maybe<TokenPriceFeedInputType>;
};

export type TradingAuthType = {
  __typename?: 'TradingAuthType';
  accessToken: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  tokenExpired?: Maybe<Scalars['DateTimeType']>;
};

export type TreasuryType = {
  __typename?: 'TreasuryType';
  portfoliosCount: Scalars['Int'];
  walletsCount: Scalars['Int'];
  protocolsCount: Scalars['Int'];
  contractsCount: Scalars['Int'];
  trackedUSD: Scalars['Float'];
};

export type UserBillingBillListFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  status?: Maybe<BillingBillStatusEnum>;
};

export type UserBillingBillListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserBillingBillListSortInputType = {
  column: UserBillingBillListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserBillingBillListSortInputTypeColumnEnum {
  Id = 'id',
  UpdatedAt = 'updatedAt',
  CreatedAt = 'createdAt'
}

export type UserBillingBillListType = {
  __typename?: 'UserBillingBillListType';
  /** Elements */
  list?: Maybe<Array<BillingBillType>>;
  pagination: Pagination;
};

export type UserBillingTransferListFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  deposit?: Maybe<Scalars['Boolean']>;
  claim?: Maybe<Scalars['Boolean']>;
  wallet?: Maybe<Array<Scalars['UuidType']>>;
  confirmed?: Maybe<Scalars['Boolean']>;
};

export type UserBillingTransferListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserBillingTransferListSortInputType = {
  column: UserBillingTransferListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserBillingTransferListSortInputTypeColumnEnum {
  Id = 'id',
  Amount = 'amount',
  CreatedAt = 'createdAt'
}

export type UserBillingTransferListType = {
  __typename?: 'UserBillingTransferListType';
  /** Elements */
  list?: Maybe<Array<BillingTransferType>>;
  pagination: Pagination;
};

export type UserBillingType = {
  __typename?: 'UserBillingType';
  transfers: UserBillingTransferListType;
  bills: UserBillingBillListType;
  balance: BillingBalanceType;
};

export type UserBillingTypeTransfersArgs = {
  filter?: Maybe<UserBillingTransferListFilterInputType>;
  sort?: Maybe<Array<UserBillingTransferListSortInputType>>;
  pagination?: Maybe<UserBillingTransferListPaginationInputType>;
};

export type UserBillingTypeBillsArgs = {
  filter?: Maybe<UserBillingBillListFilterInputType>;
  sort?: Maybe<Array<UserBillingBillListSortInputType>>;
  pagination?: Maybe<UserBillingBillListPaginationInputType>;
};

export type UserBlockchainType = {
  __typename?: 'UserBlockchainType';
  name: Scalars['String'];
  /** Blockchain type */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  wallets: UserBlockchainWalletListType;
  tokenMetricChart: Array<MetricChartType>;
};

export type UserBlockchainTypeWalletsArgs = {
  filter?: Maybe<UserBlockchainWalletListFilterInputType>;
  sort?: Maybe<Array<UserBlockchainWalletListSortInputType>>;
  pagination?: Maybe<UserBlockchainWalletListPaginationInputType>;
};

export type UserBlockchainTypeTokenMetricChartArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<UserBlockchainWalletTokenMetricChartFilterInputType>;
  sort?: Maybe<Array<UserBlockchainWalletTokenMetricChartSortInputType>>;
  pagination?: Maybe<UserBlockchainWalletTokenMetricChartPaginationInputType>;
};

export type UserBlockchainWalletListFilterInputType = {
  search?: Maybe<Scalars['String']>;
  /** Is wallet deleted */
  deleted?: Maybe<Scalars['Boolean']>;
};

export type UserBlockchainWalletListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserBlockchainWalletListSortInputType = {
  column: UserBlockchainWalletListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserBlockchainWalletListSortInputTypeColumnEnum {
  Id = 'id',
  Address = 'address',
  CreatedAt = 'createdAt'
}

export type UserBlockchainWalletListType = {
  __typename?: 'UserBlockchainWalletListType';
  /** Elements */
  list?: Maybe<Array<WalletBlockchainType>>;
  pagination: Pagination;
};

export type UserBlockchainWalletTokenMetricChartFilterInputType = {
  /** Target token alias */
  tokenAlias?: Maybe<UserMetricsTokenAliasFilterInputType>;
  /** Target contracts */
  contract?: Maybe<Array<Scalars['UuidType']>>;
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type UserBlockchainWalletTokenMetricChartPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserBlockchainWalletTokenMetricChartSortInputType = {
  column: UserBlockchainWalletTokenMetricChartSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserBlockchainWalletTokenMetricChartSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export enum UserContactBrokerEnum {
  /** Email */
  Email = 'email',
  /** Telegram */
  Telegram = 'telegram'
}

export type UserContactConfirmEmailInputType = {
  /** code */
  confirmationCode: Scalars['String'];
};

export type UserContactCreateInputType = {
  /** Type */
  broker: UserContactBrokerEnum;
  /** Address */
  address: Scalars['String'];
  /** Name */
  name: Scalars['String'];
};

export type UserContactFilterInputType = {
  id: Scalars['String'];
};

export type UserContactListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserContactListQuery = {
  __typename?: 'UserContactListQuery';
  /** Elements */
  list?: Maybe<Array<UserContactType>>;
  pagination: Pagination;
};

export type UserContactListQueryFilterInputType = {
  user?: Maybe<Scalars['UuidType']>;
  /** Type */
  broker?: Maybe<UserContactBrokerEnum>;
  /** Status */
  status?: Maybe<UserContactStatusEnum>;
  search?: Maybe<Scalars['String']>;
};

export type UserContactListSortInputType = {
  column: UserContactListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserContactListSortInputTypeColumnEnum {
  Id = 'id',
  CreatedAt = 'createdAt'
}

export enum UserContactStatusEnum {
  /** Has been activated */
  Active = 'active',
  /** Has not been activated yet */
  Inactive = 'inactive'
}

export type UserContactType = {
  __typename?: 'UserContactType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** User */
  user: UserType;
  /** Type of the contact */
  broker: UserContactBrokerEnum;
  /** Address */
  address: Scalars['String'];
  /** Name */
  name: Scalars['String'];
  /** Status */
  status: UserContactStatusEnum;
  /** Confirmation Code */
  confirmationCode: Scalars['String'];
  /** Date of create */
  createdAt: Scalars['DateTimeType'];
  /** Date of activated */
  activatedAt?: Maybe<Scalars['DateTimeType']>;
};

export type UserContactUpdateInputType = {
  /** Name */
  name?: Maybe<Scalars['String']>;
};

export type UserListFilterInputType = {
  role?: Maybe<UserRoleEnum>;
  wallet?: Maybe<UserListWalletFilterInputType>;
};

export type UserListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserListQuery = {
  __typename?: 'UserListQuery';
  /** Elements */
  list?: Maybe<Array<UserType>>;
  pagination: Pagination;
};

export type UserListSortInputType = {
  column: UserListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserListSortInputTypeColumnEnum {
  Id = 'id',
  CreatedAt = 'createdAt'
}

export type UserListWalletFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  type?: Maybe<WalletBlockchainTypeEnum>;
  search?: Maybe<Scalars['String']>;
};

export type UserMetricChartFilterInputType = {
  /** Target contracts */
  contract?: Maybe<Array<Scalars['UuidType']>>;
  /** Target wallets */
  wallet?: Maybe<Array<Scalars['UuidType']>>;
  blockchain?: Maybe<BlockchainFilterInputType>;
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type UserMetricChartPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserMetricChartSortInputType = {
  column: UserMetricChartSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserMetricChartSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export type UserMetricType = {
  __typename?: 'UserMetricType';
  balanceUSD: Scalars['String'];
  balanceUSDChange: MetricChangeType;
  stakedUSD: Scalars['String'];
  stakedUSDChange: MetricChangeType;
  earnedUSD: Scalars['String'];
  earnedUSDChange: MetricChangeType;
  worth: Scalars['String'];
  worthChange: MetricChangeType;
  apy: Scalars['String'];
};

export type UserMetricsTokenAliasFilterInputType = {
  id?: Maybe<Array<Scalars['UuidType']>>;
  /** Liquidity token */
  liquidity?: Maybe<Array<TokenAliasLiquidityEnum>>;
};

export type UserNotificationType = {
  __typename?: 'UserNotificationType';
  /** Type */
  type: UserNotificationTypeEnum;
  /** Contact */
  contact: Scalars['UuidType'];
  /** Time */
  time: Scalars['Int'];
};

export enum UserNotificationTypeEnum {
  PortfolioMetrics = 'portfolioMetrics',
  AutomateCallNotEnoughFunds = 'automateCallNotEnoughFunds'
}

export type UserProtocolListFilterInputType = {
  /** Target user ID */
  user: Scalars['UuidType'];
  /** Only hidden/visible */
  hidden?: Maybe<Scalars['Boolean']>;
};

export type UserProtocolListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserProtocolListQuery = {
  __typename?: 'UserProtocolListQuery';
  /** Elements */
  list?: Maybe<Array<ProtocolType>>;
  pagination: Pagination;
};

export type UserProtocolListSortInputType = {
  column: UserProtocolListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserProtocolListSortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  CreatedAt = 'createdAt'
}

export type UserReferrerCodeType = {
  __typename?: 'UserReferrerCodeType';
  id: Scalars['UuidType'];
  code: Scalars['String'];
  usedTimes: Scalars['Int'];
  visits: Scalars['Int'];
  redirectTo: Scalars['String'];
};

export enum UserRoleEnum {
  /** User */
  User = 'user',
  /** Administrator */
  Admin = 'admin',
  /** Demo */
  Demo = 'demo'
}

export type UserStoreBalanceType = {
  __typename?: 'UserStoreBalanceType';
  /** Available nofications count */
  notifications: Scalars['Int'];
};

export type UserStoreProductListFilterInputType = {
  code?: Maybe<Array<StoreProductCodeEnum>>;
};

export type UserStoreProductListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserStoreProductListSortInputType = {
  column: UserStoreProductListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserStoreProductListSortInputTypeColumnEnum {
  Id = 'id',
  CreatedAt = 'createdAt'
}

export type UserStoreProductListType = {
  __typename?: 'UserStoreProductListType';
  /** Elements */
  list?: Maybe<Array<StoreProductType>>;
  pagination: Pagination;
};

export type UserStorePurchaseListFilterInputType = {
  product?: Maybe<Array<Scalars['UuidType']>>;
};

export type UserStorePurchaseListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserStorePurchaseListSortInputType = {
  column: UserStorePurchaseListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserStorePurchaseListSortInputTypeColumnEnum {
  Id = 'id',
  CreatedAt = 'createdAt'
}

export type UserStorePurchaseListType = {
  __typename?: 'UserStorePurchaseListType';
  /** Elements */
  list?: Maybe<Array<StorePurchaseType>>;
  pagination: Pagination;
};

export type UserStoreType = {
  __typename?: 'UserStoreType';
  purchases: UserStorePurchaseListType;
  products: UserStoreProductListType;
  balance: UserStoreBalanceType;
};

export type UserStoreTypePurchasesArgs = {
  filter?: Maybe<UserStorePurchaseListFilterInputType>;
  sort?: Maybe<Array<UserStorePurchaseListSortInputType>>;
  pagination?: Maybe<UserStorePurchaseListPaginationInputType>;
};

export type UserStoreTypeProductsArgs = {
  filter?: Maybe<UserStoreProductListFilterInputType>;
  sort?: Maybe<Array<UserStoreProductListSortInputType>>;
  pagination?: Maybe<UserStoreProductListPaginationInputType>;
};

export type UserTokenAliasListFilterInputType = {
  /** Liquidity token */
  liquidity?: Maybe<Array<TokenAliasLiquidityEnum>>;
  /** Only tokens touched by protocol */
  protocol?: Maybe<Scalars['UuidType']>;
};

export type UserTokenAliasListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserTokenAliasListType = {
  __typename?: 'UserTokenAliasListType';
  /** Elements */
  list?: Maybe<Array<TokenAlias>>;
  pagination: Pagination;
};

export type UserTokenAliasesStakedMetricsListFilterInputType = {
  /** Liquidity token */
  liquidity?: Maybe<Array<TokenAliasLiquidityEnum>>;
  /** Target protocol */
  protocol: Scalars['UuidType'];
};

export type UserTokenAliasesStakedMetricsListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserTokenAliasesStakedMetricsListType = {
  __typename?: 'UserTokenAliasesStakedMetricsListType';
  /** Elements */
  list?: Maybe<Array<TokenAliasStakedStatistics>>;
  pagination: Pagination;
};

export type UserTokenMetricChartFilterInputType = {
  /** Target token alias */
  tokenAlias?: Maybe<UserMetricsTokenAliasFilterInputType>;
  /** Target contracts */
  contract?: Maybe<Array<Scalars['UuidType']>>;
  blockchain?: Maybe<BlockchainFilterInputType>;
  /** Target wallets */
  wallet?: Maybe<Array<Scalars['UuidType']>>;
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type UserTokenMetricChartPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type UserTokenMetricChartSortInputType = {
  column: UserTokenMetricChartSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum UserTokenMetricChartSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export type UserType = {
  __typename?: 'UserType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Access role */
  role: UserRoleEnum;
  /** User portfolio name */
  name: Scalars['String'];
  /** Current user locale */
  locale: LocaleEnum;
  /** Current user timezone */
  timezone: Scalars['String'];
  /** Is portfolio collected */
  isPorfolioCollected: Scalars['Boolean'];
  tokenAliasesStakedMetrics: UserTokenAliasesStakedMetricsListType;
  tokenAliases: UserTokenAliasListType;
  wallets: WalletListType;
  exchanges: WalletExchangeListType;
  blockchains: Array<UserBlockchainType>;
  referrerCode: UserReferrerCodeType;
  metricChart: Array<MetricChartType>;
  tokenMetricChart: Array<MetricChartType>;
  metric: UserMetricType;
  billing: UserBillingType;
  store: UserStoreType;
  /** Date of last auth */
  authAt: Scalars['DateTimeType'];
  /** Date of created account */
  createdAt: Scalars['DateTimeType'];
};

export type UserTypeTokenAliasesStakedMetricsArgs = {
  filter: UserTokenAliasesStakedMetricsListFilterInputType;
  pagination?: Maybe<UserTokenAliasesStakedMetricsListPaginationInputType>;
};

export type UserTypeTokenAliasesArgs = {
  filter?: Maybe<UserTokenAliasListFilterInputType>;
  pagination?: Maybe<UserTokenAliasListPaginationInputType>;
};

export type UserTypeWalletsArgs = {
  filter?: Maybe<WalletListFilterInputType>;
  sort?: Maybe<Array<WalletListSortInputType>>;
  pagination?: Maybe<WalletListPaginationInputType>;
};

export type UserTypeExchangesArgs = {
  filter?: Maybe<WalletExchangexListFilterInputType>;
  sort?: Maybe<Array<WalletExchangeListSortInputType>>;
  pagination?: Maybe<WalletExchangeListPaginationInputType>;
};

export type UserTypeMetricChartArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<UserMetricChartFilterInputType>;
  sort?: Maybe<Array<UserMetricChartSortInputType>>;
  pagination?: Maybe<UserMetricChartPaginationInputType>;
};

export type UserTypeTokenMetricChartArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<UserTokenMetricChartFilterInputType>;
  sort?: Maybe<Array<UserTokenMetricChartSortInputType>>;
  pagination?: Maybe<UserTokenMetricChartPaginationInputType>;
};

export type UserUpdateInputType = {
  role?: Maybe<UserRoleEnum>;
  name?: Maybe<Scalars['String']>;
  locale?: Maybe<LocaleEnum>;
};

export type VoteListFilterInputType = {
  user?: Maybe<Scalars['UuidType']>;
};

export type VoteListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type VoteListSortInputType = {
  column: VoteListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum VoteListSortInputTypeColumnEnum {
  Id = 'id',
  CreatedAt = 'createdAt'
}

export type VoteListType = {
  __typename?: 'VoteListType';
  /** Elements */
  list?: Maybe<Array<VoteType>>;
  pagination: Pagination;
};

export type VoteType = {
  __typename?: 'VoteType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Voting user */
  user: UserType;
  /** Date of updated */
  updatedAt: Scalars['DateTimeType'];
  /** Date of created */
  createdAt: Scalars['DateTimeType'];
};

export type WalletBillingBillListFilterInputType = {
  status?: Maybe<BillingBillStatusEnum>;
};

export type WalletBillingBillListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type WalletBillingBillListSortInputType = {
  column: WalletBillingBillListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum WalletBillingBillListSortInputTypeColumnEnum {
  Id = 'id',
  UpdatedAt = 'updatedAt',
  CreatedAt = 'createdAt'
}

export type WalletBillingBillListType = {
  __typename?: 'WalletBillingBillListType';
  /** Elements */
  list?: Maybe<Array<BillingBillType>>;
  pagination: Pagination;
};

export type WalletBillingTransferListFilterInputType = {
  deposit?: Maybe<Scalars['Boolean']>;
  claim?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
};

export type WalletBillingTransferListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type WalletBillingTransferListSortInputType = {
  column: WalletBillingTransferListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum WalletBillingTransferListSortInputTypeColumnEnum {
  Id = 'id',
  Amount = 'amount',
  CreatedAt = 'createdAt'
}

export type WalletBillingTransferListType = {
  __typename?: 'WalletBillingTransferListType';
  /** Elements */
  list?: Maybe<Array<BillingTransferType>>;
  pagination: Pagination;
};

export type WalletBillingType = {
  __typename?: 'WalletBillingType';
  transfers: WalletBillingTransferListType;
  bills: WalletBillingBillListType;
  balance: BillingBalanceType;
};

export type WalletBillingTypeTransfersArgs = {
  filter?: Maybe<WalletBillingTransferListFilterInputType>;
  sort?: Maybe<Array<WalletBillingTransferListSortInputType>>;
  pagination?: Maybe<WalletBillingTransferListPaginationInputType>;
};

export type WalletBillingTypeBillsArgs = {
  filter?: Maybe<WalletBillingBillListFilterInputType>;
  sort?: Maybe<Array<WalletBillingBillListSortInputType>>;
  pagination?: Maybe<WalletBillingBillListPaginationInputType>;
};

export type WalletBlockchainType = {
  __typename?: 'WalletBlockchainType';
  /** Identificator */
  id: Scalars['UuidType'];
  /** Type */
  type: WalletBlockchainTypeEnum;
  /** Name */
  name: Scalars['String'];
  /** Blockchain type */
  blockchain: BlockchainEnum;
  /** Blockchain network id */
  network: Scalars['String'];
  /** Address */
  address: Scalars['String'];
  /** Public key */
  publicKey: Scalars['String'];
  /** Statistics collected */
  statisticsCollectedAt: Scalars['DateTimeType'];
  contracts: WalletContractListType;
  triggersCount: Scalars['Int'];
  tokenAliases: WalletTokenAliasListType;
  metricChart: Array<MetricChartType>;
  tokenMetricChart: Array<MetricChartType>;
  metric: WalletMetricType;
  billing: WalletBillingType;
  /** Date of deleted wallet */
  deletedAt?: Maybe<Scalars['DateTimeType']>;
  /** Date of created wallet */
  createdAt: Scalars['DateTimeType'];
};

export type WalletBlockchainTypeContractsArgs = {
  filter?: Maybe<WalletContractListFilterInputType>;
  sort?: Maybe<Array<WalletContractListSortInputType>>;
  pagination?: Maybe<WalletContractListPaginationInputType>;
};

export type WalletBlockchainTypeTokenAliasesArgs = {
  filter?: Maybe<WalletTokenAliasListFilterInputType>;
  pagination?: Maybe<WalletTokenAliasListPaginationInputType>;
};

export type WalletBlockchainTypeMetricChartArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<WalletMetricChartFilterInputType>;
  sort?: Maybe<Array<WalletMetricChartSortInputType>>;
  pagination?: Maybe<WalletMetricChartPaginationInputType>;
};

export type WalletBlockchainTypeTokenMetricChartArgs = {
  metric: Scalars['MetricColumnType'];
  group: MetricGroupEnum;
  filter?: Maybe<WalletTokenMetricChartFilterInputType>;
  sort?: Maybe<Array<WalletTokenMetricChartSortInputType>>;
  pagination?: Maybe<WalletTokenMetricChartPaginationInputType>;
};

export type WalletBlockchainTypeMetricArgs = {
  filter?: Maybe<WalletMetricFilterInputType>;
};

export enum WalletBlockchainTypeEnum {
  Wallet = 'wallet',
  Contract = 'contract'
}

export type WalletContractListFilterInputType = {
  blockchain?: Maybe<BlockchainFilterInputType>;
  protocol?: Maybe<Array<Scalars['UuidType']>>;
  hidden?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
};

export type WalletContractListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type WalletContractListSortInputType = {
  column: WalletContractListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum WalletContractListSortInputTypeColumnEnum {
  Id = 'id',
  Name = 'name',
  Address = 'address',
  CreatedAt = 'createdAt'
}

export type WalletContractListType = {
  __typename?: 'WalletContractListType';
  /** Elements */
  list?: Maybe<Array<ContractType>>;
  pagination: Pagination;
};

export type WalletExchangeListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type WalletExchangeListSortInputType = {
  column: WalletExchangeListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum WalletExchangeListSortInputTypeColumnEnum {
  Id = 'id',
  CreatedAt = 'createdAt'
}

export type WalletExchangeListType = {
  __typename?: 'WalletExchangeListType';
  /** Elements */
  list?: Maybe<Array<WalletExchangeType>>;
  pagination: Pagination;
};

export type WalletExchangeTokenAliasListFilterInputType = {
  /** Liquidity token */
  liquidity?: Maybe<Array<TokenAliasLiquidityEnum>>;
};

export type WalletExchangeTokenAliasListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type WalletExchangeTokenAliasListType = {
  __typename?: 'WalletExchangeTokenAliasListType';
  /** Elements */
  list?: Maybe<Array<WalletTokenAliasType>>;
  pagination: Pagination;
};

export type WalletExchangeType = {
  __typename?: 'WalletExchangeType';
  /** Identifier */
  id: Scalars['UuidType'];
  /** Name */
  name: Scalars['String'];
  /** Exchange type */
  exchange: WalletExchangeTypeEnum;
  /** Statistics collected */
  statisticsCollectedAt: Scalars['DateTimeType'];
  tokenAliases: WalletExchangeTokenAliasListType;
  balance: Scalars['String'];
  /** Account */
  account: Scalars['String'];
  /** Date of deleted wallet */
  deletedAt?: Maybe<Scalars['DateTimeType']>;
  /** Date of created account */
  createdAt: Scalars['DateTimeType'];
};

export type WalletExchangeTypeTokenAliasesArgs = {
  filter?: Maybe<WalletExchangeTokenAliasListFilterInputType>;
  pagination?: Maybe<WalletExchangeTokenAliasListPaginationInputType>;
};

export enum WalletExchangeTypeEnum {
  Binance = 'binance',
  Huobi = 'huobi',
  Okex = 'okex',
  Ascendex = 'ascendex',
  Mexc = 'mexc',
  Aax = 'aax',
  Bitmart = 'bitmart',
  Coinex = 'coinex',
  Poloniex = 'poloniex',
  Ftx = 'ftx',
  Binanceus = 'binanceus',
  Bybit = 'bybit',
  Lbank = 'lbank',
  Ftxus = 'ftxus',
  Gateio = 'gateio'
}

export type WalletExchangexListFilterInputType = {
  id?: Maybe<Scalars['UuidType']>;
};

export type WalletListFilterInputType = {
  id?: Maybe<Scalars['UuidType']>;
  blockchain?: Maybe<BlockchainFilterInputType>;
  type?: Maybe<WalletBlockchainTypeEnum>;
  search?: Maybe<Scalars['String']>;
  /** Is wallet deleted */
  deleted?: Maybe<Scalars['Boolean']>;
};

export type WalletListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type WalletListSortInputType = {
  column: WalletListSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum WalletListSortInputTypeColumnEnum {
  Id = 'id',
  Address = 'address',
  CreatedAt = 'createdAt'
}

export type WalletListType = {
  __typename?: 'WalletListType';
  /** Elements */
  list?: Maybe<Array<WalletBlockchainType>>;
  pagination: Pagination;
};

export type WalletMetricChartFilterInputType = {
  /** Target contracts */
  contract?: Maybe<Array<Scalars['UuidType']>>;
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type WalletMetricChartPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type WalletMetricChartSortInputType = {
  column: WalletMetricChartSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum WalletMetricChartSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export type WalletMetricFilterInputType = {
  /** Target token alias */
  tokenAlias?: Maybe<UserMetricsTokenAliasFilterInputType>;
  /** Target contracts */
  contract?: Maybe<Array<Scalars['UuidType']>>;
};

export type WalletMetricType = {
  __typename?: 'WalletMetricType';
  stakedUSD: Scalars['String'];
  stakedUSDChange: MetricChangeType;
  earnedUSD: Scalars['String'];
  earnedUSDChange: MetricChangeType;
  balance: Scalars['String'];
  usd: Scalars['String'];
  usdChange: MetricChangeType;
  worth: Scalars['String'];
  worthChange: MetricChangeType;
};

export type WalletMetricUpdatedEvent = {
  __typename?: 'WalletMetricUpdatedEvent';
  id: Scalars['UuidType'];
  wallet: WalletBlockchainType;
  contract: ContractType;
};

export type WalletTokenAliasListFilterInputType = {
  /** Liquidity token */
  liquidity?: Maybe<Array<TokenAliasLiquidityEnum>>;
};

export type WalletTokenAliasListPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type WalletTokenAliasListType = {
  __typename?: 'WalletTokenAliasListType';
  /** Elements */
  list?: Maybe<Array<WalletTokenAliasType>>;
  pagination: Pagination;
};

export type WalletTokenAliasMetricType = {
  __typename?: 'WalletTokenAliasMetricType';
  balance: Scalars['String'];
  usd: Scalars['String'];
  usdChange: MetricChangeType;
  portfolioPercent: Scalars['String'];
};

export type WalletTokenAliasType = {
  __typename?: 'WalletTokenAliasType';
  tokenAlias: TokenAlias;
  metric: WalletTokenAliasMetricType;
};

export type WalletTokenMetricChartFilterInputType = {
  /** Target token alias */
  tokenAlias?: Maybe<UserMetricsTokenAliasFilterInputType>;
  /** Target contracts */
  contract?: Maybe<Array<Scalars['UuidType']>>;
  /** Created at equals or greater */
  dateAfter?: Maybe<Scalars['DateTimeType']>;
  /** Created at less */
  dateBefore?: Maybe<Scalars['DateTimeType']>;
};

export type WalletTokenMetricChartPaginationInputType = {
  /** Limit */
  limit?: Maybe<Scalars['Int']>;
  /** Offset */
  offset?: Maybe<Scalars['Int']>;
};

export type WalletTokenMetricChartSortInputType = {
  column: WalletTokenMetricChartSortInputTypeColumnEnum;
  order?: Maybe<SortOrderEnum>;
};

export enum WalletTokenMetricChartSortInputTypeColumnEnum {
  Date = 'date',
  Value = 'value'
}

export type WalletUpdateInputType = {
  /** Name */
  name?: Maybe<Scalars['String']>;
};

export type TreasuryQueryVariables = Exact<{ [key: string]: never }>;

export type TreasuryQuery = { __typename?: 'Query' } & {
  treasury: { __typename?: 'TreasuryType' } & Pick<
    TreasuryType,
    'portfoliosCount' | 'protocolsCount' | 'contractsCount' | 'walletsCount'
  >;
};

export type InvestContractsQueryVariables = Exact<{
  filter?: Maybe<ContractListFilterInputType>;
  sort?: Maybe<Array<ContractListSortInputType> | ContractListSortInputType>;
}>;

export type InvestContractsQuery = { __typename?: 'Query' } & {
  contracts: { __typename?: 'ContractListType' } & {
    list?: Maybe<
      Array<
        { __typename?: 'ContractType' } & Pick<
          ContractType,
          'id' | 'name' | 'network' | 'blockchain'
        > & {
            protocol: { __typename?: 'ProtocolType' } & Pick<
              ProtocolType,
              'id' | 'name' | 'icon'
            >;
            metric: { __typename?: 'ContractMetricType' } & Pick<
              ContractMetricType,
              | 'tvl'
              | 'aprDay'
              | 'aprWeek'
              | 'aprMonth'
              | 'aprYear'
              | 'aprWeekReal'
              | 'myAPYBoost'
              | 'myStaked'
              | 'risk'
            >;
            tokens: { __typename?: 'ContractTokenLinkType' } & {
              stake: Array<
                { __typename?: 'TokenType' } & Pick<
                  TokenType,
                  'network' | 'address' | 'name'
                > & {
                    alias?: Maybe<
                      { __typename?: 'TokenAlias' } & Pick<
                        TokenAlias,
                        'logoUrl'
                      >
                    >;
                  }
              >;
              reward: Array<
                { __typename?: 'TokenType' } & Pick<
                  TokenType,
                  'network' | 'address' | 'name'
                > & {
                    alias?: Maybe<
                      { __typename?: 'TokenAlias' } & Pick<
                        TokenAlias,
                        'logoUrl'
                      >
                    >;
                  }
              >;
            };
          }
      >
    >;
    pagination: { __typename?: 'Pagination' } & Pick<Pagination, 'count'>;
  };
};

export type LandingMediumPostsQueryVariables = Exact<{ [key: string]: never }>;

export type LandingMediumPostsQuery = { __typename?: 'Query' } & {
  landingMediumPosts: Array<
    { __typename?: 'LandingMediumPostType' } & Pick<
      LandingMediumPostType,
      'title' | 'text' | 'link' | 'createdAt'
    >
  >;
};

export type ProtocolsQueryVariables = Exact<{ [key: string]: never }>;

export type ProtocolsQuery = { __typename?: 'Query' } & {
  protocols: { __typename?: 'ProtocolListQuery' } & {
    list?: Maybe<
      Array<
        { __typename?: 'ProtocolType' } & Pick<
          ProtocolType,
          'id' | 'name' | 'icon' | 'link' | 'adapter'
        >
      >
    >;
  };
};

export type RestakeStrategyQueryVariables = Exact<{
  balance: Scalars['Float'];
  apy: Scalars['Float'];
  blockchain?: Maybe<BlockchainEnum>;
  network?: Maybe<Scalars['String']>;
}>;

export type RestakeStrategyQuery = { __typename?: 'Query' } & {
  restakeStrategy: { __typename?: 'RestakeStrategyType' } & {
    hold: Array<
      { __typename?: 'RestakeStrategyPointType' } & Pick<
        RestakeStrategyPointType,
        'v' | 't'
      >
    >;
    everyDay: Array<
      { __typename?: 'RestakeStrategyPointType' } & Pick<
        RestakeStrategyPointType,
        'v' | 't'
      >
    >;
    optimal: Array<
      { __typename?: 'RestakeStrategyPointType' } & Pick<
        RestakeStrategyPointType,
        'v' | 't'
      >
    >;
  };
};

export type UserReferrerFragmentFragment = {
  __typename?: 'UserReferrerCodeType';
} & Pick<UserReferrerCodeType, 'code' | 'redirectTo' | 'id'>;

export type UserReferrerQueryVariables = Exact<{
  code: Scalars['String'];
}>;

export type UserReferrerQuery = { __typename?: 'Query' } & {
  userReferrer: {
    __typename?: 'UserReferrerCodeType';
  } & UserReferrerFragmentFragment;
};

export type GovTokenFragmentFragment = {
  __typename?: 'GovTokenCirculationValueType';
} & Pick<
  GovTokenCirculationValueType,
  'timeLeft' | 'timeTotal' | 'tokenLeft' | 'tokenTotal'
>;

export type GovTokenQueryVariables = Exact<{
  filter: GovTokenFilterInputType;
}>;

export type GovTokenQuery = { __typename?: 'Query' } & {
  govToken: { __typename?: 'GovTokenType' } & Pick<
    GovTokenType,
    'price' | 'totalSupply' | 'marketCap'
  > & {
      circulation: { __typename?: 'GovTokenCirculationType' } & Pick<
        GovTokenCirculationType,
        'total'
      > & {
          market: {
            __typename?: 'GovTokenCirculationValueType';
          } & GovTokenFragmentFragment;
          rewards: {
            __typename?: 'GovTokenCirculationValueType';
          } & GovTokenFragmentFragment;
          developers: {
            __typename?: 'GovTokenCirculationValueType';
          } & GovTokenFragmentFragment;
          community: {
            __typename?: 'GovTokenCirculationValueType';
          } & GovTokenFragmentFragment;
          earlyEcosistem: {
            __typename?: 'GovTokenCirculationValueType';
          } & GovTokenFragmentFragment;
        };
    };
};

export type TradeAuthMutationVariables = Exact<{ [key: string]: never }>;

export type TradeAuthMutation = { __typename?: 'Mutation' } & {
  tradingAuth?: Maybe<
    { __typename?: 'TradingAuthType' } & Pick<
      TradingAuthType,
      'accessToken' | 'tokenExpired'
    >
  >;
};

export const UserReferrerFragmentFragmentDoc = gql`
  fragment userReferrerFragment on UserReferrerCodeType {
    code
    redirectTo
    id
  }
`;
export const GovTokenFragmentFragmentDoc = gql`
  fragment govTokenFragment on GovTokenCirculationValueType {
    timeLeft
    timeTotal
    tokenLeft
    tokenTotal
  }
`;
export const TreasuryDocument = gql`
  query Treasury {
    treasury {
      portfoliosCount
      protocolsCount
      contractsCount
      walletsCount
    }
  }
`;

export function useTreasuryQuery(
  options?: Omit<Urql.UseQueryArgs<TreasuryQueryVariables>, 'query'>
) {
  return Urql.useQuery<TreasuryQuery>({ query: TreasuryDocument, ...options });
}
export const InvestContractsDocument = gql`
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

export function useInvestContractsQuery(
  options?: Omit<Urql.UseQueryArgs<InvestContractsQueryVariables>, 'query'>
) {
  return Urql.useQuery<InvestContractsQuery>({
    query: InvestContractsDocument,
    ...options
  });
}
export const LandingMediumPostsDocument = gql`
  query LandingMediumPosts {
    landingMediumPosts {
      title
      text
      link
      createdAt
    }
  }
`;

export function useLandingMediumPostsQuery(
  options?: Omit<Urql.UseQueryArgs<LandingMediumPostsQueryVariables>, 'query'>
) {
  return Urql.useQuery<LandingMediumPostsQuery>({
    query: LandingMediumPostsDocument,
    ...options
  });
}
export const ProtocolsDocument = gql`
  query Protocols {
    protocols(filter: { hidden: false }, pagination: { limit: 5000 }) {
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

export function useProtocolsQuery(
  options?: Omit<Urql.UseQueryArgs<ProtocolsQueryVariables>, 'query'>
) {
  return Urql.useQuery<ProtocolsQuery>({
    query: ProtocolsDocument,
    ...options
  });
}
export const RestakeStrategyDocument = gql`
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

export function useRestakeStrategyQuery(
  options: Omit<Urql.UseQueryArgs<RestakeStrategyQueryVariables>, 'query'>
) {
  return Urql.useQuery<RestakeStrategyQuery>({
    query: RestakeStrategyDocument,
    ...options
  });
}
export const UserReferrerDocument = gql`
  query userReferrer($code: String!) {
    userReferrer(code: $code) {
      ...userReferrerFragment
    }
  }
  ${UserReferrerFragmentFragmentDoc}
`;

export function useUserReferrerQuery(
  options: Omit<Urql.UseQueryArgs<UserReferrerQueryVariables>, 'query'>
) {
  return Urql.useQuery<UserReferrerQuery>({
    query: UserReferrerDocument,
    ...options
  });
}
export const GovTokenDocument = gql`
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
  ${GovTokenFragmentFragmentDoc}
`;

export function useGovTokenQuery(
  options: Omit<Urql.UseQueryArgs<GovTokenQueryVariables>, 'query'>
) {
  return Urql.useQuery<GovTokenQuery>({ query: GovTokenDocument, ...options });
}
export const TradeAuthDocument = gql`
  mutation TradeAuth {
    tradingAuth {
      accessToken
      tokenExpired
    }
  }
`;

export function useTradeAuthMutation() {
  return Urql.useMutation<TradeAuthMutation, TradeAuthMutationVariables>(
    TradeAuthDocument
  );
}
