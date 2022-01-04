import { ApolloQueryResult } from '@apollo/client/core';

export interface RepoDetailsData {
  viewer: {
    login: string;
  };
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
  homepageUrl: string;
  watchers: {
    totalCount: number;
  };
  openIssues: {
    totalCount: number;
  };
  openPullRequests: {
    totalCount: number;
  };
  topics: {
    nodes: Topic[];
  };
}

export interface RepoPage {
  name: string;
  owner: string;
  login: string;
  branch: string;
  path: string;
  repository: RepoDetails;
  homepageUrl: string;
  topics: string[];
}

export interface Topic {
  id: string;
  topic: {
    name: string;
  };
}

export interface RepoPageDetails
  extends RepoPage,
    ApolloQueryResult<RepoDetailsData> {}
