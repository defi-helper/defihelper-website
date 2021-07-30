import React from 'react';

import { LayoutHeader, LayoutFooter, LayoutContainer } from '../common';
import * as styles from './landing-layout.css';

export const LandingLayout: React.FC = (props) => {
  return (
    <div className={styles.root}>
      <LayoutHeader />
      <LayoutContainer>{props.children}</LayoutContainer>
      <LayoutFooter />
    </div>
  );
};
