import { ApolloQueryResult } from '@apollo/client/core';

export interface RepoDetailsData {
  repository: RepoDetails;
}

export interface RepoDetailsVars {
  owner: string;
  name: string; // repo name
}

export interface RepoDetails {
  id: string;
  defaultBranchRef: {
    name: string;
  };
  isPrivate: boolean;
  stargazerCount: number;
  forkCount: number;
  description: string;
  watchers: {
    totalCount: number;
  };
  openIssues: {
    totalCount: number;
  };
  openPullRequests: {
    totalCount: number;
  };
}

export interface RepoPage {
  name: string;
  owner: string;
  branch: string;
  path: string;
  repository: RepoDetails;
}

export interface RepoPageDetails
  extends RepoPage,
    ApolloQueryResult<RepoDetailsData> {}
