import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { withAuthRedirect } from '@lib/withAuthRedirect';
import RepoPage from '@components/RepoPage';
import FileExplorer from '@components/FileExplorer';
import RepoHeader from '@components/RepoHeader';
import RepoNavigation from '@components/RepoNavigation';
import RepoReadMe from '@components/RepoReadMe';

const RepoBranchTreePath: NextPage = () => {
  const { query } = useRouter();
  return (
    <RepoPage {...query}>
      <RepoHeader />
      <div className="max-w-screen-2xl mx-auto py-8 px-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12">
            <RepoNavigation />
            <FileExplorer />
            <RepoReadMe />
          </div>
        </div>
      </div>
    </RepoPage>
  );
};

export const getServerSideProps: GetServerSideProps = withAuthRedirect();

export default RepoBranchTreePath;
