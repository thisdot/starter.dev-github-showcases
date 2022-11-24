import { UserRepos, OrgAbout } from '../components';
import { repoCardProps } from '../components/RepoCard/data';

const OrgProfile = () => {
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
            <UserRepos repos={[repoCardProps]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgProfile;
