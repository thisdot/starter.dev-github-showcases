import { useRouter } from 'next/router';
import RepoPage from '@components/RepoPage';
import RepoHeader from '@components/RepoHeader';
import RepoIssues from '@components/RepoIssues';

const RepoIssuesPage = () => {
  const { query } = useRouter();

  return (
    <RepoPage {...query}>
      <RepoHeader />
      <div className="md:py-12 max-w-screen-xl mx-auto">
        <RepoIssues />
      </div>
    </RepoPage>
  );
};

export default RepoIssuesPage;
