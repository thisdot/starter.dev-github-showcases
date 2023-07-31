import { createEffect, createResource, Show } from 'solid-js';
import { Outlet, useLocation, useNavigate } from '@solidjs/router';
import ROUTES from '../../routes';
import { useAuth } from '../../auth';
import { Header } from '../Header';
import getProfile from '../../services/get-profile';

const AuthGuard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authStore, setAuth } = useAuth();
  const [data] = createResource(getProfile);

  createEffect(() => {
    if (!authStore.isAuthenticated) {
      navigate(ROUTES.SIGNIN, { replace: true });
    } else if (data() && !data.loading) {
      setAuth({ ...authStore, user: data() });
    }
    sessionStorage.setItem('auth_return_path', location.pathname);
  });

  return (
    <Show when={authStore.isAuthenticated}>
      <div data-testid="guard">
        <Header />
        <Outlet />
      </div>
    </Show>
  );
};

export default AuthGuard;
