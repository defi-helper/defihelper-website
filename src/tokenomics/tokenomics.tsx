import { useMedia } from 'react-use';
import React from 'react';

import { useDialog } from 'src/common/dialog';
import { config } from 'src/config';
import { useGovTokenQuery } from 'src/graphql/_generated-hooks';
import { LandingLayout } from 'src/layouts';
import { LinkDialog } from 'src/common/link-dialog';
import { FaqText } from 'src/common/faq-text';
import { CollectedProgress } from 'src/collected-progress';
import { Head } from 'src/common/head';
import {
  TokenomicsHeader,
  TokenomicsHowTo,
  TokenomicsHolders,
  TokenomicsPrivate,
  TokenomicsProfit,
  TokenomicsTable,
  TokenomicsCharts
} from './common';
import * as styles from './tokenomics.css';

export type TokenomicsProps = unknown;

const NETWORK = config.IS_DEV ? 3 : 1;
const CONTRACT_ADDRESS = '0xa57fEd13d1558116E90009f872AeC868D710D605';

export const Tokenomics: React.VFC<TokenomicsProps> = () => {
  const isDesktop = useMedia('(min-width: 960px)');

  const [{ data }] = useGovTokenQuery({
    variables: {
      filter: {
        network: NETWORK,
        contract: CONTRACT_ADDRESS
      }
    }
  });

  const [openLinksDialog] = useDialog(LinkDialog);

  const handleOpenLinkDialog = async () => {
    openLinksDialog().catch(console.error);
  };

  return (
    <LandingLayout>
      <Head title="Tokenomics" />
      <TokenomicsHeader
        price={data?.govToken.price}
        marketCap={data?.govToken.marketCap}
        circulatingSupply={data?.govToken.circulation.total}
        totalSupply={data?.govToken.totalSupply}
        className={styles.header}
        onGetDFH={handleOpenLinkDialog}
      />
      {/* <TokenomicsCharts className={styles.section} /> */}
      <TokenomicsTable className={styles.section} />
      <TokenomicsPrivate className={styles.section} />
      <TokenomicsProfit className={styles.section} />
      <TokenomicsHolders className={styles.section} />
      <TokenomicsHowTo
        marketCap={data?.govToken.marketCap}
        circulatingSupply={data?.govToken.circulation.total}
        circulation={data?.govToken.circulation}
        className={styles.section}
      />
      <FaqText className={styles.section} />
    </LandingLayout>
  );
};
