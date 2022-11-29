import { For } from 'solid-js';
import { UserRepoCard } from './UserRepoCard';
import { RepoFilter } from '../RepoFilter';

const UserRepos = (props) => {
  return (
    <>
      <RepoFilter />
      {props.loading ? (
        <div>Loading...</div>
      ) : (
        <For each={props.repos}>{(props) => <UserRepoCard {...props} />}</For>
      )}
    </>
  );
};

export default UserRepos;
