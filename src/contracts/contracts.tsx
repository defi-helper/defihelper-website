import contracts from '@defihelper/networks/contracts.json';
import React from 'react';

import { MarkdownCode } from 'src/common/markdown-code';
import { LandingLayout } from 'src/layouts';
import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import { Head } from 'src/common/head';

import * as styles from './contracts.css';
import { header } from './contracts.css';

const networks: Record<string, string> = {
  1: 'Ethereum',
  // 1666600000: 'Harmony',
  56: 'Binance Smart Chain',
  137: 'Polygon',
  1285: 'Moonriver',
  43114: 'Avalanche',
  waves: 'Waves'
  // main: 'Waves',
  // W: 'Waves',
  // 3: 'Ropsten',
  // 42: 'Kovan',
  // 4: 'Rinkeby',
  // 5: 'Goerli',
  // 97: 'Binance Smart Chain Testnet',
  // 43113: 'Avalanche (testnet)'
};

export const Contracts: React.VFC = () => {
  return (
    <LandingLayout>
      <Head title="Contracts" />
      <Grid.Container variant="md">
        {Object.entries(contracts).map(([network, contract]) => (
          <div key={network}>
            <Typography variant="h3" className={styles.header}>
              {networks[network]}
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
