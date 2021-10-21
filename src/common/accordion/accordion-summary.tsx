import clsx from 'clsx';
import React, {
  Children,
  cloneElement,
  useContext,
  useRef,
  useMemo
} from 'react';
import { useMount, useUnmount } from 'react-use';

import { AccordionContext } from './accordion-context';
import { throttle } from '../throttle';
import * as styles from './accordion.css';

export type AccordionSummaryProps = {
  className?: string;
  expandIcon?: React.ReactElement;
};

export const AccordionSummary: React.FC<AccordionSummaryProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);

  const accordionContext = useContext(AccordionContext);

  const handleSetSummaryHeight = useMemo(
    () =>
      throttle(() => {
        if (ref.current?.clientHeight) {
          accordionContext?.handleSummaryHeight(ref.current.clientHeight);
        }
      }, 500),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useMount(() => {
    handleSetSummaryHeight();
    window.addEventListener('resize', handleSetSummaryHeight);
  });

  useUnmount(() => {
    window.removeEventListener('resize', handleSetSummaryHeight);
  });

  const expandIcon = Children.only(props.expandIcon);

  const expandIconClassName = expandIcon?.props.className;

  return (
    <div
      className={clsx(styles.summary, props.className)}
      onClick={accordionContext?.handleExpand}
      onKeyPress={accordionContext?.handleExpand}
      role="button"
      tabIndex={0}
      ref={ref}
    >
      {props.children}{' '}
      {expandIcon &&
        cloneElement(expandIcon, {
          className: clsx(styles.arrow, expandIconClassName, {
            [styles.arrowExpanded]: accordionContext?.expanded
          })
        })}
    </div>
  );
};
