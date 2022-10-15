import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RepositoryState } from './repository.state';

export const repositoryFeatureKey = 'repository';
export const selectRepositoryState =
  createFeatureSelector<RepositoryState>(repositoryFeatureKey);

export const selectedRepository = createSelector(
  selectRepositoryState,
  (state: RepositoryState) => state,
);

export const selectCurrentlySelectedFile = createSelector(
  selectRepositoryState,
  (state: RepositoryState) => state.selectedFile,
);

export const selectOpenPullRequests = createSelector(
  selectRepositoryState,
  (state: RepositoryState) => state.openPullRequests,
);

export const selectClosedPullRequests = createSelector(
  selectRepositoryState,
  (state: RepositoryState) => state.closedPullRequests,
);
