import { JSXElement, Show, children, createEffect } from 'solid-js';
import Header from '../components/Header/header';
import { useAuth } from '~/auth';
import { createQuery } from '@tanstack/solid-query';
import getViewerProfile from '~/services/get-viewer-profile';
interface LayoutProps {
  children: JSXElement;
}

export const Layout = (props: LayoutProps) => {
  const { authStore, setAuth } = useAuth();
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
