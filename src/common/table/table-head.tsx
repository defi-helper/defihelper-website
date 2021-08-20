import clsx from 'clsx';
import React from 'react';

import * as styles from './table.css';
import { TableSecondLevelContext } from './table-context';
import { MarkdownTable } from './table-types';

export type TableHeadProps = React.ComponentProps<'thead'> & MarkdownTable;

export const TableHead: React.FC<TableHeadProps> = (props) => {
  return (
    <TableSecondLevelContext.Provider value={{ parent: 'head' }}>
      <thead className={clsx(styles.tableHead, props.className)}>
        {props.children}
      </thead>
    </TableSecondLevelContext.Provider>
  );
};
