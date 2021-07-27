import React, { useContext } from 'react';

export type Option = {
  label?: string;
  value?: string | number;
};

export const SelectContext =
  React.createContext<{
    handleAddOption: (option: Option) => void;
    handleSetOption: (option: Option) => void;
  } | null>(null);

export const useSelectContext = () => {
  return useContext(SelectContext);
};
