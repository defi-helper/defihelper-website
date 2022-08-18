import axios, { AxiosRequestConfig } from 'axios';

import { client } from 'src/api-client';
import { dateUtils } from 'src/common/date-utils';
// import { config } from 'src/config';
import {
  TradeAuthMutation,
  TradeAuthMutationVariables
} from 'src/graphql/_generated-types';
import { TRADE_AUTH } from './graphql/trade-auth.graphql';

const apiV1 = axios.create({
  baseURL: 'https://whattofarm.io/ext-api/v1'
});

type Exchange = {
  Icon: string;
  Name: string;
};

type Response<T> = { code: 200 | 500 | 405; data: T; message?: string };

export const tradeApi = {
  exchanges: () =>
    apiV1.get<Response<Exchange[]>>('dex-info').then(({ data }) => ({
      data: data.data.map(({ Name, Icon }) => {
        const [firstChar, ...restChars] = Array.from(Name);

        return {
          Name: [firstChar.toLocaleUpperCase(), ...restChars].join(''),
          Icon: `${Icon}.svg`
        };
      }),
      message: data.message
    })),

  loginWhattofarm: () =>
    client
      .mutation<TradeAuthMutation, TradeAuthMutationVariables>(TRADE_AUTH)
      .toPromise()
      .then(({ data }) => data?.tradingAuth)
};

const authRequestInterceptor = async (axiosConfig: AxiosRequestConfig) => {
  const whattofarm = JSON.parse(localStorage.getItem('whattofarm') ?? '{}');

  if (
    whattofarm?.accessToken &&
    whattofarm.tokenExpired &&
    !dateUtils.isAfter(whattofarm.tokenExpired)
  ) {
    Object.assign(axiosConfig.headers, {
      Authorization: `Bearer ${whattofarm?.accessToken}`
    });
  }

  return axiosConfig;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const authResponseInterceptor = async (error: any) => {
  const errorConfig = error?.config;

  if (error?.response?.status !== 200 && !errorConfig?.sent) {
    errorConfig.sent = true;

    const result = await tradeApi.loginWhattofarm();

    if (result?.accessToken) {
      errorConfig.headers = {
        ...errorConfig.headers,
        authorization: `Bearer ${result?.accessToken}`
      };
    }

    if (result) {
      localStorage.setItem('whattofarm', JSON.stringify(result));
    }

    return axios(errorConfig);
  }

  return Promise.reject(error);
};

apiV1.interceptors.request.use(authRequestInterceptor, (r) =>
  Promise.reject(r)
);
apiV1.interceptors.response.use(
  (response) => response,
  authResponseInterceptor
);
