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
  '%',
  'Reward Item',
  'Description',
  'Destribution period',
  'DFH Amount'
];

const BODY = [
  [
    '30%',
    'Development grants',
    'Integer sagittis euismod vitae penatibus libero, facilisi. Nulla elit suspendisse mauris fringilla turpis posuere. ',
    '3 years',
    '300,000,000'
  ],
  [
    '19%',
    'Core contributors',
    'Faucibus amet, cum sit consequat ipsum velit aliquam non. Turpis faucibus dui nunc, non.',
    '1-year vesting',
    '190,000,000'
  ],
  [
    '15%',
    'Early investors',
    'Aliquet turpis egestas neque pharetra nec a neque libero luctus. Diam sagittis volutpat dignissim suscipit.',
    '4 month moratorium on sale',
    '150,000,000'
  ],
  [
    '10%',
    'Marketing',
    'Orci, non lorem blandit pretium nulla id. Diam imperdiet sed at sem sed morbi.',
    '1 year',
    '100,000,000'
  ],
  [
    '10%',
    'Liquidity rewards',
    'Integer sagittis euismod vitae penatibus libero, facilisi. Nulla elit suspendisse mauris fringilla turpis posuere. ',
    '1 year',
    '100,000,000'
  ],
  [
    '8%',
    'Early ecosystem reward',
    'Faucibus amet, cum sit consequat ipsum velit aliquam non. Turpis faucibus dui nunc, non.',
    '1 month with 6-month vesting',
    '80,000,000'
  ],
  [
    '7%',
    'Community grants',
    'Aliquet turpis egestas neque pharetra nec a neque libero luctus. Diam sagittis volutpat dignissim suscipit.',
    '1-year vesting',
    '70,000,000'
  ],
  [
    '1%',
    'Core contributors Launch Bonus',
    'Orci, non lorem blandit pretium nulla id. Diam imperdiet sed at sem sed morbi.',
    '1 month moratorium on sale',
    '10,000,000'
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
    </Grid.Container>
  );
};
