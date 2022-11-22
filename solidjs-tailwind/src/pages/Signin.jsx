import { createEffect, createResource } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { useAuth } from '../auth';
import { API_URL, REDIRECT_URL, SIGN_IN_BASE_URL } from '../helper/constants';

const fetchToken = () =>
  fetch(`${API_URL}/auth/token`, {
    credentials: 'include',
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.access_token;
    });

const SigninPage = () => {
  const signInHref = `${SIGN_IN_BASE_URL}?redirect_url=${REDIRECT_URL}`;
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [token] = createResource(fetchToken);

  createEffect(() => {
    if (token() && !token.loading) {
      setAuth({ token: token() });
      navigate(sessionStorage.getItem('auth_return_path'));
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
