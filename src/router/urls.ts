export const URLS = {
  main: '/',
  tokenomics: '/tokenomics',
  notfound: '/404',
  whitepaper: '/whitepaper',
  docs: {
    list: '/docs',
    detail: (contractName = ':contractName') => `/docs/${contractName}` as const
  },
  bridge: '/bridge'
} as const;
