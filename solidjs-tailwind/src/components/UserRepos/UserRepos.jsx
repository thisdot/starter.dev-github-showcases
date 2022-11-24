import { For } from 'solid-js';
import { RepoCard, RepoFilter } from '../components';

const UserRepos = (props) => {
  const getLanguages();
  return (
    <>
      <RepoFilter />
      <For each={[props.repos]}>
        {(props) => <RepoCard {...props} isProfilePage />}
      </For>
    </>

  )
}

export default UserRepos;
