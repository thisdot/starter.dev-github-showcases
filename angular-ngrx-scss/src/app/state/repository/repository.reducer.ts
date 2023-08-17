import { Action, createReducer, on } from '@ngrx/store';
import { RepositoryState } from './repository.state';
import * as RepositoryActions from './repository.actions';

export const initialRepositoryState: RepositoryState = {
  description: '',
  forkCount: 0,
  issueCount: 0,
  ownerName: '',
  path: '',
  prCount: 0,
  readme: '',
  repoName: '',
  starCount: 0,
  tags: [],
  tree: [],
  openPullRequests: null,
  closedPullRequests: null,
  openIssues: null,
  closedIssues: null,
  selectedFile: null,
  activeBranch: '',
  visibility: '',
  watchCount: 0,
  website: '',
  milestones: [],
  labels: [],
};

const reducer = createReducer(
  initialRepositoryState,
  on(RepositoryActions.fetchRepositorySuccess, (state, { repoData }) => ({
    ...state,
    ...repoData,
  })),
  on(RepositoryActions.fetchFileContentsSuccess, (state, { fileContents }) => ({
    ...state,
    selectedFile: fileContents,
  })),
  // TODO: handle fetchFileError case
  on(
    RepositoryActions.fetchPullRequestsSuccess,
    (state, { pullRequests, params }) => {
      return {
        ...state,
        openPullRequests:
          params.state === 'open' ? pullRequests : state.openPullRequests,
        closedPullRequests:
          params.state === 'closed' ? pullRequests : state.closedPullRequests,
      };
    },
  ),
  // TODO: handle fetchPullRequestsError case
  on(RepositoryActions.fetchIssuesSuccess, (state, { issues, params }) => {
    return {
      ...state,
      openIssues: params.state === 'open' ? issues : state.openIssues,
      closedIssues: params.state === 'closed' ? issues : state.closedIssues,
    };
  }),
);

export function repositoryReducer(
  state: RepositoryState | undefined,
  action: Action,
) {
  return reducer(state, action);
}
