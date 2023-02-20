import { createEffect, createSignal, For, Match, Show, Switch } from 'solid-js';
import { OrgAbout, Skeleton } from '~/components/OrgAbout';
import { createQuery } from '@tanstack/solid-query';
import { useLocation, useParams } from 'solid-start';
import { RepoCard } from '~/components/RepoCard';

import getOrgRepos from '~/services/get-org-repos';
import { RepoFilter } from '~/components/RepoFilter';
import useRepoSortFilter from '~/utils/useRepoSortFilter';
import { PageInfo, Repo } from '~/types/user-repo-type';
import { ProfileNav } from '~/components/ProfileNav';
import { Pagination } from '~/components/Pagination';

export default function OrgProfile() {
  const params = useParams();
  const location = useLocation();
  const [repos, setRepos] = createSignal<Repo[]>([]);
  const [pageInfo, setPageInfo] = createSignal<PageInfo>();
  const [repoLanguages, setRepoLanguages] = createSignal<string[]>([]);
  const [orgInfo, setOrgInfo] = createSignal<{
    name: string;
    avatarUrl: string;
  }>({
    name: '',
    avatarUrl: 'https://via.placeholder.com/150',
  });

  const orgRepos = createQuery(
    () => [
      'query-repos',
      { after: location.query?.after, before: location.query?.before },
    ],
    () =>
      getOrgRepos({
        organization: params?.login,
        afterCursor: location.query?.after,
        beforeCursor: location.query?.before,
        orderBy: {
          direction: 'DESC',
          field: 'UPDATED_AT',
        },
        first: 10,
      })
  );

  createEffect(() => {
    if (orgRepos.isSuccess && orgRepos.data) {
      const [reposResults, languages] = useRepoSortFilter(orgRepos.data.repos);
      setOrgInfo(orgRepos.data.orgInfo);
      setPageInfo(orgRepos.data.pageInfo);
      setRepos(reposResults);
      setRepoLanguages(languages);
    }
  });

  return (
    <div class="relative">
      <div class="border-b bg-gray-50 border-gray-200 sticky top-0 hidden md:block z-40">
        <div class="grid grid-cols-12 max-w-screen-lg mx-auto">
          <div class="col-span-12 md:col-span-8 xl:col-span-12 px-2">
            <Switch fallback={<div />}>
              <Match when={orgRepos.isLoading}>
                <Skeleton />
              </Match>
              <Match when={orgInfo()}>
                <OrgAbout {...orgInfo()} />
              </Match>
            </Switch>
          </div>
          <div class="col-span-12 md:col-span-8 xl:col-span-12">
            <ProfileNav class="border-none" pathname={location.pathname} />
          </div>
        </div>
      </div>
      <div class="max-w-screen-lg mx-auto py-8 px-2">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-12 md:col-span-8 xl:col-span-12">
            <ProfileNav
              class="border-none md:hidden"
              pathname={location.pathname}
            />
            <RepoFilter
              languages={repoLanguages()}
              filteredRepoCount={repos().length}
            />
            <For each={repos()}>
              {(props) => <RepoCard {...props} isProfilePage />}
            </For>

            <Show when={pageInfo()?.hasNextPage || pageInfo()?.hasPreviousPage}>
              <Pagination
                pageInfo={pageInfo()}
                owner={`orgs/${params.login}`}
              />
            </Show>
          </div>
        </div>
      </div>
    </div>
  );
}
