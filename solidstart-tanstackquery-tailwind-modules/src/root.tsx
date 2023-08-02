// @refresh reload
import { Suspense, createEffect } from 'solid-js';
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  useLocation,
  useNavigate,
} from 'solid-start';
import './root.css';

import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { useAuth } from './auth';
import protectedPaths from './utils/protected-paths';
import { StoreProps } from './auth/AuthStore';
import Layout from './components/layout';
import { isServer } from 'solid-js/web';
import { SetStoreFunction } from 'solid-js/store';

export default function Root() {
  const {
    authStore,
    setAuth,
  }: { authStore: StoreProps; setAuth: SetStoreFunction<StoreProps> } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        staleTime: Infinity,
      },
    },
  });
  createEffect(() => {
    const isToken = !isServer && window.sessionStorage.getItem('token');
    if (
      protectedPaths.includes(location.pathname) &&
      !authStore.isAuthenticated
    ) {
      navigate('/signin');
    } else if (isToken) {
      setAuth({ user: authStore.user, token: isToken });
    }
  });

  return (
    <Html lang="en">
      <Head>
        <Title>
          Solid Start - Tanstack Query - Tailwind CSS - CSS Modules Kit
        </Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <QueryClientProvider client={queryClient}>
          <Suspense>
            <ErrorBoundary>
              <Layout>
                <Routes>
                  <FileRoutes />
                </Routes>
              </Layout>
            </ErrorBoundary>
          </Suspense>
        </QueryClientProvider>
        <Scripts />
      </Body>
    </Html>
  );
}
