import clsx from 'clsx';
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
import * as styles from './tokenomics-table.css';

export type TokenomicsTableProps = {
  className?: string;
};

const HEAD = [
  'Reward Item',
  '%',
  'Destribution period',
  'DFH Amount',
  'Description'
];

const BODY = [
  [
    'Development',
    '28%',
    '3-years (on demand)',
    '280,000,000',
    `Grants for outsourced developers. The goal is to scale up the development of DFH — add new features,
    connect new protocols and blockchains, and improve automation scripts — and as a result to increase the volume of protocol commissions.`
  ],
  [
    'Team',
    '19%',
    '1-year lock, 24-month linear release',
    '190,000,000',
    `Core team allocation. The main goal is to ensure the sustained development and proper operation of the protocol.`
  ],
  [
    'Token Sale',
    '17%',
    'Dependent on round',
    '170,000,000',
    `Private and public token sale rounds, which help fund the development and launch of the protocol.`
  ],
  [
    'Marketing',
    '10%',
    '1-year (on demand)',
    '100,000,000',
    `Marketing budget to expand audience reach, increase awareness about DFH, and work with partner projects.`
  ],
  [
    'Liquidity rewards',
    '10%',
    '1-year (on demand)',
    '100,000,000',
    `Rewards for liquidity providers for creating a liquid DFH token market.`
  ],
  [
    'Early ecosystem reward',
    '8%',
    '6-month vesting',
    '80,000,000',
    `Bonuses to early adopters for using the protocol and referring it to friends.`
  ],
  [
    'Community grants',
    '7%',
    '1-year (on demand)',
    '70,000,000',
    `Rewards for helping with protocol promotion.`
  ],
  [
    'Team launch bonus',
    '1%',
    '1-month moratorium on sale',
    '10,000,000',
    `A small bonus to the core team for protocol launch.`
  ]
];

export const TokenomicsTable: React.VFC<TokenomicsTableProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <Typography
        variant="h2"
        transform="uppercase"
        family="mono"
        className={styles.title}
      >
        DFH INITIAL DISTRIBUTION
      </Typography>
      <Table>
        <TableHead className={styles.head}>
          <TableRow className={styles.row}>
            {HEAD.map((title) => (
              <TableCell key={title} className={styles.cell}>
                <Typography variant="body2" as="span">
                  {title}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {BODY.map((bodyItem, bodyItemIndex) => (
            <TableRow key={String(bodyItemIndex)} className={styles.row}>
              {bodyItem.map((value, index) => (
                <TableCell key={String(index)} className={styles.cell}>
                  <Typography variant="body2" as="span">
                    {value}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography className={styles.description}>
        * The tokenomics model may change in response to market conditions
      </Typography>
    </Grid.Container>
  );
};
