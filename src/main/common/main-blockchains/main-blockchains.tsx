import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import { MainChip } from 'src/main/common/main-chip';
import { networksConfig } from 'src/network-config';
import * as styles from './main-blockchains.css';

export type MainBlockchainsProps = {
  className?: string;
};

export const MainBlockchains: React.VFC<MainBlockchainsProps> = (props) => {
  const blockchains = Object.values(networksConfig);

  return (
    <Grid.Container className={clsx(props.className)}>
      <Typography
        variant="h2"
        family="mono"
        transform="uppercase"
        className={styles.title}
      >
        Supported blockchains
      </Typography>
      <ul className={styles.list}>
        {blockchains?.map((protocol, index) => (
          <li key={String(index)} className={styles.listItem}>
            <MainChip icon={protocol.icon ?? undefined} name={protocol.title} />
          </li>
        ))}
      </ul>
    </Grid.Container>
  );
};
