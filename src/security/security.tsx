import clsx from 'clsx';
import React from 'react';
import { Factoid } from 'src/common/factoid';

import { Grid } from 'src/common/grid';
import { Head } from 'src/common/head';
import { Typography } from 'src/common/typography';
import { Video } from 'src/common/video';
import { LandingLayout } from 'src/layouts';
import { SecurityHow } from './common';
import * as styles from './security.css';

export type SecurityProps = unknown;

const TEXTS = [
  {
    title: 'Decentralized',
    description: 'DFH is decentralized and will be community-governed.'
  },
  {
    title: 'Non-custodial',
    description: 'The protocol does not have access to your private keys.'
  },
  {
    title: 'Transparency and safety',
    description: 'The code is open and audited by HashEx.'
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

export const Security: React.VFC<SecurityProps> = () => {
  return (
    <LandingLayout>
      <Head title="Security" />
      <Grid.Container className={clsx(styles.header, styles.mb)}>
        <Typography
          variant="h1"
          family="mono"
          transform="uppercase"
          className={styles.title}
        >
          Security
        </Typography>
        <SecurityHow />
      </Grid.Container>
      <Grid.Container className={styles.mb}>
        <Factoid>{TEXTS}</Factoid>
      </Grid.Container>
      <Video
        className={styles.mb}
        title={
          <div className={styles.videoTitle}>
            How DeFiHelper Keeps Your Funds Safe
          </div>
        }
      />
    </LandingLayout>
  );
};
