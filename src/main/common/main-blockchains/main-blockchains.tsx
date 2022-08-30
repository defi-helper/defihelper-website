import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import { Link } from 'src/common/link';
import { Button } from 'src/common/button';
import { config } from 'src/config';
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
        {blockchains.length} Supported blockchains
      </Typography>
      <ul className={styles.list}>
        {blockchains.map((protocol) => (
          <li key={protocol.title} className={styles.listItem}>
            <MainChip icon={protocol.icon ?? undefined} name={protocol.title} />
          </li>
        ))}
        <li className={styles.listItem}>
          <Button
            variant="outlined"
            color="secondary"
            className={styles.protocolButton}
            as={Link}
            target="_blank"
            href={`${config.LAUNCH_APP_URL}roadmap`}
          >
            + Suggest Blockchain
          </Button>
        </li>
      </ul>
    </Grid.Container>
  );
};
