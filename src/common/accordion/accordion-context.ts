import React from 'react';

type AccordionContextValue = {
  handleExpand: () => void;
  expanded: boolean;
  handleSummaryHeight: (height: number) => void;
  handleDetailHeight: (height: number) => void;
};

export const AccordionContext =
  React.createContext<AccordionContextValue | null>(null);
