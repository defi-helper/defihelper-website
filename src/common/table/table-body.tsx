import clsx from 'clsx';
import React from 'react';
import { TableSecondLevelContext } from './table-context';
import { MarkdownTable } from './table-types';

import { useTableStyles } from './table.styles';

export type TableBodyProps = React.HTMLProps<HTMLTableSectionElement> &
  MarkdownTable;

export const TableBody: React.FC<TableBodyProps> = (props) => {
  const classes = useTableStyles();

  return (
    <TableSecondLevelContext.Provider value={{ parent: 'body' }}>
      <tbody className={clsx(classes.tableBody, props.className)}>
        {props.children}
      </tbody>
    </TableSecondLevelContext.Provider>
  );
};
