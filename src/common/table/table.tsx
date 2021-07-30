import clsx from 'clsx';
import React, { useReducer, useCallback } from 'react';

import { useTableStyles } from './table.styles';
import { TableFirstLevelContext } from './table-context';
import { MarkdownTable } from './table-types';
import {
  tableReducer,
  initialTableState,
  setBodyColsCount,
  setHeadColsCount
} from './table.reducer';

export type TableProps = React.HTMLProps<HTMLTableElement> & MarkdownTable;

export const Table: React.FC<TableProps> = (props) => {
  const classes = useTableStyles();

  const [state, dispatch] = useReducer(tableReducer, initialTableState);

  const handleSetBodyCount = useCallback((payload: number) => {
    dispatch(setBodyColsCount(payload));
  }, []);

  const handleSetHeadCount = useCallback((payload: number) => {
    dispatch(setHeadColsCount(payload));
  }, []);

  return (
    <TableFirstLevelContext.Provider
      value={{
        setBodyColsCount: handleSetBodyCount,
        setHeadColsCount: handleSetHeadCount,
        tableState: state
      }}
    >
      <div className={classes.root} id={props.id}>
        <table className={clsx(classes.table, props.className)}>
          {props.children}
        </table>
      </div>
    </TableFirstLevelContext.Provider>
  );
};
