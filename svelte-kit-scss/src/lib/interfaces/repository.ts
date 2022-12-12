import type { SimpleUser } from '$lib/interfaces';

export type RepositoryLicenseSimple = {
  name: string;
};

export type Repository = {
  defaultBranch: string;
  description: string | null;
  forksCount: number;
  homepage: string | null;
  name: string;
  openIssuesCount: number;
  owner: SimpleUser;
  stargazersCount: number;
  topics: string[];
  visibility: string;
  watchersCount: number;
  language: string | null;
  updatedAt: string | null;
  license: RepositoryLicenseSimple | null;
  archived: boolean;
  fork: boolean;
};

export type RepositoryState = Repository & {
  openPullRequestsCount: number;
};
