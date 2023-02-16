import { For, Show } from 'solid-js';
import { RepoCard } from '~/components/RepoCard';
import { RepoFilter } from '~/components/RepoFilter';
import { Pagination } from '../Pagination';
import { RepoInfos } from '../ProfilePage/ProfilePage';

const UserRepos = (props: RepoInfos) => {
  return (
    <>
      <RepoFilter
        languages={props.languages}
        filteredRepoCount={props.repos.length}
      />
      <Show when={props.repos.length > 0}>
        <For each={props.repos}>
          {(p) => <RepoCard {...p} isProfilePage />}
        </For>
        <Show
          when={props.pageInfo?.hasNextPage || props.pageInfo?.hasPreviousPage}
        >
          <Pagination pageInfo={props.pageInfo} owner={props.owner || ''} />
        </Show>
      </Show>
    </>
  );
};

export default UserRepos;
