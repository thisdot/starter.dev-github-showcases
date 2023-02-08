import { Label } from '../repo-pulls/types';

export type IssuesQuery = {
  __typename?: 'Query';
  repository?:
    | {
        __typename?: 'Repository';
        milestones?:
          | {
              __typename?: 'MilestoneConnection';
              totalCount: number;
              nodes?:
                | Array<
                    | {
                        __typename?: 'Milestone';
                        id: string;
                        closed: boolean;
                        description?: string | null | undefined;
                        number: number;
                        title: string;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
              pageInfo: {
                __typename?: 'PageInfo';
                startCursor?: string | null | undefined;
                endCursor?: string | null | undefined;
                hasNextPage: boolean;
                hasPreviousPage: boolean;
              };
            }
          | null
          | undefined;
        closedIssues: {
          __typename?: 'IssueConnection';
          totalCount: number;
          pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            endCursor?: string | null | undefined;
            hasPreviousPage: boolean;
            startCursor?: string | null | undefined;
          };
          nodes?:
            | Array<
                | {
                    __typename?: 'Issue';
                    id: string;
                    closed: boolean;
                    closedAt?: any | null | undefined;
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
        openIssues: {
          __typename?: 'IssueConnection';
          totalCount: number;
          pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            endCursor?: string | null | undefined;
            hasPreviousPage: boolean;
            startCursor?: string | null | undefined;
          };
          nodes?:
            | Array<
                | {
                    __typename?: 'Issue';
                    id: string;
                    closed: boolean;
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
export interface Issue {
  url: string;
  closedAt: string;
  commentCount: number;
  labels: Label[];
  createdAt: string;
  number: number;
  state: string;
  title: string;
  login: string;
}

export interface ParsedIssue {
  issues: Issue[];
  totalCount: number;
  pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean };
}

export interface ParsedIssueQuery {
  openIssues: ParsedIssue;
  closedIssues: ParsedIssue;
  labels: Label[];
  milestones: Milestone[];
}

export interface Milestone {
  id: string;
  closed: boolean;
  description?: string | null;
  number: number;
  title: string;
}

export enum IssueOrderField {
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
