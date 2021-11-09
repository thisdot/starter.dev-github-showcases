import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useSession, signOut } from 'next-auth/client';
import { useRouter } from 'next/router';
import { REFRESH_TOKEN_ERROR } from '@lib/jwt';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [session] = useSession();
  const { replace } = useRouter();
  useEffect(() => {
    // If token expired and refresh fails signout and redirect to sign in
    if (session?.error === REFRESH_TOKEN_ERROR) {
      signOut().finally(() => {
        replace('/api/auth/signin');
      });
    }
  }, [session?.error, replace]);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
export default MyApp;
