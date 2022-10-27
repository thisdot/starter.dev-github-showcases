import { useNavigate } from '@solidjs/router';

const preventUnauthorised = (authStore, redirectPath) => () => {
  const navigate = useNavigate();
  if (!authStore.isAuthenticated) {
    navigate(redirectPath, { replace: true });
  }
};

export default preventUnauthorised;
