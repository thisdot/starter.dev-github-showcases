import { For, splitProps } from 'solid-js';
import { RepoCard } from '../RepoCard';
import { RepoFilter } from '../RepoFilter';
import RepoCard from '../RepoCard/RepoCard';

const UserRepos = (props) => {
  const [local] = splitProps(props, ['loading', 'repos', 'languages']);
  return (
    <>
      <RepoFilter
        languages={local.languages}
        filteredRepoCount={local.repos.length}
      />
      {local.loading ? (
        <div>Loading...</div>
      ) : (
        <For each={local.repos}>
          {(props) => <RepoCard {...props} isProfilePage />}
        </For>
      )}
    </>
  );
};

export default UserRepos;
