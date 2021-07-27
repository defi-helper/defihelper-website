import { config } from 'src/config';

type EventEnum =
  | 'connect_wallet'
  | 'invest_click'
  | 'invest_success'
  | 'staking_click'
  | 'staking_success'
  | 'buy_usdap_click'
  | 'buy_usdap_success';

window.dataLayer = window.dataLayer ?? [];

export const analytics = {
  send: (event: EventEnum) => {
    window.dataLayer?.push(event);
    window.ym?.(config.YM_ID, 'reachGoal', event);
  }
};
