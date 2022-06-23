import { IssueOrderField } from "../IssueFilters/useIssueFilters";
import { OrderDirection } from "../RepoFilters/useRepoFilters";
import { Label } from "../RepoIssues/types";
import type { PullRequest } from "./types";

export type RepoPullRequestsQueryVariables = {
  owner: string;
  name: string;
  before?: string;
  after?: string;
  labels?: string[] | string;
  orderBy?: IssueOrder;
};

export type IssueOrder = {
  direction: OrderDirection;
  field: IssueOrderField;
};

export type RepoPullRequestsQuery = {
  __typename?: "Query";
  repository?:
    | {
        __typename?: "Repository";
        openPullRequests: {
          __typename?: "PullRequestConnection";
          totalCount: number;
          pageInfo: {
            __typename?: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | null | undefined;
            endCursor?: string | null | undefined;
          };
          nodes?:
            | Array<
                | {
                    __typename?: "PullRequest";
                    id: string;
                    closed: boolean;
                    closedAt?: any | null | undefined;
                    merged: boolean;
                    mergedAt?: any | null | undefined;
                    title: string;
                    number: number;
                    createdAt: any;
                    author?:
                      | { __typename?: "Bot"; login: string }
                      | { __typename?: "EnterpriseUserAccount"; login: string }
                      | { __typename?: "Mannequin"; login: string }
                      | { __typename?: "Organization"; login: string }
                      | { __typename?: "User"; login: string }
                      | null
                      | undefined;
                    comments: {
                      __typename?: "IssueCommentConnection";
                      totalCount: number;
                    };
                    labels?:
                      | {
                          __typename?: "LabelConnection";
                          totalCount: number;
                          nodes?:
                            | Array<
                                | {
                                    __typename?: "Label";
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
          __typename?: "PullRequestConnection";
          totalCount: number;
          pageInfo: {
            __typename?: "PageInfo";
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor?: string | null | undefined;
            endCursor?: string | null | undefined;
          };
          nodes?:
            | Array<
                | {
                    __typename?: "PullRequest";
                    id: string;
                    closed: boolean;
                    closedAt?: any | null | undefined;
                    merged: boolean;
                    mergedAt?: any | null | undefined;
                    title: string;
                    number: number;
                    createdAt: any;
                    author?:
                      | { __typename?: "Bot"; login: string }
                      | { __typename?: "EnterpriseUserAccount"; login: string }
                      | { __typename?: "Mannequin"; login: string }
                      | { __typename?: "Organization"; login: string }
                      | { __typename?: "User"; login: string }
                      | null
                      | undefined;
                    comments: {
                      __typename?: "IssueCommentConnection";
                      totalCount: number;
                    };
                    labels?:
                      | {
                          __typename?: "LabelConnection";
                          totalCount: number;
                          nodes?:
                            | Array<
                                | {
                                    __typename?: "Label";
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

function parsePullRequests(connection?: any) {
  if (!connection) {
    return {
      pullRequests: [],
      totalCount: 0,
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
    };
  }

  const pageInfo = connection.pageInfo;
  const nodes = connection.nodes || [];
  const totalCount = connection.totalCount;

  const pullRequests = nodes.reduce(
    (pullRequests: PullRequest[], pullRequest: any) => {
      if (!pullRequest) {
        return pullRequests;
      }

      const labelNodes = pullRequest.labels?.nodes || [];
      const labels = labelNodes.reduce(
        (labels: Label[], label: any) =>
          label
            ? [
                ...labels,
                {
                  color: label.color,
                  name: label.name,
                },
              ]
            : labels,
        []
      );

      return [
        ...pullRequests,
        {
          id: pullRequest.id,
          login: pullRequest.author?.login,
          commentCount: pullRequest.comments.totalCount,
          labelCount: pullRequest.labels.totalCount,
          labels,
          closed: pullRequest.closed,
          merged: pullRequest.merged,
          title: pullRequest.title,
          number: pullRequest.number,
          createdAt: pullRequest.createdAt,
          closedAt: pullRequest.closedAt,
          mergedAt: pullRequest.mergedAt,
        },
      ];
    },
    []
  );

  return { pullRequests, totalCount, pageInfo };
}

export function parseQuery(data: RepoPullRequestsQuery) {
  const openPullRequests = parsePullRequests(data.repository?.openPullRequests);
  const closedPullRequests = parsePullRequests(
    data.repository?.closedPullRequests
  );

  const labelMap = [
    ...closedPullRequests.pullRequests,
    ...openPullRequests.pullRequests,
  ].reduce((acc: { [key: string]: Label }, issue: PullRequest) => {
    const map: { [key: string]: Label } = {};
    issue.labels.forEach((label) => {
      map[label.name] = label;
    });
    return {
      ...acc,
      ...map,
    };
  }, {});

  return {
    openPullRequests,
    closedPullRequests,
    labels: Object.values(labelMap) as Label[],
  };
}
