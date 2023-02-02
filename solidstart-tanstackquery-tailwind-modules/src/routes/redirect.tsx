import { createQuery } from '@tanstack/solid-query';
import { createEffect } from 'solid-js';
import { isServer } from 'solid-js/web';
import { useNavigate } from 'solid-start';
import { useAuth } from '~/auth';
import { API_URL } from '~/utils/constants';

const fetchToken = async () => {
  const resp = await fetch(`${API_URL}/auth/token`, {
    credentials: 'include',
  });

  const data = await resp.json();
  const token = await data.access_token;

  return token || null;
};

export default function Redirect() {
  const route = useNavigate();
  const { setAuth } = useAuth();

  const query = createQuery(() => [], fetchToken);

  createEffect(() => {
    if (!isServer) {
      const storage = window.sessionStorage || sessionStorage;
      if (query.isSuccess && !query.isLoading) {
        setAuth({ token: query.data });
        storage.setItem('token', query.data);
        route(sessionStorage.getItem('auth_return_path') || '/');
      }
    }
  });

  return <div class="p-4">Redirecting...</div>;
}
