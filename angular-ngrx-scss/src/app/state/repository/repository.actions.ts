import { createAction, props } from '@ngrx/store';
import {
  FileContents,
  RepoIssues,
  RepoPullRequests,
  RepositoryState,
} from './repository.state';
import {
  RepositoryIssuesApiParams,
  RepositoryPullsApiParams,
} from 'src/app/repository/services/repository.interfaces';

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
    params: RepositoryPullsApiParams;
  }>(),
);

export const fetchPullRequestsSuccess = createAction(
  '[Repository API] Fetch Pull Requests Success',
  props<{
    pullRequests: RepoPullRequests;
    params: RepositoryPullsApiParams;
  }>(),
);

export const fetchPullRequestsFailure = createAction(
  '[Repository API] Fetch Pull Requests Failure',
  props<{ error: object }>(),
);

export const fetchIssues = createAction(
  '[Repository API] Fetch Issues',
  props<{
    owner: string;
    repoName: string;
    params: RepositoryIssuesApiParams;
  }>(),
);

export const fetchIssuesSuccess = createAction(
  '[Repository API] Fetch Issues Success',
  props<{
    issues: RepoIssues;
    params: RepositoryIssuesApiParams;
  }>(),
);

export const fetchIssuesFailure = createAction(
  '[Repository API] Fetch Issues Failure',
  props<{ error: object }>(),
);
