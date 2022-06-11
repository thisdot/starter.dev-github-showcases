import { Action, createReducer, on } from '@ngrx/store';
import { RepoState } from './repository.state';
import * as RepositoryActions from './repository.actions';

export const initialRepoState: RepoState = {
  repoName: '',
  description: '',
  website: '',
  visibility: '',
  watchCount: 0,
  starCount: 0,
  forkCount: 0,
  issueCount: 0,
  tags: [],
};

const reducer = createReducer(
  initialRepoState,
  on(RepositoryActions.fetchRepositorySuccess, (state, { repoData }) => ({
    ...state,
    ...repoData,
  })),
);

export function repoReducer(state: RepoState | undefined, action: Action) {
  return reducer(state, action);
}
