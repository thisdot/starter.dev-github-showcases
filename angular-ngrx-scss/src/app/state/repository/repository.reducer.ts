import { Action, createReducer, on } from '@ngrx/store';
import { RepoState } from './repository.state';
import * as RepositoryActions from './repository.actions';

export const initialRepoState: RepoState = {
  ownerName: '',
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

  on(RepositoryActions.fetchRepository, (state) => state),
  on(RepositoryActions.fetchRepositorySuccess, (state, action) => state),
  on(RepositoryActions.fetchRepositoryFailure, (state, action) => state),
);

export function repoReducer(state: RepoState | undefined, action: Action) {
  return reducer(state, action);
}
