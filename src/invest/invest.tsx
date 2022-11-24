import React, { useMemo, useState } from 'react';
import { useThrottle } from 'react-use';

import { useDialog } from 'src/common/dialog';
import { Head } from 'src/common/head';
import { contactsApi } from 'src/contacts/common/contacts-api';
import { ContactSuccess } from 'src/contacts/contact-success';
import opengraph from 'src/assets/images/invest.jpg';
import {
  useProtocolsQuery,
  useRestakeStrategyQuery
} from 'src/graphql/_generated-hooks';
import { LandingLayout } from 'src/layouts';
import {
  MainBlockchains,
  MainChart,
  MainJoinCommunity,
  MainProtocols,
  MainSecurity
} from 'src/main/common';
import { InvestHero } from './common/invest-hero';
import { InvestHowWorks } from './common/invest-how-works';
import { InvestPools } from './invest-pools';
import { InvestWhy } from './common/invest-why';
import * as styles from './invest.css';

export type InvestProps = unknown;

export const Invest: React.FC<InvestProps> = () => {
  const [{ data: protocolsData }] = useProtocolsQuery();

  const [sum, setSum] = useState(10000);
  const [apy, setApy] = useState(100);

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
        title="Yield Aggregator & Yield Optimizer"
        description="Best Cross-chain Yield Aggregator and Yield Optimizer for crypto. Automate your DeFi strategies across chains, earn more with our auto-staking feature"
        keywords={[
          'Yield Aggregator',
          'Yield Optimizer',
          'defihelper',
          'cross chain yield aggregator',
          'best yield aggregator',
          'best yiled optimizer',
          'yield aggregator crypto',
          'auto compound yield farming'
        ]}
        ogImage={opengraph}
      />
      <div className={styles.hero}>
        <InvestHero />
      </div>
      <InvestWhy className={styles.section} />
      <InvestPools className={styles.section} />
      <InvestHowWorks className={styles.section} />
      <MainChart
        className={styles.section}
        onChangeApy={handleChangeApy}
        onChangeSum={handleChangeSum}
        apy={apy}
        sum={sum}
        data={data?.restakeStrategy}
      />
      <MainBlockchains className={styles.section} />
      <MainProtocols
        className={styles.section}
        protocols={protocolsData?.protocols.list}
      />
      {/* <FaqText className={styles.section} /> */}
      <MainSecurity className={styles.security} />
      <MainJoinCommunity
        onSubmit={handleSubscribe}
        className={styles.section}
      />
    </LandingLayout>
  );
};
