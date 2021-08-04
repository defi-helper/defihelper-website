import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import { Paper } from 'src/common/paper';
import { Link } from 'src/common/link';
import { Button } from 'src/common/button';
import { config } from 'src/config';
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

export const MainProtocols: React.VFC<MainProtocolsProps> = (props) => {
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
        {props.protocols?.map((protocol) => (
          <li key={protocol.id} className={styles.listItem}>
            <Paper className={styles.protocol}>
              {protocol.icon && (
                <img
                  src={protocol.icon}
                  alt=""
                  className={styles.protocolIcon}
                />
              )}
              <Typography transform="uppercase" variant="h4" family="mono">
                {protocol.name}
              </Typography>
            </Paper>
          </li>
        ))}
        {props.protocols && props.protocols.length > 64 && (
          <li className={styles.listItem}>
            <Button
              variant="outlined"
              className={clsx(styles.protocol, styles.protocolButton)}
            >
              +64 more
            </Button>
          </li>
        )}
        {config.SHOW_ADD_PROTOCOL_BUTTON && (
          <li className={styles.listItem}>
            <Button
              variant="outlined"
              color="secondary"
              className={clsx(styles.protocol, styles.protocolButton)}
              as={Link}
              href={`${config.LAUNCH_APP_URL}proposals`}
            >
              +ADD Protocol
            </Button>
          </li>
        )}
      </ul>
    </Grid.Container>
  );
};
