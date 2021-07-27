import React from 'react';

import { LayoutHeader, LayoutFooter, LayoutContainer } from '../common';
import * as styles from './main-layout.css';

export const MainLayout: React.FC = (props) => {
  return (
    <div className={styles.root}>
      <LayoutHeader />
      <LayoutContainer>{props.children}</LayoutContainer>
      <LayoutFooter />
    </div>
  );
};
