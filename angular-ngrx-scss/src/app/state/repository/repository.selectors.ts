import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RepoState } from './repository.state';

export const repositoryFeatureKey = 'repo';
export const selectRepositoryState =
  createFeatureSelector<RepoState>(repositoryFeatureKey);

export const selectedRepository = createSelector(
  selectRepositoryState,
  (state: RepoState) => state,
);

export const selectCurrentlySelectedFile = createSelector(
  selectRepositoryState,
  (state: RepoState) => state.selectedFile,
);
