import React from 'react';
import clsx from 'clsx';

import { ReactComponent as CloseIcon } from 'src/assets/icons/close-24.svg';
import { ReactComponent as ArrowLeft } from 'src/assets/icons/arrow-left.svg';
import { ButtonBase } from 'src/common/button-base';
import { useSmallModalStyles } from './small-modal.styles';
import { useModalContext2 } from '../modal-context';

export type SmallModalProps = {
  onClose?: () => void;
  onBack?: () => void;
  mobile?: boolean;
  className?: string;
  children?: React.ReactNode;
  withoutOnclose?: boolean;
};

export const SmallModal = React.forwardRef<HTMLDivElement, SmallModalProps>(
  (props, ref) => {
    const classes = useSmallModalStyles();

    const modalContext = useModalContext2();

    return (
      <div
        ref={ref}
        className={clsx(
          classes.root,
          props.className,
          props.mobile && classes.mobile
        )}
      >
        <div className={classes.header}>
          {props.onBack && (
            <ButtonBase className={classes.backButton} onClick={props.onBack}>
              <ArrowLeft />
            </ButtonBase>
          )}
          {props.onClose && !props.withoutOnclose && (
            <ButtonBase className={classes.closeButton} onClick={props.onClose}>
              <CloseIcon />
            </ButtonBase>
          )}
        </div>
        <div className={classes.content} ref={modalContext.contentRef}>
          {props.children}
        </div>
      </div>
    );
  }
);

SmallModal.displayName = 'SmallModal';
