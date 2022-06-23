import { useRepo } from "~/context/RepoContext";
import { PullRequestIcon } from "../Icons";
import IssueFilters from "../IssueFilters/IssueFilters";
import Pagination from "../IssueFilters/Pagination";
import {
  IssueState,
  IssueType,
  useIssueFilters,
} from "../IssueFilters/useIssueFilters";
import IssuesContainer from "../IssuesContainer/IssuesContainer";
import IssuesEmpty from "../IssuesEmpty/IssuesEmpty";
import RepoPullsView from "./RepoPulls.view";

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
