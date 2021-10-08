import React, { useMemo, useState } from 'react';
import { useThrottle } from 'react-use';

import { useDialog } from 'src/common/dialog';
import { ContactAnnounce } from 'src/contacts/contact-announce';
import { ContactSuccess } from 'src/contacts/contact-success';
import {
  useProtocolsQuery,
  useRestakeStrategyQuery
} from 'src/graphql/_generated-hooks';
import { LandingLayout } from 'src/layouts';
import { FaqText } from 'src/common/faq-text';
import { CollectedProgress } from 'src/collected-progress';
import {
  MainChart,
  MainEditor,
  MainExplore,
  MainHeader,
  MainProtocols,
  MainServices,
  MainTable,
  MainTeam
} from './common';
import * as styles from './main.css';

export const Main: React.VFC = () => {
  const [sum, setSum] = useState(10000);
  const [apy, setApy] = useState(100);

  const [openAnnouce] = useDialog(ContactAnnounce);
  const [openSuccess] = useDialog(ContactSuccess);

  const [throttledSum, throttledApy] = useThrottle(
    useMemo(() => [sum, apy / 100], [sum, apy]),
    500
  );

  const [{ data: protocolsData }] = useProtocolsQuery();
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
      <MainHeader
        className={styles.header}
        progress={
          <CollectedProgress count={55} width={12} height={24} topTitle />
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
        progress={
          <CollectedProgress count={8} width={34} height={80} bottomTitle />
        }
      />
      <MainEditor className={styles.section} />
      <MainProtocols
        className={styles.section}
        protocols={protocolsData?.protocols.list}
      />
      <MainTable className={styles.section} />
      <MainTeam className={styles.section} />
      <FaqText className={styles.section} />
    </LandingLayout>
  );
};
