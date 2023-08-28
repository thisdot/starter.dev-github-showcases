// Inspired by https://github.com/TahaSh/qwikql/blob/main/src/useQuery.ts

import { $ } from '@builder.io/qwik';

export interface QueryOptions {
  url: string;
  variables?: Record<string, unknown>;
  signal?: AbortSignal;
  headersOpt?: HeadersInit;
}

export const useQuery = (query?: string) => {
  const executeQuery$ = $(async ({ url, signal, variables, headersOpt }: QueryOptions) => {
    const fetchObj: {
      headers: HeadersInit;
      method?: string;
      signal?: AbortSignal;
      body?: string;
    } = {
      headers: {
        ...headersOpt,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
    };
    if (query) {
      fetchObj['method'] = 'POST';
      fetchObj['signal'] = signal;
      fetchObj['body'] = JSON.stringify({ query, variables });
    }
    return await fetch(url, fetchObj);
  });

  return { executeQuery$ };
};
