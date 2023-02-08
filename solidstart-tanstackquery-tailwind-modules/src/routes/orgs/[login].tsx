import { createEffect, createSignal, For } from 'solid-js';
import { OrgAbout } from '~/components/OrgAbout';
import { createQuery } from '@tanstack/solid-query';
import { useParams } from 'solid-start';
import { RepoCard } from '~/components/RepoCard';

import getOrgRepos from '~/services/get-org-repos';
import { Repository } from '~/types/org-repos';

const parseRepoData = (repos: {
  edges: {node: Repository;}[];
}) => {
  return repos?.edges?.map((res) => res.node);
};

export default function OrgProfile() {
  const params = useParams();
  const [repos, setRepos] = createSignal<Repository[]>([]);
  const [orgInfo, setOrgInfo] = createSignal<{
    name: string;
    avatarUrl: string;
  }>({
    name: '',
    avatarUrl: '',
  });

  const orgRepos = createQuery(
    () => ['org-repos'], 
    () => getOrgRepos({ organization: params?.login, first: 10 })
  );

  createEffect(() => {
    if (orgRepos.isSuccess && orgRepos.data) {
      const reposResults = parseRepoData(orgRepos.data.repositories);
      setOrgInfo(orgRepos.data.orgInfo);
      setRepos(reposResults);
    }
  });

  return (
    <div class="relative">
      <div class="border-b border-gray-200 sticky top-0 bg-white hidden md:block z-30">
        <div class="grid grid-cols-12 max-w-screen-lg mx-auto">
          <div class="col-span-12 md:col-span-8 xl:col-span-12 px-2">
            <OrgAbout {...orgInfo()} />
          </div>
          <div class="col-span-12 md:col-span-8 xl:col-span-12">
            {/* TODO:  <ProfileNav /> goes here with class="border-none */}
          </div>
        </div>
      </div>
      <div class="max-w-screen-lg mx-auto py-8 px-2">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-12 md:col-span-8 xl:col-span-12">
            {/* TODO:  <ProfileNav /> goes here with class="border-none */}
            {/* TODO:  <RepoFilter /> goes here */}
            <For each={repos()}>
              {(props) => <RepoCard {...props} isProfilePage />}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
}
