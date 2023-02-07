import { createSignal, For } from 'solid-js';
import { OrgAbout } from '~/components/OrgAbout';
// import { createQuery } from '@tanstack/solid-query';
// import { useParams } from 'solid-start';
import { RepoCard } from '~/components/RepoCard';
import { repoCardMockedData } from '~/components/RepoCard/data';

// import getOrgRepos from '../services/get-org-repos';

// const parseRepoData = (repos) => {
//   return repos?.edges.map((res) => res.node);
// };

export default function OrgProfile() {
  // const params = useParams();
  const [orgInfo] = createSignal<{
    name: string;
    avatarUrl: string;
  }>({
    name: '',
    avatarUrl: '',
  });


  // const orgRepos = createQuery(() => ['org-repos'], getOrgRepos({organization: params?.org, first: 10,}));

  // createEffect(() => {
  //   if (orgRepos.isSuccess && orgRepos.data) {
  //     const result = parseRepoData(orgRepos.data.repositories);
  //     setOrgInfo(orgRepos.data.orgInfo);
  //   }
  // });

  return (
    <div class="relative pt-4">
      <div class="border-b border-gray-200 sticky top-0 bg-white hidden md:block z-30">
        <div class="grid grid-cols-12 max-w-screen-lg mx-auto bg-red-300">
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
            {/* TODO: replace repoCardProps with real data */}
            <For each={[repoCardMockedData]}>
              {(props) => <RepoCard {...props} isProfilePage />}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
}
