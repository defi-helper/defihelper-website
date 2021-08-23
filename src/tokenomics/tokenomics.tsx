import React from 'react';
import { config } from 'src/config';
import { useGovTokenQuery } from 'src/graphql/_generated-hooks';

import { LandingLayout } from 'src/layouts';
import {
  TokenomicsHeader,
  TokenomicsFaq,
  TokenomicsHowTo,
  TokenomicsHolders,
  TokenomicsProfit,
  TokenomicsTable,
  TokenomicsCharts
} from './common';
import * as styles from './tokenomics.css';

export type TokenomicsProps = unknown;

const NETWORK = config.IS_DEV ? 3 : 1;
const CONTRACT_ADDRESS = '0xa57fEd13d1558116E90009f872AeC868D710D605';

export const Tokenomics: React.VFC<TokenomicsProps> = () => {
  const [{ data }] = useGovTokenQuery({
    variables: {
      filter: {
        network: NETWORK,
        contract: CONTRACT_ADDRESS
      }
    }
  });

  return (
    <LandingLayout>
      <TokenomicsHeader
        price={data?.govToken.price}
        marketCap={data?.govToken.marketCap}
        circulatingSupply={data?.govToken.circulation.total}
        totalSupply={data?.govToken.totalSupply}
        className={styles.header}
      />
      <TokenomicsCharts className={styles.section} />
      <TokenomicsTable className={styles.section} />
      <TokenomicsProfit className={styles.section} />
      <TokenomicsHolders className={styles.section} />
      <TokenomicsHowTo
        marketCap={data?.govToken.marketCap}
        circulatingSupply={data?.govToken.circulation.total}
        circulation={data?.govToken.circulation}
        className={styles.section}
      />
      <TokenomicsFaq className={styles.section} />
    </LandingLayout>
  );
};
