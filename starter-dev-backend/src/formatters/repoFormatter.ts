import { Repo } from '../types';

export const repoFormatter = (repo: Repo[] | Repo) => {
  if (!repo) {
    return null;
  }

  if (!Array.isArray(repo)) {
    return {
      description: repo?.description,
      forkCount: repo?.forks_count,
      fullName: repo?.full_name,
      id: repo?.id,
      isPrivate: repo?.private,
      language: repo?.language,
      name: repo?.name,
      owner: repo?.owner,
      stargazersCount: repo?.stargazers_count,
      title: repo?.title,
      updatedAt: repo?.updated_at,
    };
  }

  return repo.map((repoItem: Repo | null) => ({
    description: repoItem?.description,
    forkCount: repoItem?.forks_count,
    fullName: repoItem?.full_name,
    id: repoItem?.id,
    isPrivate: repoItem?.private,
    language: repoItem?.language,
    name: repoItem?.name,
    owner: repoItem?.owner,
    stargazersCount: repoItem?.stargazers_count,
    title: repoItem?.title,
    updatedAt: repoItem?.updated_at,
  }));
};
