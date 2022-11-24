import { UserRepos, OrgAbout } from '../components';
import { GITHUB_GRAPHQL } from '../helper/constants';
import getOrgRepos from '../services/get-org-repos';
import { useAuth } from '../auth';

const OrgProfile = async () => {


  useAuth().preventUnauthorised();
  const { edges } = await getOrgRepos({
    url: `${GITHUB_GRAPHQL}`,
    variables: {
      organization: 'thisdot',
      first: 10,
    },
  });

  // use a parseer to the data
  console.log(edges);

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
            <UserRepos repos={[]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgProfile;
