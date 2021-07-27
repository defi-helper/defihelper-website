import React, { useCallback, useEffect, useState } from 'react';
import { useUpdateEffect, useKeyPress } from 'react-use';

import { ModalContext } from './modal-context';

export const ModalProvider: React.FC = React.memo((props) => {
  const [modalNode, setModalNode] = useState<React.ReactNode | null>(null);
  const [isPressed] = useKeyPress('Escape');

  const handleClose = useCallback(() => setModalNode(null), []);
  const handleOpen = useCallback(
    (node: React.ReactNode) => setModalNode(node),
    []
  );

  useUpdateEffect(() => {
    if (isPressed && modalNode) {
      setModalNode(null);
    }
  }, [isPressed, modalNode]);

  const [overlayElement] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    overlayElement?.addEventListener('click', handleClose);

    return () => overlayElement?.removeEventListener('click', handleClose);
  }, [overlayElement, handleClose]);

  return (
    <ModalContext.Provider
      value={{
        onClose: handleClose,
        onOpen: handleOpen,
        closeOnOverlay: () => {}
      }}
    >
      {modalNode &&
        React.isValidElement(modalNode) &&
        React.cloneElement(modalNode, {
          ...modalNode.props,
          onClose: handleClose
        })}
      {props.children}
    </ModalContext.Provider>
  );
});
