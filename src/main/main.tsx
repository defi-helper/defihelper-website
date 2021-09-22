import React, { useMemo, useState } from 'react';
import { useThrottle } from 'react-use';

import {
  useProtocolsQuery,
  useRestakeStrategyQuery
} from 'src/graphql/_generated-hooks';
import { LandingLayout } from 'src/layouts';
import {
  MainChart,
  MainEditor,
  MainExplore,
  MainFaq,
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

  return (
    <LandingLayout>
      <MainHeader className={styles.header} />
      <MainChart
        className={styles.section}
        onChangeApy={handleChangeApy}
        onChangeSum={handleChangeSum}
        apy={apy}
        sum={sum}
        data={data?.restakeStrategy}
      />
      <MainServices className={styles.section} />
      <MainExplore className={styles.section} />
      <MainEditor className={styles.section} />
      <MainProtocols
        className={styles.section}
        protocols={protocolsData?.protocols.list}
      />
      <MainTable className={styles.section} />
      <MainTeam className={styles.section} />
      <MainFaq className={styles.section} />
    </LandingLayout>
  );
};
