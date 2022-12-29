export type RepoPullRequestsQuery = {
  __typename?: 'Query';
  repository?:
    | {
        __typename?: 'Repository';
        openPullRequest: {
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
        closedPullRequest: {
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
  comments: {
    totalCount: number;
  };
  login: string;
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

export enum PullRequestOrderField {
  /** Order issues by comment count */
  Comments = 'COMMENTS',
  /** Order issues by creation time */
  CreatedAt = 'CREATED_AT',
  /** Order issues by update time */
  UpdatedAt = 'UPDATED_AT',
}

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export interface Label {
  color: string;
  name: string;
}

export interface ParsedPullRequestQuery {
  openPullRequests: ParsedPullRequest;
  closedPullRequests: ParsedPullRequest;
  labels: Label[];
}

export interface ParsedPullRequest {
  pullRequests: PullRequest[];
  totalCount: number;
  pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean };
}
