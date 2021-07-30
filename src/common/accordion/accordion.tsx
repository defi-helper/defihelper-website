import React, { useCallback, useReducer } from 'react';
import clsx from 'clsx';

import { AccordionContext } from './accordion-context';
import { AccordionDetails } from './accordion-details';
import { AccordionSummary } from './accordion-summary';
import * as styles from './accordion.css';

export type AccordionProps = {
  className?: string;
  children: React.ReactNode;
};

const initialState = {
  expanded: false,
  detailsHeight: 0,
  summaryHeight: 0
};

const reducer = (
  state: typeof initialState,
  action: { type: string; payload: Partial<typeof initialState> }
) => {
  switch (action.type) {
    case 'setState':
      return {
        ...state,
        ...action.payload
      };
    default:
      return initialState;
  }
};

export const Accordion = (props: AccordionProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleExpand = useCallback(() => {
    dispatch({
      type: 'setState',
      payload: {
        expanded: !state.expanded
      }
    });
  }, [state]);

  const handleDetailHeight = useCallback((height: number) => {
    dispatch({
      type: 'setState',
      payload: {
        detailsHeight: height
      }
    });
  }, []);

  const handleSummaryHeight = useCallback((height: number) => {
    dispatch({
      type: 'setState',
      payload: {
        summaryHeight: height
      }
    });
  }, []);

  return (
    <AccordionContext.Provider
      value={{
        expanded: state.expanded,
        handleExpand,
        handleSummaryHeight,
        handleDetailHeight
      }}
    >
      <div
        className={clsx(styles.root, props.className, {
          [styles.hided]: !state.expanded
        })}
        style={{
          height: state.expanded
            ? state.detailsHeight + state.summaryHeight
            : state.summaryHeight
        }}
      >
        {props.children}
      </div>
    </AccordionContext.Provider>
  );
};

Accordion.Details = AccordionDetails;
Accordion.Summary = AccordionSummary;
