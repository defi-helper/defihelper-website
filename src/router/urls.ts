export const URLS = {
  main: '/',
  voting: {
    info: '/governance',
    list: '/governance/proposals',
    detail: (proposalId = ':proposalId') =>
      `/governance/proposals/${proposalId}` as const,
    create: '/governance/proposals/create'
  },
  tokenomics: '/tokenomics',
  notfound: '/404',
  staking: {
    list: '/staking',
    detail: (tokenId = ':tokenId') => `/staking/${tokenId}` as const
  },
  whitepaper: '/whitepaper',
  docs: {
    list: '/docs',
    detail: (contractName = ':contractName') => `/docs/${contractName}` as const
  },
  bridge: '/bridge'
} as const;
