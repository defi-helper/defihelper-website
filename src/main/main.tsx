import React, { useMemo, useState } from 'react';
import { useMedia, useThrottle } from 'react-use';

import { useDialog } from 'src/common/dialog';
import { ContactAnnounce } from 'src/contacts/contact-announce';
import { ContactSuccess } from 'src/contacts/contact-success';
import { useRestakeStrategyQuery } from 'src/graphql/_generated-hooks';
import { LandingLayout } from 'src/layouts';
import { FaqText } from 'src/common/faq-text';
import { CollectedProgress } from 'src/collected-progress';
import { Head } from 'src/common/head';
import {
  MainChart,
  MainEditor,
  MainExplore,
  MainHeader,
  MainServices,
  MainTable,
  MainTeam
} from './common';
import * as styles from './main.css';

export const Main: React.VFC = () => {
  const isDesktop = useMedia('(min-width: 960px)');

  const [sum, setSum] = useState(1000);
  const [apy, setApy] = useState(100);

  const [openAnnouce] = useDialog(ContactAnnounce);
  const [openSuccess] = useDialog(ContactSuccess);

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
        progress={
          <CollectedProgress count={isDesktop ? 55 : 29} topTitle mainPage />
        }
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
      <MainExplore
        className={styles.section}
        onNotify={handleOpenAnnounce}
        progress={<CollectedProgress count={8} bottomTitle />}
      />
      <MainEditor className={styles.section} />
      <MainTable className={styles.section} />
      <MainTeam className={styles.section} />
      <FaqText className={styles.section} />
    </LandingLayout>
  );
};
