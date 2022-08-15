import { createClient } from 'urql';

import { config } from './config';

export const client = createClient({
  url: config.API_URL ?? ''
});
