import React, { useContext } from 'react';
import clsx from 'clsx';

import * as styles from './table.css';
import {
  TableSecondLevelContext,
  TableFirstLevelContext
} from './table-context';
import { MarkdownTable } from './table-types';

export type TableCellProps = {
  className?: string;
  rowSpan?: number;
} & MarkdownTable;

export const TableCell: React.FC<TableCellProps> = (props) => {
  const tableFirstLevelContext = useContext(TableFirstLevelContext);
  const tableSecondLevelContext = useContext(TableSecondLevelContext);

  const { className, children, rowSpan, node } = props;

  const isHead = tableSecondLevelContext?.parent === 'head';

  const Component = isHead ? 'th' : 'td';

  const headerColsCount =
    tableFirstLevelContext?.tableState.headerColsCount ?? 0;
  const bodyColsCount = tableFirstLevelContext?.tableState.bodyColsCount ?? 0;

  const bodyBiggerThanHead = node && headerColsCount < bodyColsCount;

  const colSpan = bodyBiggerThanHead && isHead ? bodyColsCount : undefined;

  return (
    <Component
      rowSpan={rowSpan}
      colSpan={colSpan}
      className={clsx(styles.tableCell, className)}
    >
      {children}
    </Component>
  );
};
