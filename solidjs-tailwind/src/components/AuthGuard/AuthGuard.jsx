import ROUTES from '../../routes';
import { useAuth } from '../../auth';
import { useNavigate, useLocation } from '@solidjs/router';

const AuthGuard = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authStore } = useAuth();

  console.log('AuthGuard', authStore);
  if (!authStore.isAuthenticated) {
    navigate(ROUTES.SIGNIN, { replace: true });
  }

  return <>{props.children}</>;
};

export default AuthGuard;
