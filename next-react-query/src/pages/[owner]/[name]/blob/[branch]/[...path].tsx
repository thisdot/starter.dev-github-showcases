import { useRouter } from 'next/router';
import RepoPage from '@components/RepoPage';
import RepoHeader from '@components/RepoHeader';
import FileViewer from '@components/FileViewer/FileViewer.data';
import FileExplorerNav from '@components/FileExplorerNav';

const RepoBranchBlob = () => {
  const { query } = useRouter();
  return (
    <RepoPage {...query}>
      <RepoHeader />
      <div className="max-w-screen-2xl mx-auto py-8 px-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12">
            <FileExplorerNav />
            <FileViewer />
          </div>
        </div>
      </div>
    </RepoPage>
  );
};

export default RepoBranchBlob;
