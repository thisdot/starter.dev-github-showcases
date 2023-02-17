import { JSXElement, Show, children, createEffect } from 'solid-js';
import Header from '../components/Header/header';
import { useAuth } from '~/auth';
import { useLocation } from 'solid-start';

interface LayoutProps {
  children: JSXElement;
}

export const Layout = (props: LayoutProps) => {
  const { authStore } = useAuth();
  const location = useLocation();
  const c = children(() => props.children);

  createEffect(() => {
    if (
      !authStore.isAuthenticated &&
      !['/signin', '/redirect'].includes(location.pathname)
    ) {
      window.location.href = '/signin';
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
