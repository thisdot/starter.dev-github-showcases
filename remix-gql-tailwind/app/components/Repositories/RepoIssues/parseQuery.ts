import type { Issue, Label, Milestone } from './types';

export type RepoIssuesQuery = {
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

// sorry, couldn't get a type for issueConnection that made ts happy :(
function parseIssues(issueConnection?: any) {
  if (!issueConnection) {
    return {
      issues: [],
      totalCount: 0,
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
    };
  }

  const pageInfo = issueConnection.pageInfo;
  const nodes = issueConnection.nodes || [];
  const totalCount = issueConnection.totalCount;

  const issues = nodes.reduce((issues: Issue[], issue: any) => {
    if (!issue) {
      return issues;
    }

    const labelNodes = issue.labels?.nodes || [];
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
      ...issues,
      {
        id: issue.id,
        login: issue.author?.login,
        commentCount: issue.comments.totalCount,
        labelCount: issue.labels.totalCount,
        labels,
        closed: issue.closed,
        title: issue.title,
        number: issue.number,
        createdAt: issue.createdAt,
        closedAt: issue.closedAt,
      },
    ];
  }, []);

  return { issues, totalCount, pageInfo };
}

function parseMilestones(milestones?: any) {
  const nodes = milestones.nodes || [];
  return nodes.reduce((milestones: Milestone[], milestone: any) => {
    if (!milestone) {
      return milestones;
    }

    return [
      ...milestones,
      {
        id: milestone.id,
        closed: milestone.closed,
        title: milestone.title,
        number: milestone.number,
        description: milestone.description,
      },
    ];
  }, []);
}

export function parseQuery(data: RepoIssuesQuery) {
  const openIssues = parseIssues(data.repository?.openIssues);
  const closedIssues = parseIssues(data.repository?.closedIssues);
  const milestones = parseMilestones(data.repository?.milestones);

  const labelMap = [...closedIssues.issues, ...openIssues.issues].reduce(
    (acc: { [key: string]: Label }, issue: Issue) => {
      const map: { [key: string]: Label } = {};
      issue.labels.forEach((label) => {
        map[label.name] = label;
      });
      return {
        ...acc,
        ...map,
      };
    },
    {}
  );

  return {
    openIssues,
    closedIssues,
    milestones,
    labels: Object.values(labelMap) as Label[],
  };
}
