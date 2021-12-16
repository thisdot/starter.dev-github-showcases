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
}

export interface ResolvedRepoDetails
  extends ApolloQueryResult<RepoDetailsData> {
  name: string;
  owner: string;
  branch: string;
  loading: boolean;
  repository: RepoDetails;
}
