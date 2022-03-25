import { TypeFilter } from '../../components/filters/filter.models';
import { ProfileFilterState } from '../../components/filters/profile-repos-filter-store';
import { Repo } from '../../gql';

export const filterRepos = (repos: Repo[], state: ProfileFilterState) =>
  repos.reduce((acc: Repo[], repo: Repo) => {
    switch (state.type) {
      case TypeFilter.FORKED:
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

    return [...acc, repo];
  }, []);
