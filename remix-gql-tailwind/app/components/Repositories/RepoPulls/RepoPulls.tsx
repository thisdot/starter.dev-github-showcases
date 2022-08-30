import { useRepo } from '~/context/RepoContext';
import { PullRequestIcon } from '../../Shared/Icons';
import IssueFilters from '../../Issues/IssueFilters/IssueFilters';
import Pagination from '../../Issues/IssueFilters/Pagination';
import {
  IssueState,
  IssueType,
  useIssueFilters,
} from '../../Issues/IssueFilters/useIssueFilters';
import IssuesContainer from '../../Issues/IssuesContainer/IssuesContainer';
import IssuesEmpty from '../../Issues/IssuesEmpty/IssuesEmpty';
import RepoPullsView from './RepoPulls.view';

export type RepoPullProps = {
  openPullRequests: any;
  closedPullRequests: any;
  labels: any;
};

function RepoPulls({
  openPullRequests,
  closedPullRequests,
  labels,
}: RepoPullProps) {
  const { name, owner } = useRepo();
  const filters = useIssueFilters();

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
          <RepoPullsView
            pullRequests={activePullRequests.pullRequests}
            name={name}
            owner={owner}
          />
        ) : (
          <IssuesEmpty Icon={PullRequestIcon} />
        )}
      </IssuesContainer>
      {(activePullRequests.pageInfo.hasNextPage ||
        activePullRequests.pageInfo?.hasPreviousPage) && (
        <Pagination
          pageInfo={activePullRequests.pageInfo}
          changePage={filters.changePage}
        />
      )}
    </>
  );
}

export default RepoPulls;
