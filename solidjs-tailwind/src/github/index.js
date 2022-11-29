import { Octokit } from '@octokit/rest';
import { useAuth } from '../auth';

export const useOctokit = () => {
  const { authStore } = useAuth();
  if (!authStore.isAuthenticated) {
    throw new Error(
      'Trying to use GitHub without authentication, did you forget to use `preventUnauthenticated`?'
    );
  }

  return new Octokit({
    auth: authStore.token,
  });
};
