// Inspired by https://github.com/TahaSh/qwikql/blob/main/src/useQuery.ts

import { $ } from '@builder.io/qwik';

export interface QueryOptions {
  url: string;
  variables?: Record<string, unknown>;
  signal?: AbortSignal;
  headersOpt?: HeadersInit;
}

export const useQuery = (query: string) => {
  const executeQuery$ = $(
    async ({ url, signal, variables, headersOpt }: QueryOptions) =>
      await fetch(url, {
        method: 'POST',
        headers: {
          ...headersOpt,
          'Content-Type': 'application/json',
        },
        signal,
        body: JSON.stringify({
          query,
          variables,
        }),
      })
  );

  return { executeQuery$ };
};
