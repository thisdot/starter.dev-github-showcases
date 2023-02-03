import { JSXElement, Show, children } from 'solid-js';
import Header from '../components/Header/header';
import { useAuth } from '~/auth';
import { StoreProps } from '~/auth/AuthStore';

interface LayoutProps {
  children: JSXElement;
}

export const Layout = (props: LayoutProps) => {
  const { authStore }: { authStore: StoreProps } = useAuth();
  const c = children(() => props.children);

  return (
    <>
      <Show when={authStore.isAuthenticated}>
        <Header />
      </Show>
      <main class="min-h-screen bg-gray-100">
        {c()}
      </main>
    </>
  );
};

export default Layout;
