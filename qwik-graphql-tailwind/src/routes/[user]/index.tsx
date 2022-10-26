import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { useQuery } from '~/utils/useQuery';
import { USER_PROFILE_QUERY } from '~/utils/queries/user-profile-query';
import { UserProfileCard } from './user-profile-card';
import { useLocation } from '@builder.io/qwik-city';
import { User } from './types';

interface UserStore {
  user: User | null;
}

export default component$(() => {
  const store = useStore<UserStore>({
    user: null,
  });

  const location = useLocation();

  useClientEffect$(async () => {
    const abortController = new AbortController();
    const response = await fetchUserProfile(location.params.user, abortController);

    updateUserProfile(store, response);
  });

  return <div>{store.user ? <UserProfileCard {...store.user} /> : 'Loading...'}</div>;
});

export function updateUserProfile(store: UserStore, response: any) {
  store.user = response.data.user;
}

export async function fetchUserProfile(username: string, abortController?: AbortController): Promise<any> {
  const { executeQuery$ } = useQuery(USER_PROFILE_QUERY);

  const resp = await executeQuery$({
    signal: abortController?.signal,
    url: GITHUB_GRAPHQL,
    variables: {
      username,
    },
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });

  return await resp.json();
}
