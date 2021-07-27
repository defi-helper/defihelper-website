import React, { forwardRef } from 'react';

export type PageWrapperProps = {
  className?: string;
  children?: React.ReactNode;
};

export const PageWrapper = forwardRef<HTMLDivElement, PageWrapperProps>(
  function PageWrapper({ children }, ref) {
    return <div ref={ref}>{children}</div>;
  }
);
