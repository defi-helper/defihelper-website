export const config = {
  ENV: process.env.NODE_ENV,
  IS_DEV: process.env.NODE_ENV === 'development',
  UNISENDER_API: `https://api.unisender.com/ru/api/subscribe?format=json&api_key=${process.env.REACT_APP_UNISENDER_API}`,
  API_URL: process.env.REACT_APP_API_URL,
  SENTRY: process.env.REACT_APP_SENTRY,
  IS_LOCAL: process.env.REACT_APP_IS_LOCAL === 'true',
  YM_ID: 75624769,
  COMMIT_HASH: process.env.COMMIT_HASH,
  BRANCH: process.env.BRANCH,
  BUILD_DATE: process.env.BUILD_DATE,
  LAUNCH_APP_URL: process.env.REACT_APP_LAUNCH_APP_URL,
  SHOW_ADD_PROTOCOL_BUTTON:
    process.env.REACT_APP_SHOW_ADD_PROTOCOL_BUTTON === 'true',
  FEES: 3.5,
  AMCHARTS_LICENCE: process.env.REACT_APP_AMCHARTS_LICENCE,
  PANCAKESWAP_URL: process.env.REACT_APP_PANCAKESWAP_URL,
  WAVES_URL: process.env.REACT_APP_WAVES_URL,
  UNISWAP_URL: process.env.REACT_APP_UNISWAP_URL,
  MAX_FEE: 8
};
