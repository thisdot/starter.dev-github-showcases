import { REPO_PULL_REQUESTS } from './queries/pull-requests';
import FetchApi from './api';

function parsePullRequests(connection) {
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

  const pullRequests = nodes.reduce((pullRequests, pullRequest) => {
    if (!pullRequest) {
      return pullRequests;
    }

    const labelNodes = pullRequest.labels?.nodes || [];
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
        state: pullRequest.state,
        url: pullRequest.url,
      },
    ];
  }, []);

  return { pullRequests, totalCount, pageInfo };
}

function parseLabels(labels) {
  const nodes = labels?.nodes || [];
  return nodes.reduce((labels, label) => {
    if (!label) {
      return labels;
    }

    return [
      ...labels,
      {
        color: label.color,
        name: label.name,
      },
    ];
  }, []);
}

/**
 *
 * @param {
 *  variable: {
 *    owner
 *    name
 *    first
 *    labels
 *    orderBy
 *    direction
 *  }
 * }
 */

const getRepoPullRequests = async ({
  owner,
  name,
  orderBy,
  direction,
  labels,
  before,
  after,
  first,
  last,
}) => {
  const data = {
    url: ``, // Missing url
    query: REPO_PULL_REQUESTS,
    variables: {
      owner,
      name,
      first,
      last,
      labels,
      orderBy,
      direction,
      before,
      after,
    },
    headersOptions: {
      authorization: `Bearer `, //Missing token
    },
  };
  const resp: any = await FetchApi(data); // waiting for right type

  const openPullRequests = parsePullRequests(
    resp.data.repository?.openPullRequest
  );
  const closedPullRequests = parsePullRequests(
    resp.data.repository?.closedPullRequest
  );

  const labelMap = parseLabels(resp.data.repository?.labels);

  return {
    openPullRequests,
    closedPullRequests,
    labels: labelMap,
  };
};

export default getRepoPullRequests;
