import { createAction, props } from '@ngrx/store';
import { FileContents, RepoState } from './repository.state';

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

export const fetchFileContents = createAction(
  '[Repository API] Fetch File Contents',
  props<{
    owner: string;
    repoName: string;
    path: string;
    commitOrBranchOrTagName: string;
  }>(),
);

export const fetchFileContentsSuccess = createAction(
  '[Repository API] Fetch File Contents Success',
  props<{ fileContents: FileContents }>(),
);

export const fetchFileContentsFailure = createAction(
  '[Repository API] Fetch File Contents Failure',
  props<{ error: object }>(),
);
