import { RepoHeader } from '../components/RepoHeader';
import RepoIssues from '../components/RepoIssues/RepoIssues';
import { PrAndIssuesProvider } from '../contexts/PrAndIssuesContext';

const Issues = () => {
  return (
    <div class="bg-white h-screen">
      <PrAndIssuesProvider>
        <RepoHeader />
        <RepoIssues />
      </PrAndIssuesProvider>
    </div>
  );
};

export default Issues;
