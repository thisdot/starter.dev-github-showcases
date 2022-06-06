import { Outlet } from 'react-router';
import { RepoLayout } from '../../components/layouts/RepoLayoutPage';

function Repo() {
  return (
    <RepoLayout>
        <Outlet />
    </RepoLayout>
  );
}

export default Repo;
