import clsx from 'clsx';
import React from 'react';

import { ReactComponent as CheckedIcon } from 'src/assets/icons/checked.svg';
import { ReactComponent as UncheckedIcon } from 'src/assets/icons/unchecked.svg';
import { Grid } from 'src/common/grid';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'src/common/table';
import { Typography } from 'src/common/typography';
import * as styles from './main-table.css';

export type MainTableProps = {
  className?: string;
};

const HEAD = [
  'Feature',
  'DeFiHelper',
  'InstaDapp',
  'Zerion',
  'DeBank',
  'AutoFarm'
];

const BODY = {
  'Portfolio tracker': [1, 1, 1, 1, 0],
  Autostaking: [1, 0, 0, 0, 1],
  'Smart notifications': [1, 0, 0, 0, 0],
  'No-code automation': [1, 1, 0, 0, 0]
};

export const MainTable: React.VFC<MainTableProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <Typography
        variant="h2"
        transform="uppercase"
        family="mono"
        className={styles.title}
      >
        Competitors
      </Typography>
      <Table>
        <TableHead className={styles.head}>
          <TableRow className={styles.row}>
            {HEAD.map((title) => (
              <TableCell key={title} className={styles.cell}>
                <Typography as="span">{title}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(BODY).map(([title, values]) => (
            <TableRow key={title} className={styles.row}>
              <TableCell className={styles.cell}>
                <Typography as="span">{title}</Typography>
              </TableCell>
              {values.map((value, index) => (
                <TableCell key={String(index)} className={styles.cell}>
                  {value ? <CheckedIcon /> : <UncheckedIcon />}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid.Container>
  );
};
