import React, { useCallback, useEffect } from 'react';

import { useModalContext } from './modal-context';

type Fn = () => void;

export const useModal = (modal: React.ReactNode, closable = true): [Fn, Fn] => {
  const { onOpen, onClose, closeOnOverlay } = useModalContext();

  const handleOpen = useCallback(() => onOpen(modal), [modal, onOpen]);

  useEffect(() => {
    closeOnOverlay(closable);
  }, [closable, closeOnOverlay]);

  return [handleOpen, onClose];
};
