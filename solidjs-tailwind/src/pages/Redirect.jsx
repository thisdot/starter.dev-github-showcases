import { useNavigate } from '@solidjs/router';
import { createEffect, createResource } from 'solid-js';
import { useAuth } from '../auth';
import { API_URL } from '../helper/constants';

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

const Redirect = () => {
  const route = useNavigate();
  const { setAuth } = useAuth();
  const [token] = createResource(fetchToken);
  const storage = window.sessionStorage || sessionStorage;
  createEffect(() => {
    if (token() && !token.loading) {
      setAuth({ token: token() });
      storage.setItem('token', token());
      route(sessionStorage.getItem('auth_return_path') || '/');
    }
  });
  return <div>Redirecting...</div>;
};

export default Redirect;
