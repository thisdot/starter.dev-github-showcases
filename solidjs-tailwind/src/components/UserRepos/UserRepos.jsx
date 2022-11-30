import { For } from 'solid-js';
import { RepoFilter } from '../RepoFilter';
import RepoCard from '../RepoCard/RepoCard';

const UserRepos = (props) => {
  return (
    <>
      <RepoFilter />
      {props.loading ? (
        <div>Loading...</div>
      ) : (
        <For each={props.repos}>{(props) => <RepoCard {...props} isProfilePage />}</For>
      )}
    </>
  );
};

export default UserRepos;
