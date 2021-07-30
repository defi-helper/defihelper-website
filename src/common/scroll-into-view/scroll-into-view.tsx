import clsx from 'clsx';
import React from 'react';
import { ButtonBase } from '../button-base';

import { useScrollStyles } from './scroll-into-view.styles';
import { useScrollIntoView } from './use-scroll-into-view';

export type ScrollIntoViewProps = {
  target: string;
  className?: string;
};

export const ScrollIntoView: React.FC<ScrollIntoViewProps> = (props) => {
  const classes = useScrollStyles();

  const handleScrollIntoView = useScrollIntoView(props.target);

  return (
    <ButtonBase
      onClick={handleScrollIntoView}
      className={clsx(props.className, classes.scrollIntoView)}
    >
      {props.children}
    </ButtonBase>
  );
};
