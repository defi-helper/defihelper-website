export const URLS = {
  main: '/',
  voting: {
    info: '/governance',
    list: '/governance/proposals',
    detail: (proposalId = ':proposalId') =>
      `/governance/proposals/${proposalId}`,
    create: '/governance/proposals/create'
  },
  notfound: '/404',
  staking: {
    list: '/staking',
    detail: (tokenId = ':tokenId') => `/staking/${tokenId}`
  },
  whitepaper: '/whitepaper',
  docs: {
    list: '/docs',
    detail: (contractName = ':contractName') => `/docs/${contractName}`
  },
  bridge: '/bridge'
} as const;
