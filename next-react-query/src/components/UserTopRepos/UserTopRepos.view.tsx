import type { TopRepo } from './types';

interface UserTopReposViewProps {
  repos: TopRepo[];
}

function UserTopReposView({ repos }: UserTopReposViewProps) {

  return (
    <div>
      {repos.map((repo) => {
        <div key={repo.id}>
          
        </div>
      })}
    </div>
  );
}

export default UserTopReposView;
