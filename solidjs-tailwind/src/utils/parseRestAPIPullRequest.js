export default function parseRestAPIPullRequests(connection) {
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

  const pullRequests = nodes.reduce((pullRequests, pullRequest) => {
    if (!pullRequest) {
      return pullRequests;
    }

    const labelNodes = pullRequest.labels || [];
    const labels = labelNodes.reduce(
      (labels, label) =>
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
      },
    ];
  }, []);

  return { pullRequests, totalCount, pageInfo };
}
