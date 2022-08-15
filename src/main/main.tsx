import React from 'react';

import {
  useLandingMediumPostsQuery,
  useProtocolsQuery,
  useTreasuryQuery
} from 'src/graphql/_generated-hooks';
import { LandingLayout } from 'src/layouts';
import { FaqText } from 'src/common/faq-text';
import { Head } from 'src/common/head';
import crypto_omg from 'src/assets/images/crypto_omg.png';
import big_brain_holdings from 'src/assets/images/big_brain_holdings.png';
import starter from 'src/assets/images/starter.png';
import huckleberry from 'src/assets/images/huckleberry.png';
import perpetual from 'src/assets/images/perpetual.png';
import vc from 'src/assets/images/vc.svg';
import cointelgraph from 'src/assets/images/cointelgraph.svg';
import hackernoon from 'src/assets/images/hackernoon.svg';
import { contactsApi } from 'src/contacts/common/contacts-api';
import { ContactSuccess } from 'src/contacts/contact-success';
import { useDialog } from 'src/common/dialog';
import {
  MainBlockchains,
  MainExplore,
  MainHeader,
  MainProtocols,
  MainTeam,
  MainPartners,
  MainInvestors,
  MainMedium,
  MainJoinCommunity,
  MainSecurity,
  MainEarn
} from './common';
import * as styles from './main.css';

const INVESTORS = [
  {
    title: 'bigbrainholdings',
    link: 'https://www.bigbrain.holdings/',
    image: big_brain_holdings
  },
  {
    title: 'starter',
    link: 'https://6kstarter.com/',
    image: starter
  },
  {
    title: 'cryptoomg',
    link: 'https://cryptoomg.com/',
    image: crypto_omg
  },
  {
    title: 'huckleberry',
    link: 'https://www.huckleberry.finance/',
    image: huckleberry
  },
  {
    title: 'perpetual',
    link: 'https://perp.com/',
    image: perpetual
  }
];

const PRESS = [
  {
    title: 'vc',
    link: '',
    image: vc
  },
  {
    title: 'cointelgraph',
    link: '',
    image: cointelgraph
  },
  {
    title: 'huckleberry',
    link: '',
    image: hackernoon
  }
];

export const Main: React.VFC = () => {
  const [{ data: treasuryData }] = useTreasuryQuery();
  const [{ data: protocolsData }] = useProtocolsQuery();
  const [{ data: mediumData }] = useLandingMediumPostsQuery();

  const [openSuccess] = useDialog(ContactSuccess);

  const handleSubscribe = async (formValues: {
    name: string;
    email: string;
  }) => {
    try {
      await contactsApi.sendForm('2', formValues);

      await openSuccess({ name: formValues.name });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return (
    <LandingLayout>
      <Head
        title="Best DeFi Platform for Yield Farming & Trading"
        keywords={[
          'top defi',
          'defi platform',
          'yield farming',
          'defi yield farming',
          'yieldfarming',
          'best defi platform',
          'top defi platform',
          'defi decentralized finance'
        ]}
        description="Earn more with DeFiHelper - top DeFi Platform for Yield Farming and Trading. Automate your DeFi strategies across chains. Use trailing buy or stop-loss/take-profit features. "
      />
      <MainHeader
        className={styles.header}
        portfoliosCount={treasuryData?.treasury.portfoliosCount ?? 0}
        walletsCount={treasuryData?.treasury.walletsCount ?? 0}
        protocolsCount={treasuryData?.treasury.protocolsCount ?? 0}
        contractsCount={treasuryData?.treasury.contractsCount ?? 0}
      />
      <MainEarn className={styles.section} />
      <MainBlockchains className={styles.section} />
      <MainProtocols
        className={styles.section}
        protocols={protocolsData?.protocols.list}
      />
      <MainTeam className={styles.section} />
      <MainExplore className={styles.section} />
      <FaqText className={styles.section} />
      <MainInvestors title="Investors and partners" className={styles.section}>
        {INVESTORS}
      </MainInvestors>
      <MainInvestors title="Press" className={styles.section}>
        {PRESS}
      </MainInvestors>
      <MainMedium
        landingMediumPosts={(mediumData?.landingMediumPosts ?? []).slice(0, 4)}
        className={styles.section}
      />
      {false && <MainPartners className={styles.section} />}
      <MainSecurity className={styles.security} />
      <MainJoinCommunity
        onSubmit={handleSubscribe}
        className={styles.section}
      />
    </LandingLayout>
  );
};
