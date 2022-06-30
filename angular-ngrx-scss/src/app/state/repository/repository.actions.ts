import { createAction, props } from '@ngrx/store';
import { RepoState } from './repository.state';

export const fetchRepository = createAction(
  '[Repository API] Fetch Repository',
  props<{ owner: string; repoName: string }>(),
);

export const fetchRepositorySuccess = createAction(
  '[Repository API] Fetch Repository Success',
  props<{ repoData: RepoState }>(),
);

export const fetchRepositoryFailure = createAction(
  '[Repository API] Fetch Repository Failure',
  props<{ error: object }>(),
);
