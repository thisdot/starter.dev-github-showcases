import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SessionProvider } from 'next-auth/react';

import NavBar from '@components/NavBar';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60 * 60, // 1 hour
    },
  },
});

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider
        session={session}
        refetchWhenOffline={false}
        refetchOnWindowFocus={false}
        refetchInterval={60 * 5}
      >
        <NavBar />
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </SessionProvider>
    </QueryClientProvider>
  );
}
export default MyApp;
