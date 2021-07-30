import networks from '@bondappetit/networks';
import { config } from 'src/config';

import { useTokenPriceQuery } from 'src/graphql/_generated-hooks';

export const useGovernanceCost = () => {
  const query = useTokenPriceQuery({
    variables: {
      filter: {
        address: networks.main.assets.Governance.address
      }
    },

    pollInterval: config.POLLING_INTERVAL
  });

  return query.data?.token.data?.priceUSD;
};
