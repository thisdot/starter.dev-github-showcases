import { FILTER_TYPE_OPTIONS } from "@/components/repo-filter/data";
import { Repository } from "@/interfaces/repositories.interfaces";

export const repoDataFilteredByType = (repos: Repository[], filterType: string): Repository[] => {
  let response = repos.slice();
  if (filterType === FILTER_TYPE_OPTIONS.forks) {
    response = repos.filter((repo: Repository) => repo.fork);
  } else if (filterType === FILTER_TYPE_OPTIONS.archived) {
    response = repos.filter((repo: Repository) => repo.archived);
  } else if (filterType === FILTER_TYPE_OPTIONS.default) {
    response = repos;
  }
  return response;
};
