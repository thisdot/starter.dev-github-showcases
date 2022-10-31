import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import { useQuery } from '~/utils/useQuery';
import { USER_PROFILE_QUERY } from '~/utils/queries/user-profile-query';
import { useLocation } from '@builder.io/qwik-city';
import { User } from './types';
import * as styles from './user-page.classNames';
import { UserProfileCard } from '../../components/user-profile-card/user-profile-card';
import ProfileNav from '../../components/profile-nav/profile-nav';
import { UserRepos } from '../../components/user-repos/user-repos';
import { ORG_REPOS_QUERY } from '~/utils/queries/org-repos-query';

interface UserStore {
  user: User | null;
}

interface ProfileQueryParams {
  username: string;
  afterCursor?: string;
  beforeCursor?: string;
  orderBy?: string;
}

interface OrgRepoQueryParams {
  organization: string;
  first: number;
}

export default component$(() => {
  const store = useStore<UserStore>({
    user: null,
  });

  const location = useLocation();

  useClientEffect$(async () => {
    const abortController = new AbortController();
    const response = await fetchUserProfile(
      {
        username: location.params.user,
        afterCursor: location.query?.after,
        beforeCursor: location.query?.before,
        orderBy: location.query?.orderBy,
      },
      abortController
    );

    updateUserProfile(store, response);
  });

  return (
    <div className={styles.container}>
      <div className={styles.stickyNav}>
        <div className={styles.gridNav}>
          <div className="col-span-12 md:col-span-4 xl:col-span-3" />
          <div className={styles.profileNav}>
            <ProfileNav className="border-none" pathname={location.pathname} />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl py-8 px-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="pt-8 relative z-20 col-span-12 md:-top-20 md:col-span-4 xl:col-span-3">
            {store.user ? <UserProfileCard {...store.user} /> : 'Loading...'}
          </div>
          <div className="col-span-12 md:col-span-8 xl:col-span-9">
            <ProfileNav className="border-none md:hidden" pathname={location.pathname} />
            {store.user?.repositories ? (
              <UserRepos repos={store.user?.repositories} owner={location.params.user} />
            ) : (
              'Loading...'
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export function updateUserProfile(store: UserStore, response: any) {
  store.user = response.data.user;
}

export async function fetchUserProfile(
  { username, afterCursor, beforeCursor, orderBy }: ProfileQueryParams,
  abortController?: AbortController
): Promise<any> {
  const { executeQuery$ } = useQuery(USER_PROFILE_QUERY);

  const resp = await executeQuery$({
    signal: abortController?.signal,
    url: GITHUB_GRAPHQL,
    variables: {
      username,
      afterCursor,
      beforeCursor,
      orderBy,
    },
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });

  return await resp.json();
}

export async function fetchOrgRepos(
  { organization, first }: OrgRepoQueryParams,
  abortController?: AbortController
): Promise<any> {
  const { executeQuery$ } = useQuery(ORG_REPOS_QUERY);

  const resp = await executeQuery$({
    signal: abortController?.signal,
    url: GITHUB_GRAPHQL,
    variables: {
      organization,
      first,
    },
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });

  return await resp.json();
}
