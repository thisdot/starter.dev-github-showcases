import FileExplorer from '../components/FileExplorer';
import { RepoProvider } from '../contexts/RepoContext';
import { BranchNavigation } from '../components/BranchNavigation';

const RepoTree = () => {
  return (
    <RepoProvider>
      <div class="bg-white h-screen">
        {/* <RepoHeader /> */}
        <div class="max-w-screen-2xl mx-auto md:py-8 px-4">
          <div class="grid grid-cols-12 gap-8">
            <div class="col-span-12 md:col-span-7 xl:col-span-9">
              <BranchNavigation  />
              <FileExplorer />
            </div>
          </div>
        </div>
      </div>
    </RepoProvider>
  );
};

export default RepoTree;
