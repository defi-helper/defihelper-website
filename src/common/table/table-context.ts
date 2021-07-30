import React from 'react';

export const TableSecondLevelContext =
  React.createContext<{
    parent: string;
  } | null>(null);

export const TableFirstLevelContext =
  React.createContext<{
    setHeadColsCount: (arg: number) => void;
    setBodyColsCount: (arg: number) => void;
    tableState: {
      headerColsCount: number;
      bodyColsCount: number;
    };
  } | null>(null);
