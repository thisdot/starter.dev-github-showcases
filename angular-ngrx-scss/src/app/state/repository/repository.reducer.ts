import { Action, createReducer, on } from '@ngrx/store';
import { RepoState } from './repository.state';
import * as RepositoryActions from './repository.actions';

export const initialRepoState: RepoState = {
  description: '',
  forkCount: 0,
  issueCount: 0,
  ownerName: '',
  prCount: 0,
  readme: '',
  repoName: '',
  starCount: 0,
  tags: [],
  tree: [],
  openPullRequests: null,
  closedPullRequests: null,
  selectedFile: null,
  activeBranch: '',
  visibility: '',
  watchCount: 0,
  website: '',
};

const reducer = createReducer(
  initialRepoState,
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
    (state, { pullRequests, prState }) => {
      return {
        ...state,
        openPullRequests:
          prState === 'open' ? pullRequests : state.openPullRequests,
        closedPullRequests:
          prState === 'closed' ? pullRequests : state.closedPullRequests,
      };
    },
  ),
  // TODO: handle fetchPullRequestsError case
);

export function repoReducer(state: RepoState | undefined, action: Action) {
  return reducer(state, action);
}
