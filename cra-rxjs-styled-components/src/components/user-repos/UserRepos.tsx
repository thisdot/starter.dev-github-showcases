import { RepoListWrapper } from './UserRepos.styles';
import { useUserRepositories } from '../../hooks/user-repositories/use-user-repositories';
import RepoCard from '../repo-card';

function UserRepos({ isOrg = false }) {
  const { loading, repos } = useUserRepositories(isOrg);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <RepoListWrapper>
      {repos && repos.map((repo) => <RepoCard repo={repo} star />)}
    </RepoListWrapper>
  );
}

export default UserRepos;
