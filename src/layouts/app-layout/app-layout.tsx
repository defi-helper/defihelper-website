import React from 'react';

import { LayoutHeaderMini, LayoutContainer } from '../common';
import * as styles from './app-layout.css';

export type AppLayoutProps = unknown;

export const AppLayout: React.FC<AppLayoutProps> = (props) => {
  return (
    <div className={styles.root}>
      <LayoutHeaderMini />
      <LayoutContainer>{props.children}</LayoutContainer>
    </div>
  );
};
