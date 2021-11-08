import { useRouter } from 'next/router';
import RepoPage from '@components/RepoPage';
import FileExplorer from '@components/FileExplorer';

const RepoBranchTree = () => {
  const { query } = useRouter();
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="my-8">
        <RepoPage {...query}>
          <FileExplorer />
        </RepoPage>
      </div>
    </div>
  );
};

export default RepoBranchTree;
