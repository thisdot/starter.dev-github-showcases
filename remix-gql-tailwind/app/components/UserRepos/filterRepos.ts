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
        return [...acc, repo].sort((a, b) => {});
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

    return [...acc, repo];
  }, []);
}
