import { BranchNavigation } from '../components/BranchNavigation';
import { FileViewer } from '../components/FileViewer';
import { RepoHeader } from '../components/RepoHeader/';

const RepoBlob = () => {
  return (
    <div class="bg-white h-screen">
      <RepoHeader />
      <div class="max-w-screen-2xl mx-auto md:py-8 px-4">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-12 md:col-span-7 xl:col-span-9">
            <BranchNavigation />
            <FileViewer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoBlob;
