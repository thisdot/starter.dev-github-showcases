import { UserRepos, OrgAbout } from '../components';
import getOrgRepos from '../services/get-org-repos';
import { createEffect, createResource, createSignal } from 'solid-js';
import { useParams } from '@solidjs/router';
import useRepoSortFilter from '../helper/useRepoSortFilter';

const parseRepoData = (repos) => {
  return repos?.edges.map((res) => res.node);
};

const OrgProfile = () => {
  const [repos, setRepos] = createSignal([]);
  const [orgInfo, setOrgInfo] = createSignal({});
  const [reposlanguages, setReposLanguages] = createSignal([]);
  const params = useParams();

  const [resp] = createResource(() =>
    getOrgRepos({
      organization: params?.org,
      first: 10,
    })
  );

  createEffect(() => {
    if (resp() && !resp.loading) {
      const result = parseRepoData(resp().repositories);
      const [reposResults, languages] = useRepoSortFilter(result);
      setOrgInfo(resp().orgInfo);
      setRepos(reposResults);
      setReposLanguages(languages);
    }
  });

  return (
    <div class="relative pt-4">
      <div class="border-b border-gray-200 sticky top-0 bg-white hidden md:block z-50">
        <div class="grid grid-cols-12 max-w-screen-lg mx-auto">
          <div class="col-span-12 md:col-span-8 xl:col-span-12 px-4">
            <OrgAbout {...orgInfo()} />
          </div>
          <div class="col-span-12 md:col-span-8 xl:col-span-12">
            {/* TODO:  <ProfileNav /> goes here with class="border-none */}
          </div>
        </div>
      </div>
      <div class="max-w-screen-lg mx-auto py-8 px-4">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-12 md:col-span-8 xl:col-span-12">
            {/* TODO:  <ProfileNav /> goes here with class="border-none md:hidden" */}
            <UserRepos
              loading={resp.loading}
              repos={repos()}
              languages={reposlanguages()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgProfile;
