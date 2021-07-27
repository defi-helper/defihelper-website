import clsx from 'clsx';
import React, { Children, useEffect, useState } from 'react';
import { useUpdateEffect, useKeyPress } from 'react-use';

import { Portal } from '../portal';
import { useModalStyles } from './modal.styles';
import { useBodyScrollLock } from '../use-body-scroll-lock';
import { ModalContext2 } from './modal-context';

export type ModalProps = {
  open: boolean;
  onBack?: () => void;
  onClose?: () => void;
  children: React.ReactElement | React.ReactElement[];
  className?: string;
};

export const Modal: React.VFC<ModalProps> = (props) => {
  const classes = useModalStyles();
  const [isPressed] = useKeyPress('Escape');
  const { onClose, open, children, onBack } = props;
  const child = Children.only(children);

  const [rootElement, setRootElement] = useState<HTMLDivElement | null>(null);
  useBodyScrollLock(open, rootElement);

  useUpdateEffect(() => {
    if (isPressed && open) {
      onClose?.();
    }
  }, [isPressed, onClose, open]);

  const [overlayElement, setOverlayElement] =
    useState<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClose = () => onClose?.();
    overlayElement?.addEventListener('click', handleClose);

    return () => overlayElement?.removeEventListener('click', handleClose);
  }, [overlayElement, onClose]);

  if (!open) return null;

  return (
    <Portal>
      <div className={classes.root}>
        <div className={classes.overlay} ref={setOverlayElement} />
        <div className={clsx(classes.child, props.className)}>
          <ModalContext2.Provider value={{ contentRef: setRootElement }}>
            {React.cloneElement(child, {
              onClose,
              ...(onBack ? { onBack } : {})
            })}
          </ModalContext2.Provider>
        </div>
      </div>
    </Portal>
  );
};
