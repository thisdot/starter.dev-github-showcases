import type { IssuesAPIResponse, RepoIssues } from '$lib/interfaces';

export const mapIssuesResToIssueState = (data: IssuesAPIResponse): RepoIssues => {
  return {
    totalCount: data.total_count,
    issues: data.items.map((item) => ({
      id: item.id,
      login: item.user.login,
      title: item.title,
      number: item.number,
      state: item.state,
      closedAt: item.closed_at ? new Date(item.closed_at) : null,
      createdAt: new Date(item.created_at),
      labels: item.labels,
      commentCount: item.comments,
      labelCount: item.labels.length,
    })),
  };
};
