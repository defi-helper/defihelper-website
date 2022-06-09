import clsx from 'clsx';
import React from 'react';

import { Factoid } from 'src/common/factoid';
import { Grid } from 'src/common/grid';
import { Head } from 'src/common/head';
import { Typography } from 'src/common/typography';
import { Video } from 'src/common/video';
import { LandingLayout } from 'src/layouts';
import decentralized from 'src/assets/images/security/decentralized.svg';
import no_vaults_or_pools from 'src/assets/images/security/no-vaults-or-pools.svg';
import non_custodial from 'src/assets/images/security/non-custodial.svg';
import the_code_is_open from 'src/assets/images/security/the-code-is-open.svg';
import the_protocol_has_no_control from 'src/assets/images/security/the-protocol-has-no-control.svg';
import two_layer_architecture from 'src/assets/images/security/two-layer-architecture.svg';
import { SecurityHow } from './common';
import * as styles from './security.css';

export type SecurityProps = unknown;

const TEXTS: { icon: string; title: string; description?: string }[] = [
  {
    icon: no_vaults_or_pools,
    title: 'No vaults or pools',
    description: 'You always stay in control of your funds'
  },
  {
    icon: decentralized,
    title: 'Decentralized'
  },
  {
    icon: non_custodial,
    title: 'Non-custodial'
  },
  {
    icon: the_code_is_open,
    title: 'The code is open and audited'
  },
  {
    icon: two_layer_architecture,
    title: 'Two-layer architecture'
  },
  {
    icon: the_protocol_has_no_control,
    title: 'The protocol has no control over the bulk of the deposit'
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
        videoId="8tY0KjVn4so"
        title={
          <div className={styles.videoTitle}>
            How DeFiHelper Keeps Your Funds Safe
          </div>
        }
      />
    </LandingLayout>
  );
};
