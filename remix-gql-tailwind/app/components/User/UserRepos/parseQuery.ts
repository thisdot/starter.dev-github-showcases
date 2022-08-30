import type { Repo } from './types';

export type UserReposQuery = {
  __typename?: 'Query';
  user?:
    | {
        __typename?: 'User';
        repositories: {
          __typename?: 'RepositoryConnection';
          nodes?:
            | Array<
                | {
                    __typename?: 'Repository';
                    id: string;
                    name: string;
                    description?: string | null | undefined;
                    stargazerCount: number;
                    forkCount: number;
                    isArchived: boolean;
                    isFork: boolean;
                    isPrivate: boolean;
                    updatedAt: any;
                    primaryLanguage?:
                      | {
                          __typename?: 'Language';
                          id: string;
                          color?: string | null | undefined;
                          name: string;
                        }
                      | null
                      | undefined;
                  }
                | null
                | undefined
              >
            | null
            | undefined;
          pageInfo: {
            __typename?: 'PageInfo';
            endCursor?: string | null | undefined;
            startCursor?: string | null | undefined;
            hasNextPage: boolean;
            hasPreviousPage: boolean;
          };
        };
      }
    | null
    | undefined;
};
export type OrgReposQuery = {
  __typename?: 'Query';
  user?:
    | {
        __typename?: 'Organization';
        repositories: {
          __typename?: 'RepositoryConnection';
          nodes?:
            | Array<
                | {
                    __typename?: 'Repository';
                    id: string;
                    name: string;
                    description?: string | null | undefined;
                    stargazerCount: number;
                    forkCount: number;
                    isArchived: boolean;
                    isFork: boolean;
                    isPrivate: boolean;
                    updatedAt: any;
                    primaryLanguage?:
                      | {
                          __typename?: 'Language';
                          id: string;
                          color?: string | null | undefined;
                          name: string;
                        }
                      | null
                      | undefined;
                  }
                | null
                | undefined
              >
            | null
            | undefined;
          pageInfo: {
            __typename?: 'PageInfo';
            endCursor?: string | null | undefined;
            startCursor?: string | null | undefined;
            hasNextPage: boolean;
            hasPreviousPage: boolean;
          };
        };
      }
    | null
    | undefined;
};

export function parseQuery(data?: UserReposQuery | OrgReposQuery) {
  const nodes = data?.user?.repositories.nodes;
  const pageInfo = data?.user?.repositories.pageInfo;

  if (!nodes) {
    return undefined;
  }

  const repos = nodes.reduce((acc: Repo[], repo) => {
    return repo
      ? [
          ...acc,
          {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            stargazerCount: repo.stargazerCount,
            forkCount: repo.forkCount,
            languageColor: repo.primaryLanguage?.color,
            language: repo.primaryLanguage?.name,
            isPrivate: repo.isPrivate,
            isArchived: repo.isArchived,
            isFork: repo.isFork,
            updatedAt: repo.updatedAt,
          },
        ]
      : acc;
  }, []);

  return {
    repos,
    pageInfo,
  };
}
