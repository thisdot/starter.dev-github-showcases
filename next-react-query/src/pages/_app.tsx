import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useSession, signIn } from 'next-auth/client';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [session] = useSession();
  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      signIn();
    }
  }, [session]);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
export default MyApp;
