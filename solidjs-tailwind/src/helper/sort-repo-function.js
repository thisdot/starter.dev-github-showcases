import { SORT_OPTIONS } from "../components/RepoFilter/data";
import { sortBy } from "../components/RepoFilter/RepoFilter.store";

const getTime = (time) => new Date(time).getTime();

// Function to sort filtered repos
export const sortedRepoData = (repos) => {
  const response = repos.slice();
  if (sortBy() === SORT_OPTIONS.name) {
    response.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy() === SORT_OPTIONS.stars) {
    response.sort((a, b) => (b.stargazerCount > a.stargazerCount ? 1 : -1));
  } else {
    response.sort((a, b) => getTime(b.updatedAt) - getTime(a.updatedAt));
  }
  return response;
};
