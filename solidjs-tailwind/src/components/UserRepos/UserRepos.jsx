import { For } from 'solid-js';
import { RepoCard, RepoFilter } from '../index';


const UserRepos = (props) => {
  return (
    <>
      <RepoFilter />
      <For each={props.repos}>
        {(props) => <RepoCard {...props} isProfilePage />}
      </For>
    </>
  );
};

export default UserRepos;
