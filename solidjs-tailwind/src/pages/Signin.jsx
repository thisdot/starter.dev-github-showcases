import { createEffect, createResource } from 'solid-js';
import { useAuth } from '../auth';
import { useNavigate } from '@solidjs/router';

const fetchToken = () =>
  fetch('http://localhost:4000/api/auth/token', {
    credentials: 'include',
  })
    .then((response) => response.json())
    .then((data) => data.access_token);

const SigninPage = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [token] = createResource(fetchToken);
  createEffect(() => {
    if (!token()) {
      return;
    }

    setAuth({ token: token() });
    navigate(sessionStorage.getItem('auth_return_path'));
  });

  return (
    <main class="absolute bg-black text-gray-500 w-full h-full m-0 p-0 table">
      <form class="p-64 block mx-auto mb-2">
        <a
          href="http://localhost:4000/api/auth/signin?redirect_url=http%3A%2F%2Flocalhost%3A3000"
          class="w-full mb-3 px-4 py-3 border border-solid border-gray-500 rounded-md font-medium relative"
        >
          Sign in with GitHub
        </a>
        {token}
      </form>
    </main>
  );
};

export default SigninPage;
