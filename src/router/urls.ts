import litepaper from 'src/assets/pdf/DeFiHelper_litepaper.pdf';

export const URLS = {
  main: '/',
  tokenomics: '/tokenomics',
  notfound: '/404',
  litepaper,
  docs: {
    list: '/docs',
    detail: (contractName = ':contractName') => `/docs/${contractName}` as const
  },
  contracts: '/contracts',
  referral: '/p/:code'
} as const;
