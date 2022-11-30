export type RepoPullRequestsQuery = {
  __typename?: 'Query';
  repository?:
    | {
        __typename?: 'Repository';
        openPullRequests: {
          __typename?: 'PullRequestConnection';
          totalCount: number;
          pageInfo: {
            __typename?: 'PageInfo';
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | null | undefined;
            endCursor?: string | null | undefined;
          };
          nodes?:
            | Array<
                | {
                    __typename?: 'PullRequest';
                    id: string;
                    closed: boolean;
                    closedAt?: any | null | undefined;
                    merged: boolean;
                    mergedAt?: any | null | undefined;
                    title: string;
                    number: number;
                    createdAt: any;
                    author?:
                      | { __typename?: 'Bot'; login: string }
                      | { __typename?: 'EnterpriseUserAccount'; login: string }
                      | { __typename?: 'Mannequin'; login: string }
                      | { __typename?: 'Organization'; login: string }
                      | { __typename?: 'User'; login: string }
                      | null
                      | undefined;
                    comments: {
                      __typename?: 'IssueCommentConnection';
                      totalCount: number;
                    };
                    labels?:
                      | {
                          __typename?: 'LabelConnection';
                          totalCount: number;
                          nodes?:
                            | Array<
                                | {
                                    __typename?: 'Label';
                                    color: string;
                                    name: string;
                                  }
                                | null
                                | undefined
                              >
                            | null
                            | undefined;
                        }
                      | null
                      | undefined;
                  }
                | null
                | undefined
              >
            | null
            | undefined;
        };
        closedPullRequests: {
          __typename?: 'PullRequestConnection';
          totalCount: number;
          pageInfo: {
            __typename?: 'PageInfo';
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | null | undefined;
            endCursor?: string | null | undefined;
          };
          nodes?:
            | Array<
                | {
                    __typename?: 'PullRequest';
                    id: string;
                    closed: boolean;
                    closedAt?: any | null | undefined;
                    merged: boolean;
                    mergedAt?: any | null | undefined;
                    title: string;
                    number: number;
                    createdAt: any;
                    author?:
                      | { __typename?: 'Bot'; login: string }
                      | { __typename?: 'EnterpriseUserAccount'; login: string }
                      | { __typename?: 'Mannequin'; login: string }
                      | { __typename?: 'Organization'; login: string }
                      | { __typename?: 'User'; login: string }
                      | null
                      | undefined;
                    comments: {
                      __typename?: 'IssueCommentConnection';
                      totalCount: number;
                    };
                    labels?:
                      | {
                          __typename?: 'LabelConnection';
                          totalCount: number;
                          nodes?:
                            | Array<
                                | {
                                    __typename?: 'Label';
                                    color: string;
                                    name: string;
                                  }
                                | null
                                | undefined
                              >
                            | null
                            | undefined;
                        }
                      | null
                      | undefined;
                  }
                | null
                | undefined
              >
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export interface Label {
  color: string;
  name: string;
}

export type PullRequest = {
  id: string;
  url: string;
  state: string;
  author: { login: string };
  comments: {
    totalCount: number;
  };
  login?: string | null;
  title: string;
  number: number;
  closed: boolean;
  closedAt?: string | null;
  merged: boolean;
  mergedAt?: Date | null;
  createdAt: string;
  labels: Label[];
  commentCount: number;
  labelCount: number;
};
