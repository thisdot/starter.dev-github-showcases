import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RepoState } from './repository.state';

export const repositoryFeatureKey = 'repository';
export const selectRepositoryState =
  createFeatureSelector<RepoState>(repositoryFeatureKey);
