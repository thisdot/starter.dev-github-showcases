/* eslint-disable react/display-name */
import type { ReactNode } from 'react';
import { render } from '@testing-library/react';
import * as React from 'react';
import { useErrorBoundary } from 'use-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClientOptions = {
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
};

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = new QueryClient(queryClientOptions);
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  };
}

export function createWrapper() {
  const testQueryClient = new QueryClient(queryClientOptions);
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}

export function ErrorBoundaryTestComponent({
  children,
}: {
  children: ReactNode;
}) {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();
  if (didCatch) {
    return <div data-testid="errorBoundary">{error.message}</div>;
  }
  return <ErrorBoundary>{children}</ErrorBoundary>;
}
