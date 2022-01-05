/* eslint-disable react/display-name */
import type { ReactNode, ReactElement } from 'react';
import type { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';
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

const createMockRouter = (router: Partial<NextRouter> = {}) => {
  const mockRouter: NextRouter = {
    basePath: '',
    pathname: '/',
    route: '/',
    asPath: '/',
    query: {},
    push: jest.fn().mockResolvedValue(Promise.resolve()),
    replace: jest.fn().mockResolvedValue(Promise.resolve()),
    reload: jest.fn().mockResolvedValue(Promise.resolve()),
    back: jest.fn().mockResolvedValue(Promise.resolve()),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    isPreview: false,
  };
  return { ...mockRouter, ...router };
};

export const createRouterProvider = (router: Partial<NextRouter> = {}) => {
  return ({ children }: { children: ReactElement }) => (
    <RouterContext.Provider value={createMockRouter(router)}>
      {children}
    </RouterContext.Provider>
  );
};
