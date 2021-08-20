import clsx from 'clsx';
import React from 'react';
import { TableSecondLevelContext } from './table-context';
import { MarkdownTable } from './table-types';

import * as styles from './table.css';

export type TableBodyProps = React.ComponentProps<'tbody'> & MarkdownTable;

export const TableBody: React.FC<TableBodyProps> = (props) => {
  return (
    <TableSecondLevelContext.Provider value={{ parent: 'body' }}>
      <tbody className={clsx(styles.tableBody, props.className)}>
        {props.children}
      </tbody>
    </TableSecondLevelContext.Provider>
  );
};
