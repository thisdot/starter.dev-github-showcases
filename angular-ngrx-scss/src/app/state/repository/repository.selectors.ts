import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RepositoryState } from './repository.state';

export const repositoryFeatureKey = 'repository';
export const selectRepositoryState =
  createFeatureSelector<RepositoryState>(repositoryFeatureKey);

// TODO: confirm where this selector is used and if it can perhaps be better written, since currently it's directly returning the whole state slice (not selecting any piece of the state)
export const selectedRepository = createSelector(
  selectRepositoryState,
  (state) => state,
);

export const selectCurrentlySelectedFile = createSelector(
  selectRepositoryState,
  (state) => state.selectedFile,
);

export const selectOpenPullRequests = createSelector(
  selectRepositoryState,
  (state) => state.openPullRequests,
);

export const selectClosedPullRequests = createSelector(
  selectRepositoryState,
  (state) => state.closedPullRequests,
);

export const selectOpenIssues = createSelector(
  selectRepositoryState,
  (state) => state.openIssues,
);

export const selectClosedIssues = createSelector(
  selectRepositoryState,
  (state) => state.closedIssues,
);

export const selectOpenIssuePaginationParams = createSelector(
  selectRepositoryState,
  (state) => state.openIssues?.paginationParams,
);

export const selectClosedIssuePaginationParams = createSelector(
  selectRepositoryState,
  (state) => state.closedIssues?.paginationParams,
);

export const selectClosedPullRequestsPaginationParams = createSelector(
  selectRepositoryState,
  (state) => state.closedPullRequests?.paginationParams,
);

export const selectOpenPullRequestsPaginationParams = createSelector(
  selectRepositoryState,
  (state) => state.openPullRequests?.paginationParams,
);

export const selectMilestones = createSelector(
  selectRepositoryState,
  (state) => state.milestones,
);

export const selectLabels = createSelector(
  selectRepositoryState,
  (state) => state.labels,
);
