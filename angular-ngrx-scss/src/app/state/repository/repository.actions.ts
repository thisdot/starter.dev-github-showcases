import { createAction, props } from '@ngrx/store';
import {
  FileContents,
  PR_STATE,
  RepoPullRequests,
  RepositoryState,
} from './repository.state';

export const fetchRepository = createAction(
  '[Repository API] Fetch Repository',
  props<{ owner: string; repoName: string; path?: string; branch?: string }>(),
);

export const fetchRepositorySuccess = createAction(
  '[Repository API] Fetch Repository Success',
  props<{ repoData: RepositoryState }>(),
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

export const fetchPullRequests = createAction(
  '[Repository API] Fetch Pull Requests',
  props<{
    owner: string;
    repoName: string;
    prState: PR_STATE;
  }>(),
);

export const fetchPullRequestsSuccess = createAction(
  '[Repository API] Fetch Pull Requests Success',
  props<{
    pullRequests: RepoPullRequests;
    prState: PR_STATE;
  }>(),
);

export const fetchPullRequestsFailure = createAction(
  '[Repository API] Fetch Pull Requests Failure',
  props<{ error: object }>(),
);
