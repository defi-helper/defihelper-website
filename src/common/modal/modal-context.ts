import React, { createContext, useContext } from 'react';

export const ModalContext =
  createContext<{
    onOpen: (node: React.ReactNode, key?: string) => void;
    onClose: () => void;
    closeOnOverlay: (value: boolean) => void;
  } | null>(null);

const ERROR_MESSAGE = 'ModalContext is null';

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) throw new Error(ERROR_MESSAGE);

  return context;
};

export const ModalContext2 =
  createContext<{
    contentRef?: (instance: HTMLDivElement | null) => void;
  } | null>(null);

export const useModalContext2 = () => {
  const context = useContext(ModalContext2);

  if (!context) throw new Error(ERROR_MESSAGE);

  return context;
};
