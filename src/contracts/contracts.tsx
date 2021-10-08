import contracts from '@defihelper/networks/contracts.json';
import React from 'react';

import { config } from 'src/config';
import { MarkdownCode } from 'src/common/markdown-code';
import { LandingLayout } from 'src/layouts';
import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';

type ContractsType = typeof contracts[keyof typeof contracts];

const contractMap = Object.entries(contracts).reduce((acc, [key, contract]) => {
  acc.set(key, contract);

  return acc;
}, new Map<string, ContractsType>());

export const Contracts: React.VFC = () => {
  const currentNetworkContracts = contractMap.get(config.IS_DEV ? '3' : '1');

  return (
    <LandingLayout>
      <Grid.Container>
        {currentNetworkContracts &&
          Object.entries(currentNetworkContracts).map(
            ([contractName, { address }]) => (
              <div key={contractName}>
                <Typography>{contractName}</Typography>
                <MarkdownCode value={address}>{address}</MarkdownCode>
              </div>
            )
          )}
      </Grid.Container>
    </LandingLayout>
  );
};
