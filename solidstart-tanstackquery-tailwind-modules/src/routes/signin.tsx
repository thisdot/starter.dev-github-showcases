import { Show, createEffect } from 'solid-js';
import { isServer } from 'solid-js/web';
import { useNavigate } from 'solid-start';
import { useAuth } from '~/auth';
import { REDIRECT_URL, SIGN_IN_BASE_URL } from '~/utils/constants';

export default function SignIn() {
  const signInHref = `${SIGN_IN_BASE_URL}?redirect_url=${REDIRECT_URL}`;
  const { authStore }: any = useAuth();
  const navigate = useNavigate();
  createEffect(() => {
    if (authStore.isAuthenticated) {
      navigate('/');
    }
  });
  return (
    <Show when={!authStore.isAuthenticated && !isServer}>
      <main class="flex justify-center items-center bg-black text-gray-500 w-screen h-screen">
        <div>
          <a
            href={signInHref}
            class="w-full mb-3 px-4 py-3 border border-solid border-gray-500 rounded-md font-medium relative"
          >
            Sign in with GitHub
          </a>
        </div>
      </main>
    </Show>
  );
}
