import { Label } from "./github";

export interface IPulls {
  id: number;
  title: string;
  number: string;
  created_at: string;
  closed_at: string;
  user: {
    login: string;
  };
  state: 'open' | 'closed' | string;
  merged_at: string | null;
  url: string;
  labels: Label[];
  comments: number;
}

export interface IPullRequestProps {
  incomplete_results: boolean;
  total_count: number;
  items: IPulls[];
}

export default function parseRestAPIPullRequests(
  connection?: IPullRequestProps
) {
  if (!connection) {
    return {
      pullRequests: [],
      totalCount: 0,
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
    };
  }

  const pageInfo = {
    hasNextPage: !connection.incomplete_results,
    hasPreviousPage: connection.incomplete_results,
  };
  const nodes = connection.items || [];
  const totalCount = connection.total_count;

  const pullRequests = nodes.map((pullRequest) => {
    const labels = (pullRequest.labels || []).map((label) => ({
      color: label.color,
      name: label.name,
    }));

    return {
      id: pullRequest.id,
      login: pullRequest.user?.login,
      commentCount: pullRequest.comments,
      labelCount: pullRequest.labels.length,
      labels,
      closed: Boolean(pullRequest.closed_at),
      merged: Boolean(pullRequest.merged_at),
      title: pullRequest.title,
      number: pullRequest.number,
      createdAt: pullRequest.created_at,
      closedAt: pullRequest.closed_at,
      mergedAt: pullRequest.merged_at,
      state: pullRequest.state.toUpperCase(),
      url: pullRequest.url,
    };
  });

  return { pullRequests, totalCount, pageInfo };
}
