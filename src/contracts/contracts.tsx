import contracts from '@defihelper/networks/contracts.json';
import React from 'react';

import { MarkdownCode } from 'src/common/markdown-code';
import { LandingLayout } from 'src/layouts';
import { networksConfig } from 'src/network-config';
import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import { Head } from 'src/common/head';

import * as styles from './contracts.css';

export const Contracts: React.VFC = () => {
  return (
    <LandingLayout>
      <Head title="Contracts" />
      <Grid.Container variant="md">
        {Object.entries(contracts).map(([network, contract]) => (
          <div key={network}>
            <Typography variant="h3" className={styles.header}>
              {networksConfig[network]?.title}
            </Typography>
            {Object.entries(contract).map(([contractName, { address }]) => (
              <div key={contractName} className={styles.section}>
                <Typography>{contractName}</Typography>
                <MarkdownCode value={address}>{address}</MarkdownCode>
              </div>
            ))}
          </div>
        ))}
      </Grid.Container>
    </LandingLayout>
  );
};
