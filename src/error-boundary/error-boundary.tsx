import React, { Component, ErrorInfo } from 'react';

import { Sentry } from './sentry';

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error;
};

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state = {
    hasError: false,
    error: new Error()
  };

  public static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error({ error, errorInfo });
    Sentry.log(error, errorInfo as unknown as Record<string, unknown>);
  }

  private handleReloadPage = () => {
    window.location.reload();
  };

  public render() {
    const { error, hasError } = this.state;

    if (hasError) {
      return (
        <div>
          <>
            Oh-oh, something went wrong.
            <br />
            Please <button onClick={this.handleReloadPage}>reload page</button>
          </>
        </div>
      );
    }

    return this.props.children;
  }
}
