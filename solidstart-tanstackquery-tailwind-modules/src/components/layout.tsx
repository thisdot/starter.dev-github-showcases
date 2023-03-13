import { JSXElement, Show, children, createEffect } from 'solid-js';
import { useAuth } from '~/auth';
import { useLocation } from 'solid-start';
import { ShowcaseHeader } from './ShowcaseHeader';

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
        <ShowcaseHeader />
      </Show>
      <main class="min-h-screen bg-white">{c()}</main>
    </>
  );
};

export default Layout;
