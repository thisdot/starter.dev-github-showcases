import { For } from 'solid-js';
import { RepoCard } from '../RepoCard';
import { RepoFilter } from '../RepoFilter';

const UserRepos = (props) => {
  return (
    <>
      <RepoFilter />
      {props.loading ? (
        <div>Loading...</div>
      ) : (
        <For each={props.repos}>
          {(props) => <RepoCard {...props} isProfilePage />}
        </For>
      )}
    </>
  );
};

export default UserRepos;
