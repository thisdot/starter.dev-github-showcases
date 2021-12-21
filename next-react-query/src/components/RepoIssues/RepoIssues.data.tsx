import { MinusCircleIcon } from '@heroicons/react/outline';
import gqlClient from '@lib/gqlClient';
import { useRepoIssuesQuery, IssueState } from '@lib/github';
import { useRepo } from '@context/RepoContext';
import { parseQuery } from './parseQuery';
import IssuesContainer from '@components/IssuesContainer';
import IssuesEmpty from '@components/IssuesEmpty';
import IssuesSkeleton from '@components/IssuesSkeleton';
import {
  useIssueFilters,
  IssueFilters,
  Pagination,
} from '@components/IssueFilters';
import { IssueType } from '@components/IssueFilters/useIssueFilters';
import RepoIssuesView from './RepoIssues.view';

function RepoIssues() {
  const { owner, name } = useRepo();
  const filters = useIssueFilters();

  const {
    data,
    isLoading,
    isFetching,
    error: queryError,
  } = useRepoIssuesQuery(
    gqlClient,
    {
      owner,
      name,
      orderBy: filters.state.sort,
      filterBy: {
        labels: filters.state.label ? [filters.state.label] : undefined,
        milestone: filters.state.milestone,
      },
      after: filters.state.afterCursor,
      before: filters.state.beforeCursor,
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
            openCount={data?.repository?.openIssues.totalCount}
            closedCount={data?.repository?.closedIssues.totalCount}
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
    throw new Error('An error occurred loading issues.');
  }

  const { openIssues, closedIssues, milestones, labels } = parseQuery(data);
  const activeIssues =
    filters.state.state === IssueState.Open ? openIssues : closedIssues;

  const filtersElement = (
    <IssueFilters
      openCount={openIssues.totalCount}
      closedCount={closedIssues.totalCount}
      milestones={milestones}
      labels={labels}
      type={IssueType.Issue}
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
        {activeIssues.issues.length > 0 ? (
          <RepoIssuesView issues={activeIssues.issues} />
        ) : (
          <IssuesEmpty Icon={MinusCircleIcon} />
        )}
      </IssuesContainer>
      {activeIssues.pageInfo && (
        <Pagination
          pageInfo={activeIssues.pageInfo}
          changePage={filters.changePage}
        />
      )}
    </>
  );
}

export default RepoIssues;
