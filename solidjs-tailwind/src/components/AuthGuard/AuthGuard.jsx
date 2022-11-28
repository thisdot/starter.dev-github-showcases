import ROUTES from '../../routes';
import { useAuth } from '../../auth';
import { useNavigate, useLocation } from '@solidjs/router';
import { Show, children } from 'solid-js';

const AuthGuard = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authStore } = useAuth();
  const c = children(() => props.children);

  if (!authStore.isAuthenticated) {
    sessionStorage.setItem('auth_return_path', location.pathname);
    navigate(ROUTES.SIGNIN, { replace: true });
  }

  return <Show when={authStore.isAuthenticated}>{c()}</Show>;
};

export default AuthGuard;
