import { useRouter } from 'next/router';
import RepoPage from '@components/RepoPage';
import RepoHeader from '@components/RepoHeader';
import RepoPulls from '@components/RepoPulls';

const RepoPullsPage = () => {
  const { query } = useRouter();

  return (
    <RepoPage {...query}>
      <RepoHeader />
      <div className="md:py-12 max-w-screen-xl mx-auto">
        <RepoPulls />
      </div>
    </RepoPage>
  );
};

export default RepoPullsPage;
