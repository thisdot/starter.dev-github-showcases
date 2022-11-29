import ROUTES from '../../routes';
import { useAuth } from '../../auth';
import { useNavigate, useLocation, Outlet } from '@solidjs/router';
import { createEffect, createResource } from 'solid-js';
import { Header } from '../Header';
import getProfile from '../../services/get-profile';

const AuthGuard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authStore, setAuth } = useAuth();
  const [data] = createResource(getProfile);

  createEffect(() => {
    if (!authStore.isAuthenticated) {
      sessionStorage.setItem('auth_return_path', location.pathname);
      navigate(ROUTES.SIGNIN, { replace: true });
    } else {
      setAuth({...authStore, user: data()})
    }
  })

  return (
    <div>
      <Header user={authStore.user} />
      <Outlet />
    </div>
  );
};

export default AuthGuard;
