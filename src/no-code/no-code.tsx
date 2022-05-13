import clsx from 'clsx';
import React from 'react';

import { Factoid } from 'src/common/factoid';
import { Grid } from 'src/common/grid';
import { Head } from 'src/common/head';
import { Typography } from 'src/common/typography';
import { Video } from 'src/common/video';
import { LandingLayout } from 'src/layouts';
import { NoCodeScheme } from './common';
import * as styles from './no-code.css';

export type NoCodeProps = unknown;

const TEXTS = [
  {
    title: "Automations' constructor",
    description:
      "Create automated investment strategies without having to know coding: 'Take Profit', 'Stop Loss', 'Send a Notification If <Condition>' and many others"
  },
  {
    title: 'Boost your APY',
    description:
      'Auto-staking is a built-in automation. It helps you earn more by automatically adding your profits to the deposit, effectively autocompounding your interest'
  },
  {
    title: 'Scenarios marketplace',
    description:
      'Find ready-made high-yield strategies on the investment marketplace (soon)'
  },
  {
    title: 'No vaults or pools',
    description:
      'DFH does not place your funds in liquidity pools (vaults) and does not exchange the funds for liquidity pool tokens. You always stay in control of your funds.'
  },
  {
    title: 'Two-layered architecture',
    description:
      'The protocol is architecturally divided into two layers to ensure a maximum degree of security, and transparency.'
  }
];

export const NoCode: React.VFC<NoCodeProps> = () => {
  return (
    <LandingLayout>
      <Head title="No-code automation" />
      <Grid.Container className={clsx(styles.header, styles.mb)}>
        <Typography
          variant="h1"
          family="mono"
          transform="uppercase"
          className={styles.title}
        >
          No-code automation
        </Typography>
        <NoCodeScheme />
      </Grid.Container>
      <Grid.Container className={styles.mb}>
        <Factoid>{TEXTS}</Factoid>
      </Grid.Container>
      <Video
        className={styles.mb}
        title={
          <div className={styles.videoTitle}>
            How to Enable Auto-Staking In DeFiHelper
          </div>
        }
      />
    </LandingLayout>
  );
};
