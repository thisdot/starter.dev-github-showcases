import { ApolloQueryResult } from '@apollo/client/core';

export interface RepoReadmeData {
  repository: {
    id: string;
    readme: ReadMeText | null;
  };
}

export interface RepoReadmeVars {
  owner: string;
  name: string;
  expression: string;
}

export interface ReadMeText {
  text: string;
}

export interface ReadMe extends ApolloQueryResult<RepoReadmeData> {
  text: string;
}
