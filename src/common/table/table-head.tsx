import clsx from 'clsx';
import React from 'react';

import { useTableStyles } from './table.styles';
import { TableSecondLevelContext } from './table-context';
import { MarkdownTable } from './table-types';

export type TableHeadProps = React.HTMLProps<HTMLTableSectionElement> &
  MarkdownTable;

export const TableHead: React.FC<TableHeadProps> = (props) => {
  const classes = useTableStyles();

  return (
    <TableSecondLevelContext.Provider value={{ parent: 'head' }}>
      <thead className={clsx(classes.tableHead, props.className)}>
        {props.children}
      </thead>
    </TableSecondLevelContext.Provider>
  );
};
