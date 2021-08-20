import React, { useContext, Children } from 'react';
import clsx from 'clsx';
import { useMount } from 'react-use';

import * as styles from './table.css';
import { MarkdownTable } from './table-types';
import {
  TableFirstLevelContext,
  TableSecondLevelContext
} from './table-context';

export type TableRowProps = React.ComponentProps<'tr'> & MarkdownTable;

export const TableRow: React.FC<TableRowProps> = (props) => {
  const children = Children.toArray(props.children);

  const tableFirstLevelContext = useContext(TableFirstLevelContext);
  const tableSecondLevelContext = useContext(TableSecondLevelContext);

  useMount(() => {
    if (tableSecondLevelContext?.parent === 'body') {
      tableFirstLevelContext?.setBodyColsCount(children.length);
    } else {
      tableFirstLevelContext?.setHeadColsCount(children.length);
    }
  });

  return (
    <tr className={clsx(styles.tableRow, props.className)}>{props.children}</tr>
  );
};
