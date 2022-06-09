import gqlClient from '@lib/gqlClient';
import { useRepoPullRequestsQuery, IssueState } from '@lib/github';
import { useRepo } from '@context/RepoContext';
import { parseQuery } from './parseQuery';
import { PullRequestIcon } from '@components/Icons';
import IssuesContainer from '@components/IssuesContainer';
import IssuesEmpty from '@components/IssuesEmpty';
import IssuesSkeleton from '@components/IssuesSkeleton';
import {
  useIssueFilters,
  IssueFilters,
  IssueType,
} from '@components/IssueFilters';
import Pagination from '@components/Pagination';
import RepoPullsView from './RepoPulls.view';
import { useRouter } from 'next/router';

function RepoPulls() {
  const { owner, name } = useRepo();
  const { query } = useRouter();
  const filters = useIssueFilters();

  const afterCursor = typeof query.after === 'string' ? query.after : undefined;
  const beforeCursor =
    typeof query.before === 'string' ? query.before : undefined;

  const {
    data,
    isLoading,
    isFetching,
    error: queryError,
  } = useRepoPullRequestsQuery(
    gqlClient,
    {
      owner,
      name,
      orderBy: filters.state.sort,
      labels: filters.state.label ? [filters.state.label] : undefined,
      after: afterCursor,
      before: beforeCursor,
      first: filters.state.first,
      last: filters.state.last,
    },
    {
      keepPreviousData: true,
    }
  );

  if (isLoading || isFetching) {
    return (
      <IssuesContainer
        filtersEl={
          <IssueFilters
            {...filters}
            openCount={data?.repository?.openPullRequests.totalCount}
            closedCount={data?.repository?.closedPullRequests.totalCount}
          />
        }
        clearFilters={filters.clearFilters}
        hasActiveFilters={filters.hasActiveFilters}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <IssuesSkeleton key={i} />
        ))}
      </IssuesContainer>
    );
  }

  if (queryError || !data) {
    throw new Error('An error occurred loading pull requests.');
  }

  const { openPullRequests, closedPullRequests, labels } = parseQuery(data);
  const activePullRequests =
    filters.state.state === IssueState.Open
      ? openPullRequests
      : closedPullRequests;

  const filtersElement = (
    <IssueFilters
      openCount={openPullRequests.totalCount}
      closedCount={closedPullRequests.totalCount}
      labels={labels}
      type={IssueType.PullRequest}
      {...filters}
    />
  );

  return (
    <>
      <IssuesContainer
        filtersEl={filtersElement}
        clearFilters={filters.clearFilters}
        hasActiveFilters={filters.hasActiveFilters}
      >
        {activePullRequests.pullRequests.length > 0 ? (
          <RepoPullsView pullRequests={activePullRequests.pullRequests} />
        ) : (
          <IssuesEmpty Icon={PullRequestIcon} />
        )}
      </IssuesContainer>

      {(activePullRequests.pageInfo?.hasNextPage ||
        activePullRequests.pageInfo?.hasPreviousPage) && (
        <Pagination
          pageInfo={activePullRequests.pageInfo}
          link={`${owner}/${name}/pulls`}
        />
      )}
    </>
  );
}

export default RepoPulls;
