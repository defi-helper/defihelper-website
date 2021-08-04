import React from 'react';

import { useProtocolsQuery } from 'src/graphql/_generated-hooks';
import { LandingLayout } from 'src/layouts';
import {
  MainChart,
  MainEditor,
  MainExplore,
  MainFaq,
  MainHeader,
  MainProtocols,
  MainServices,
  MainTeam
} from './common';
import * as styles from './main.css';

export const Main: React.VFC = () => {
  const [{ data }] = useProtocolsQuery();

  return (
    <LandingLayout>
      <MainHeader className={styles.header} />
      <MainChart className={styles.section} />
      <MainServices className={styles.section} />
      <MainExplore className={styles.section} />
      <MainEditor className={styles.section} />
      <MainProtocols
        className={styles.section}
        protocols={data?.protocols.list}
      />
      <MainTeam className={styles.section} />
      <MainFaq className={styles.section} />
    </LandingLayout>
  );
};
