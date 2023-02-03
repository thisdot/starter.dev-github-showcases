import { useAuth } from '~/auth';
import { StoreProps } from '~/auth/AuthStore';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { USER_GISTS_QUERY } from './queries/gists';

const { authStore }: { authStore: StoreProps } = useAuth();

const fetchGists = async () => {
  const response = await fetch(`${GITHUB_GRAPHQL}`, {
    method: 'POST',
    body: JSON.stringify({ query: USER_GISTS_QUERY }),
    headers: {
      Authorization: `Bearer ${authStore.token}`,
    },
  });
  const gists = await response.json();
  return gists;
};

export default fetchGists;
