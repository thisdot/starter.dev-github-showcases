import {
  FilterState,
  RepositoryOrderField,
} from '../RepoFilters/useRepoFilters';

import type { Repo } from './types';
import { TypeFilter } from '../RepoFilters/useRepoFilters';

export function filterRepos(repos: Repo[], state: FilterState) {
  return repos.reduce((acc: Repo[], repo: Repo) => {
    switch (state.type) {
      case TypeFilter.FORKS:
        if (!repo.isFork) {
          return acc;
        }
        break;
      case TypeFilter.ARCHIVED:
        if (!repo.isArchived) {
          return acc;
        }
    }

    if (
      state.language !== 'all' &&
      repo.language?.toLocaleLowerCase() !== state.language
    ) {
      return acc;
    }

    if (
      state.query !== '' &&
      !repo.name.toLocaleLowerCase().includes(state.query.toLocaleLowerCase())
    ) {
      return acc;
    }

    // add individual filters above this line that depend on a repo-property and not the array of repos
    // this sorts the repos array
    switch (state.sort) {
      case RepositoryOrderField.Name: {
        return [...acc, repo].sort((a, b) => {
          if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1;
          }
          if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1;
          }
          return 0;
        });
      }
      case RepositoryOrderField.Stargazers: {
        return [...acc, repo].sort((a, b) => {
          if (a.stargazerCount < b.stargazerCount) {
            return 1;
          }
          if (a.stargazerCount > b.stargazerCount) {
            return -1;
          }
          return 0;
        });
      }
    }

    return [...acc, repo];
  }, []);
}
