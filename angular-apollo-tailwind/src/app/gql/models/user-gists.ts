import { ApolloQueryResult } from '@apollo/client/core';

export interface UserGistsData {
  viewer: {
    id: string;
    gists: {
      nodes: Gist[];
    };
  };
}

export interface Gist {
  id: string;
  description: string;
  url: string;
  name: string;
  files: File[];
}

export interface File {
  name: string;
}

export interface GistDetails extends ApolloQueryResult<UserGistsData> {
  gists: Gist[];
}
