import clsx from 'clsx';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import { Link } from 'src/common/link';
import { Button } from 'src/common/button';
import { config } from 'src/config';
import { URLS } from 'src/router/urls';
import { MainChip } from 'src/main/common/main-chip';
import * as styles from './main-protocols.css';

type Protocol = {
  id: string;
  name: string;
  icon?: string | null;
  link?: string | null;
};

export type MainProtocolsProps = {
  className?: string;
  protocols?: Protocol[] | null;
};

const MAX_PROTOCOLS = 28;

export const MainProtocols: React.VFC<MainProtocolsProps> = (props) => {
  const protocols = props.protocols?.slice(0, MAX_PROTOCOLS) ?? [];

  return (
    <Grid.Container className={clsx(props.className)}>
      <Typography
        variant="h2"
        family="mono"
        transform="uppercase"
        className={styles.title}
      >
        {props.protocols?.length ?? 0} protocols Connected
      </Typography>
      <ul className={styles.list}>
        {protocols.map((protocol, index) => (
          <li key={String(index)} className={styles.listItem}>
            <MainChip icon={protocol.icon ?? undefined} name={protocol.name} />
          </li>
        ))}
        {props.protocols && props.protocols.length > MAX_PROTOCOLS && (
          <li className={styles.listItem}>
            <Button
              variant="outlined"
              className={styles.protocolButton}
              as={ReactRouterLink}
              to={URLS.protocols}
            >
              +{props.protocols.length - MAX_PROTOCOLS} more
            </Button>
          </li>
        )}
        <li className={styles.listItem}>
          <Button
            variant="outlined"
            color="secondary"
            className={styles.protocolButton}
            as={Link}
            target="_blank"
            href={`${config.LAUNCH_APP_URL}roadmap`}
          >
            + suggest protocol
          </Button>
        </li>
      </ul>
    </Grid.Container>
  );
};
