import { Outlet } from '@solidjs/router';
import { RepoProvider } from '../../contexts/RepoContext';

const Repo = () => {
  return (
    <RepoProvider>
      <Outlet />
    </RepoProvider>
  );
};

export default Repo;
