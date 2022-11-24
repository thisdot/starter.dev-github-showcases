import { useLocation, useNavigate } from '@solidjs/router';

const preventUnauthorised = (authStore, redirectPath) => () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!authStore.isAuthenticated) {
    sessionStorage.setItem('auth_return_path', location.pathname);
    navigate(redirectPath, { replace: true });
  }
};

export default preventUnauthorised;


//<AuthGuard>
//  <Route component={Home} path={ROUTES.HOME} />
//</AuthGuard>
