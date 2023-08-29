import { Issue, IssueProps, PageInfo } from '@/composables/github/types';

export interface IIssueParse {
  issues: Issue[];
  totalCount: number;
  pageInfo: PageInfo;
}

export function parseIssues(data: IssueProps): IIssueParse {
  if (!data) {
    return {
      issues: [],
      totalCount: 0,
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
    };
  }

  const pageInfo = data.pageInfo;
  const nodes = data.nodes || [];
  const totalCount = data.totalCount;
  const issues = nodes.map((issue) => {
    const labels = (issue.labels?.nodes || []).map((label) => ({
      color: label.color,
      name: label.name,
    }));
    return {
      login: issue.author?.login,
      commentCount: issue.comments.totalCount,
      labelCount: issue.labels.totalCount,
      labels,
      title: issue.title,
      number: issue.number,
      createdAt: issue.createdAt,
      closedAt: issue.closedAt,
      state: issue.state,
      url: issue.url,
    };
  });

  return { issues, totalCount, pageInfo };
}
