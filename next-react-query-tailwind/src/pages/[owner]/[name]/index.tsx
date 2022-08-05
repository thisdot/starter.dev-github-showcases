import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { withAuthRedirect } from '@lib/withAuthRedirect';
import RepoPage from '@components/RepoPage';
import FileExplorer from '@components/FileExplorer';
import RepoHeader from '@components/RepoHeader';
import RepoAboutWidget from '@components/RepoAboutWidget/RepoAboutWidget';
import RepoNavigation from '@components/RepoNavigation';
import RepoReadMe from '@components/RepoReadMe';

const RepoHome: NextPage = () => {
  const { query } = useRouter();

  return (
    <RepoPage {...query}>
      <RepoHeader />
      <div className="max-w-screen-2xl mx-auto md:py-8 px-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7 xl:col-span-9">
            <RepoNavigation />
            <FileExplorer />
            <RepoReadMe />
          </div>
          <div className="col-span-12 md:col-span-5 xl:col-span-3">
            <RepoAboutWidget />
          </div>
        </div>
      </div>
    </RepoPage>
  );
};

export const getServerSideProps: GetServerSideProps = withAuthRedirect();

export default RepoHome;
