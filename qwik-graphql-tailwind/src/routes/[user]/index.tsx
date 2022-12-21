import { component$, useClientEffect$, useContextProvider, useStore } from '@builder.io/qwik';
import { AUTH_TOKEN, GITHUB_GRAPHQL } from '~/utils/constants';
import { useQuery } from '~/utils/useQuery';
import { USER_PROFILE_QUERY } from '~/utils/queries/user-profile-query';
import { useLocation } from '@builder.io/qwik-city';
import { User } from './types';
import { UserProfileCard } from '../../components/user-profile-card/user-profile-card';
import ProfileNav from '../../components/profile-nav/profile-nav';
import { UserRepos } from '../../components/user-repos/user-repos';
import filterStore, { FilterStoreProps } from '~/context/repo-filter';
import { DefaultLanguage, TypeFilter, RepositoryOrderField } from '~/components/repo-filters/types';

interface UserStore {
  isLoading: boolean;
  user: User | null;
}

interface ProfileQueryParams {
  username: string;
  afterCursor?: string;
  beforeCursor?: string;
  orderBy?: string;
}

export default component$(() => {
  const store = useStore<UserStore>({
    user: null,
    isLoading: true,
  });

  const filterState = useStore<FilterStoreProps>({
    search: '',
    language: DefaultLanguage.default,
    type: TypeFilter.ALL,
    sortBy: RepositoryOrderField.UpdatedAt,
  });

  useContextProvider(filterStore, filterState);

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

  if (store.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div class="relative pt-8 bg-white">
      <div class="border-b border-gray-200 sticky top-0 bg-white z-20 hidden md:block">
        <div class="grid grid-cols-12 gap-8 max-w-screen-2xl mx-auto">
          <div class="col-span-12 md:col-span-4 xl:col-span-3" />
          <div class="col-span-12 md:col-span-8 xl:col-span-9">
            <ProfileNav className="border-none" pathname={location.pathname} />
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-screen-2xl py-8 px-4">
        <div class="grid grid-cols-12 gap-8">
          <div class="relative z-20 col-span-12 md:-top-20 md:col-span-4 xl:col-span-3">
            {store.user ? <UserProfileCard {...store.user} /> : null}
          </div>
          <div class="col-span-12 md:col-span-8 xl:col-span-9">
            <ProfileNav className="border-none md:hidden" pathname={location.pathname} />
            {store.user?.repositories ? (
              <UserRepos repos={store.user?.repositories} owner={location.params.user} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
});

export function updateUserProfile(store: UserStore, response: any) {
  store.isLoading = false;
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
      authorization: `Bearer ${sessionStorage.getItem(AUTH_TOKEN)}`,
    },
  });

  return await resp.json();
}
