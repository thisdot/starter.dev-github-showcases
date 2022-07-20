import { createFeatureSelector } from '@ngrx/store';
import { RepoState } from './repository.state';

export const repositoryFeatureKey = 'repo';
export const selectRepositoryState =
  createFeatureSelector<RepoState>(repositoryFeatureKey);
