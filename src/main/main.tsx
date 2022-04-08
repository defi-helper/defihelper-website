import React, { useMemo, useState } from 'react';
import { useThrottle } from 'react-use';

import { useDialog } from 'src/common/dialog';
import { ContactAnnounce } from 'src/contacts/contact-announce';
import { ContactSuccess } from 'src/contacts/contact-success';
import {
  useLandingMediumPostsQuery,
  useProtocolsQuery,
  useRestakeStrategyQuery,
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
import russ_vench from 'src/assets/images/russ_vench.svg';
import vc from 'src/assets/images/vc.svg';
import cointelgraph from 'src/assets/images/cointelgraph.svg';
import hackernoon from 'src/assets/images/hackernoon.svg';
import {
  MainBlockchains,
  MainChart,
  MainEditor,
  MainExplore,
  MainHeader,
  MainProtocols,
  MainServices,
  MainTable,
  MainTeam,
  MainPartners,
  MainInvestors,
  MainMedium
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
    title: 'russ_vench',
    link: '',
    image: russ_vench
  },
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
  const [sum, setSum] = useState(10000);
  const [apy, setApy] = useState(100);

  const [openAnnouce] = useDialog(ContactAnnounce);
  const [openSuccess] = useDialog(ContactSuccess);

  const [{ data: treasuryData }] = useTreasuryQuery();
  const [{ data: protocolsData }] = useProtocolsQuery();
  const [{ data: mediumData }] = useLandingMediumPostsQuery();

  const [throttledSum, throttledApy] = useThrottle(
    useMemo(() => [sum, apy / 100], [sum, apy]),
    500
  );
  const [{ data }] = useRestakeStrategyQuery({
    variables: { balance: throttledSum, apy: throttledApy }
  });

  const handleChangeSum = (value: number) => {
    setSum(value);
  };

  const handleChangeApy = (value: number) => {
    setApy(value);
  };

  const handleOpenAnnounce = async () => {
    try {
      const name = await openAnnouce();

      await openSuccess({ name });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return (
    <LandingLayout>
      <Head title="Autopilot for your DeFi portfolio" />
      <MainHeader
        className={styles.header}
        portfoliosCount={treasuryData?.treasury.portfoliosCount ?? 0}
        protocolsCount={treasuryData?.treasury.protocolsCount ?? 0}
        contractsCount={treasuryData?.treasury.contractsCount ?? 0}
      />
      <MainChart
        className={styles.section}
        onChangeApy={handleChangeApy}
        onChangeSum={handleChangeSum}
        apy={apy}
        sum={sum}
        data={data?.restakeStrategy}
      />
      <MainServices className={styles.section} />
      <MainBlockchains className={styles.section} />
      <MainProtocols
        className={styles.section}
        protocols={protocolsData?.protocols.list}
      />
      <MainExplore className={styles.section} onNotify={handleOpenAnnounce} />
      <MainTable className={styles.section} />
      <MainTeam className={styles.section} />
      <MainEditor className={styles.section} />
      <MainMedium
        landingMediumPosts={(mediumData?.landingMediumPosts ?? []).slice(0, 4)}
        className={styles.section}
      />
      <FaqText className={styles.section} />
      <MainInvestors title="Investors and partners" className={styles.section}>
        {INVESTORS}
      </MainInvestors>
      <MainInvestors title="Press" className={styles.section}>
        {PRESS}
      </MainInvestors>
      {false && (
        <>
          <MainPartners className={styles.section} />
        </>
      )}
    </LandingLayout>
  );
};
