import { createEffect, createResource, createSignal } from 'solid-js';
import { useParams } from '@solidjs/router';
import { OrgAbout } from '../components/OrgAbout';
import getOrgRepos from '../services/get-org-repos';
import { UserRepos } from '../components/UserRepos';
import ProfileNav from '../components/ProfileNav/ProfileNav';

const parseRepoData = (repos) => {
  return repos?.edges.map((res) => res.node);
};

const OrgProfile = () => {
  const [repos, setRepos] = createSignal([]);
  const [orgInfo, setOrgInfo] = createSignal({});
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
      setOrgInfo(resp().orgInfo);
      setRepos(result);
    }
  });

  return (
    <>
      {resp.loading ? (
        <div>Loading...</div>
      ) : (
        <div class="relative pt-4">
          <div class="border-b border-gray-200 sticky top-0 bg-white hidden md:block z-50">
            <div class="grid grid-cols-12 max-w-screen-lg mx-auto">
              <div class="col-span-12 md:col-span-8 xl:col-span-12 px-4">
                <OrgAbout {...orgInfo()} />
              </div>
              <div class="col-span-12 md:col-span-8 xl:col-span-12">
                <ProfileNav class="border-none" />
              </div>
            </div>
          </div>
          <div class="max-w-screen-lg mx-auto py-8 px-4">
            <div class="grid grid-cols-12 gap-8">
              <div class="col-span-12 md:col-span-8 xl:col-span-12">
                <UserRepos loading={resp.loading} repos={repos()} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrgProfile;
