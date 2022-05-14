import React from 'react';

import { Grid } from 'src/common/grid';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'src/common/table';
import { Typography } from 'src/common/typography';
import { useProtocolsQuery } from 'src/graphql/_generated-hooks';
import { LandingLayout } from 'src/layouts';
import { ReactComponent as CheckedIcon } from 'src/assets/icons/checked.svg';
import { ReactComponent as UncheckedIcon } from 'src/assets/icons/unchecked.svg';
import { Link } from 'src/common/link';
import { Head } from 'src/common/head';
import { config } from 'src/config';
import * as styles from './protocols.css';

export type ProtocolsProps = unknown;

export const Protocols: React.VFC<ProtocolsProps> = () => {
  const [{ data: protocolsData }] = useProtocolsQuery();

  return (
    <LandingLayout>
      <Head title="Supported protocols" />
      <Grid.Container className={styles.root}>
        <Typography
          variant="h2"
          family="mono"
          transform="uppercase"
          className={styles.title}
        >
          Supported protocols
        </Typography>
        <Typography className={styles.subtitle}>
          Don&apos;t see your favourite platform here?{' '}
          <Link
            target="_blank"
            href={`${config.LAUNCH_APP_URL}roadmap?tag=protocolRequest`}
            color="blue"
          >
            Submit it here
          </Link>
        </Typography>
        <Table>
          <TableHead className={styles.head}>
            <TableRow className={styles.row}>
              <TableCell>
                <Typography variant="body2" as="span">
                  Platform
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" as="span">
                  Balances
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" as="span">
                  Staking
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" as="span">
                  Automation
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {protocolsData?.protocols.list?.map((protocol) => {
              const isDebank = protocol.adapter === 'debankByApiReadonly';

              return (
                <TableRow className={styles.row} key={protocol.id}>
                  <TableCell>
                    <Link
                      href={`https://app.defihelper.io/protocols${
                        isDebank ? '/readonly' : ''
                      }/${protocol.id}`}
                    >
                      <Typography
                        variant="body2"
                        as="span"
                        className={styles.protcolName}
                      >
                        {protocol.icon ? (
                          <img
                            src={protocol.icon}
                            alt=""
                            className={styles.protocolIcon}
                          />
                        ) : (
                          <span className={styles.placeholder} />
                        )}
                        {protocol.name}
                      </Typography>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" as="span">
                      <CheckedIcon />
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" as="span">
                      {!isDebank ? <CheckedIcon /> : <UncheckedIcon />}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" as="span">
                      {!isDebank ? <CheckedIcon /> : <UncheckedIcon />}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid.Container>
    </LandingLayout>
  );
};
