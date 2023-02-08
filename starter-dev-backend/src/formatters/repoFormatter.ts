import { Repo } from '../types';

const formatter = (item: Repo) => ({
  description: item?.description,
  forkCount: item?.forks_count,
  fullName: item?.full_name,
  id: item?.id,
  isPrivate: item?.private,
  language: item?.language,
  name: item?.name,
  owner: item?.owner,
  stargazersCount: item?.stargazers_count,
  title: item?.title,
  updatedAt: item?.updated_at,
});

export const repoFormatter = (repo: Repo[] | Repo) => {
  if (!repo) {
    return null;
  }

  if (!Array.isArray(repo)) {
    return formatter(repo);
  }

  return repo.map((repoItem: Repo | null) => {
    return formatter(repoItem as Repo);
  });
};
