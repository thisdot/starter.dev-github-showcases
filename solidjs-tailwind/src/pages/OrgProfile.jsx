import { UserRepos, OrgAbout } from '../components';
import { GITHUB_GRAPHQL } from '../helper/constants';
import getOrgRepos from '../services/get-org-repos';
import { createEffect, createResource, createSignal } from 'solid-js';

const parseRepoData = (repos) => {
  return repos?.edges.map((res) => res.node);
}

const OrgProfile = () => {
  const [repos, setRepos] = createSignal([])
  const [loading, setLoading] = createSignal(true)

  // const [resp] = createResource(() => getOrgRepos({
  //   url: `${GITHUB_GRAPHQL}`,
  //   variables: {
  //     organization: 'thisdot',
  //     first: 10,
  //   },
  // }))

  createEffect(() => {
    const fetchOrgRepos = async () => {
      const resp = await getOrgRepos({
        url: `${GITHUB_GRAPHQL}`,
        variables: {
          organization: 'thisdot',
          first: 10,
        },
      });
      console.log('====================================');
      console.log(resp);
      console.log('====================================');
      const result = parseRepoData(resp);
      setRepos(result);
      setLoading(false);
    };

    fetchOrgRepos()
    // if(resp() && !resp.loading) {
    //   const result = parseRepoData(resp());
    //   setRepos(result);
    // }
  })

  return (
    <div class="relative pt-4">
      <div class="border-b border-gray-200 sticky top-0 bg-white hidden md:block z-50">
        <div class="grid grid-cols-12 max-w-screen-lg mx-auto">
          <div class="col-span-12 md:col-span-8 xl:col-span-12 px-4">
            <OrgAbout />
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
            {/* TODO: replace repoCardProps with real data */}
            <UserRepos loading={loading()} repos={repos()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgProfile;
