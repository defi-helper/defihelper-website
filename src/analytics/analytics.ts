import { config } from 'src/config';

type EventEnum =
  | 'main_suggest_protocol_click'
  | 'main_expore_dfh_click'
  | 'main_join_our_team_click'
  | 'header_launch_app_click'
  | 'footer_join_mailing_list_click'
  | 'footer_subscribe_click'
  | 'footer_pop_up_notify_me_click'
  | 'footer_apply_click';

window.dataLayer = window.dataLayer ?? [];

export const analytics = {
  send: (event: EventEnum) => {
    window.dataLayer?.push(event);
    window.ym?.(config.YM_ID, 'reachGoal', event);
    window.amplitude?.logEvent(event, {});
  }
};
