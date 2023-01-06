import FileExplorer from '../components/FileExplorer';
import RepoReadMe from '../components/RepoReadMe/RepoReadMe';
import { BranchNavigation } from '../components/BranchNavigation';
import { RepoAbout } from '../components/RepoAbout';
import { RepoHeader } from '../components/RepoHeader/';

const RepoDetails = () => {
  return (
      <div class="bg-white h-screen">
        <RepoHeader />
        <div class="max-w-screen-2xl mx-auto md:py-8 px-4">
          <div class="grid grid-cols-12 gap-8">
            <div class="col-span-12 md:col-span-7 xl:col-span-9">
              <BranchNavigation />
              <FileExplorer />
              <RepoReadMe />
            </div>
            <div class="col-span-12 md:col-span-5 xl:col-span-3">
              <RepoAbout />
            </div>
          </div>
        </div>
      </div>
  );
};

export default RepoDetails;
