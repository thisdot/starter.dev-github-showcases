import { For, splitProps } from 'solid-js';
import { Pagination } from '../Pagination';
import { RepoCard } from '../RepoCard';
import { RepoFilter } from '../RepoFilter';

const UserRepos = (props) => {
  const [local] = splitProps(props, [
    'loading',
    'owner',
    'repos',
    'pageInfo',
    'languages',
  ]);

  return (
    <>
      <RepoFilter
        languages={local.languages}
        filteredRepoCount={local.repos.length}
      />
      {local.loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <For each={local.repos}>
            {(props) => <RepoCard {...props} isProfilePage />}
          </For>
          {(local.pageInfo?.hasNextPage || local.pageInfo?.hasPreviousPage) && (
            <Pagination pageInfo={local.pageInfo} owner={local.owner} />
          )}
        </>
      )}
    </>
  );
};

export default UserRepos;
