import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { withAuthRedirect } from '@lib/withAuthRedirect';
import RepoPage from '@components/RepoPage';
import RepoHeader from '@components/RepoHeader';
import FileViewer from '@components/FileViewer/FileViewer.data';
import RepoNavigation from '@components/RepoNavigation';

const RepoBranchBlob: NextPage = () => {
  const { query } = useRouter();
  return (
    <RepoPage {...query}>
      <RepoHeader />
      <div className="max-w-screen-2xl mx-auto py-8 px-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12">
            <RepoNavigation />
            <FileViewer />
          </div>
        </div>
      </div>
    </RepoPage>
  );
};

export const getServerSideProps: GetServerSideProps = withAuthRedirect();

export default RepoBranchBlob;
