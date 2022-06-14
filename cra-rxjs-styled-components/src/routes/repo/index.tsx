import { Outlet } from 'react-router';
import { RepoLayout } from '../../components/layouts/RepoLayoutPage';
import Header from '../../components/header';
import SubHeader from '../../components/sub-header';
import RepoPage from '../../components/repo-page';
import { useParams } from 'react-router-dom';

function Repo() {
  const { username, repo, branch } = useParams();
  return (
    <>
      <Header />
      <RepoPage name={repo} owner={username} branch={branch}>
        <RepoLayout>
          <SubHeader />
          <Outlet />
        </RepoLayout>
      </RepoPage>
    </>
  );
}

export default Repo;
