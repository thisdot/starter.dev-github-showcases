import { MinusCircleIcon } from "@heroicons/react/outline";
import { useRepo } from "../../context/RepoContext";
import IssuesContainer from "../IssuesContainer/IssuesContainer";
import IssuesEmpty from "../IssuesEmpty/IssuesEmpty";
import RepoIssuesView from "./RepoIssues.view";
import { Label } from "./types";
import {
  IssueState,
  IssueType,
  useIssueFilters,
} from "../IssueFilters/useIssueFilters";
import IssueFilters from "../IssueFilters/IssueFilters";
import Pagination from "../IssueFilters/Pagination";

interface RepoIssuesProps {
  openIssues: {
    issues: any;
    totalCount: any;
    pageInfo: any;
  };
  closedIssues: {
    issues: any;
    totalCount: any;
    pageInfo: any;
  };
  milestones: any;
  labels: Label[];
}

export const stateFilter = () => {
  const filters = useIssueFilters();
  return filters;
};

function RepoIssues({
  openIssues,
  closedIssues,
  milestones,
  labels,
}: RepoIssuesProps) {
  const { pathname } = useRepo();

  const filters = useIssueFilters();

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
          <RepoIssuesView pathname={pathname} issues={activeIssues.issues} />
        ) : (
          <IssuesEmpty Icon={MinusCircleIcon} />
        )}
      </IssuesContainer>
      {(activeIssues.pageInfo.hasNextPage ||
        activeIssues.pageInfo?.hasPreviousPage) && (
        <Pagination
          pageInfo={activeIssues.pageInfo}
          changePage={filters.changePage}
        />
      )}
    </>
  );
}

export default RepoIssues;
