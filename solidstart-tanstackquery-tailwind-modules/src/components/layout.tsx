import { JSXElement, Show, children, createEffect } from 'solid-js';
import Header from '../components/Header/header';
import { useAuth } from '~/auth';
import { StoreProps } from '~/auth/AuthStore';
import { createQuery } from '@tanstack/solid-query';
import getViewerProfile from '~/services/get-viewer-profile';
import { SetStoreFunction } from 'solid-js/store';
interface LayoutProps {
  children: JSXElement;
}

export const Layout = (props: LayoutProps) => {
  const {
    authStore,
    setAuth,
  }: { authStore: StoreProps; setAuth: SetStoreFunction<StoreProps> } =
    useAuth();
  const c = children(() => props.children);

  const query = createQuery(() => [], getViewerProfile);

  createEffect(() => {
    if (query.isSuccess && !query.isLoading) {
      setAuth({ ...authStore, user: query.data });
    }
  });

  return (
    <>
      <Show when={authStore.isAuthenticated}>
        <Header />
      </Show>
      <main class="min-h-screen bg-gray-100">{c()}</main>
    </>
  );
};

export default Layout;
