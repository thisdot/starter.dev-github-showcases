import { For, Show, splitProps } from 'solid-js';
import { RepoCard } from '~/components/RepoCard';
import { RepoFilter } from '~/components/RepoFilter';
import { Pagination } from '../Pagination';
import { RepoInfos } from '../ProfilePage/ProfilePage';

const UserRepos = (props: RepoInfos) => {
  const [local] = splitProps(props, [
    'repos',
    'owner',
    'pageInfo',
    'languages',
  ]);

  return (
    <>
      <RepoFilter
        languages={local.languages}
        filteredRepoCount={local.repos.length}
      />
      <Show when={local.repos.length > 0}>
        <For each={local.repos}>
          {(props) => <RepoCard {...props} isProfilePage />}
        </For>
        <Show
          when={local.pageInfo?.hasNextPage || local.pageInfo?.hasPreviousPage}
        >
          <Pagination pageInfo={local.pageInfo} owner={local.owner || ''} />
        </Show>
      </Show>
    </>
  );
};

export default UserRepos;
