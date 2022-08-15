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
import * as styles from './trade-exchanges.css';

type Exchange = {
  Icon: string;
  Name: string;
};

export type TradeExchangesProps = {
  className?: string;
  exchanges?: Exchange[] | null;
};

const MAX_EXCHANGES = 28;

export const TradeExchanges: React.VFC<TradeExchangesProps> = (props) => {
  const exchanges = props.exchanges?.slice(0, MAX_EXCHANGES) ?? [];

  return (
    <Grid.Container className={clsx(props.className)}>
      <Typography
        variant="h2"
        family="mono"
        transform="uppercase"
        className={styles.title}
      >
        {props.exchanges?.length ?? 0} exchanges supported
      </Typography>
      <ul className={styles.list}>
        {exchanges.map((protocol, index) => {
          const key = index;

          return (
            <li key={key} className={styles.listItem}>
              <MainChip
                icon={protocol.Icon ?? undefined}
                name={protocol.Name}
              />
            </li>
          );
        })}
        {props.exchanges && props.exchanges.length > MAX_EXCHANGES && (
          <li className={styles.listItem}>
            <Button
              variant="outlined"
              className={styles.protocolButton}
              as={ReactRouterLink}
              to={URLS.protocols}
            >
              +{props.exchanges.length - MAX_EXCHANGES} more
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
            href={`${config.LAUNCH_APP_URL}roadmap?tag=exchangeRequest`}
          >
            + suggest exchange
          </Button>
        </li>
      </ul>
    </Grid.Container>
  );
};
