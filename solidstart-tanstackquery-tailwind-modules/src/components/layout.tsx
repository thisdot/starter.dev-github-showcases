/* @refresh reload */
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
      <Show when={authStore.isAuthenticated}>
        <div class="flex justify-center pb-5 pt-6 mt-auto">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.netlify.com"
          >
            <img
              src="https://www.netlify.com/v3/img/components/netlify-light.svg"
              alt="Deploys by Netlify"
            />
          </a>
        </div>
      </Show>
    </>
  );
};

export default Layout;
