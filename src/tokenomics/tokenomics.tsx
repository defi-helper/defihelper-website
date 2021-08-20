import React from 'react';

import { LandingLayout } from 'src/layouts';
import {
  TokenomicsHeader,
  TokenomicsFaq,
  TokenomicsHowTo,
  TokenomicsHolders,
  TokenomicsProfit,
  TokenomicsTable
} from './common';
import * as styles from './tokenomics.css';

export type TokenomicsProps = unknown;

export const Tokenomics: React.VFC<TokenomicsProps> = () => {
  return (
    <LandingLayout>
      <TokenomicsHeader />
      <div className={styles.section} />
      <TokenomicsTable className={styles.section} />
      <TokenomicsProfit className={styles.section} />
      <TokenomicsHolders className={styles.section} />
      <TokenomicsHowTo className={styles.section} />
      <TokenomicsFaq className={styles.section} />
    </LandingLayout>
  );
};
