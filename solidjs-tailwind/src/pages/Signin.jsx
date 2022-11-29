import { createEffect } from 'solid-js';
import { useAuth } from '../auth';
import { useNavigate } from '@solidjs/router';
import { REDIRECT_URL, SIGN_IN_BASE_URL } from '../helper/constants';

const SigninPage = () => {
  const signInHref = `${SIGN_IN_BASE_URL}?redirect_url=${REDIRECT_URL}`;
  const { authStore } = useAuth();
  const navigate = useNavigate();

  createEffect(() => {
    if (authStore.token) {
      navigate(sessionStorage.getItem('auth_return_path') || '/');
    }
  });

  return (
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
  );
};

export default SigninPage;
