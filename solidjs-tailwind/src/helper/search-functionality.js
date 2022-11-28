import { search } from "../components/RepoFilter/RepoFilter.store";

// Function to filter repos by search
export const repoDataFilteredBySearch = (repos) => {
  if (repos.length < 1) {
    return repos;
  }
  return repos.reduce((acc, repo) => {
    if (search() !== '' && !repo?.name?.match(new RegExp(search(), 'ig'))) {
      return acc;
    }

    return [...acc, repo];
  }, []);
};
