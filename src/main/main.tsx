import React from 'react';

import { MainLayout } from 'src/layouts';
import { MainFaq, MainHeader, MainServices } from './common';

export const Main: React.VFC = () => {
  return (
    <MainLayout>
      <MainHeader />
      <MainServices />
      <MainFaq />
    </MainLayout>
  );
};
