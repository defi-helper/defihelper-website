import pitchdeck from 'src/assets/pdf/DeFiHelper_pitchdeck.pdf';

export const URLS = {
  main: '/',
  tokenomics: '/tokenomics',
  notfound: '/404',
  pitchdeck,
  docs: {
    list: '/docs',
    detail: (contractName = ':contractName') => `/docs/${contractName}` as const
  },
  contracts: '/contracts',
  referral: '/p/:code',
  protocols: '/protocols',
  portfolioTracker: '/portfolio-tracker',
  noCode: '/no-code',
  security: '/security',
  portfolioManager: '/portfolio-manager',
  trade: '/trade',
  invest: '/invest'
} as const;
