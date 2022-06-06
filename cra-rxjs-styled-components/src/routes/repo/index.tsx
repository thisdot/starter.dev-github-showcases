import { Outlet } from 'react-router';
import { RepoLayout } from '../../components/layouts/RepoLayoutPage';
import Header from '../../components/header';
import SubHeader from '../../components/sub-header';

function Repo() {
  return (
    <>
      <Header />
      <RepoLayout>
        <SubHeader />
        <Outlet />
      </RepoLayout>
    </>
  );
}

export default Repo;
