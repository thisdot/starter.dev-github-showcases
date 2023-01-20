import { REPO_PULL_REQUESTS } from "./queries/repo-pull-requests";
import { useAuth } from '../auth';
import FetchApi from './api';
import { GITHUB_GRAPHQL } from '../utils/constants';

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

const getRepoPullRequests = async ({ owner, name, orderBy, direction, labels, before, after, first, last }) => {
  const { authStore } = useAuth();
  const data = {
    url: `${GITHUB_GRAPHQL}`,
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
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);

  const openPullRequests = parsePullRequests(resp.data.repository?.openPullRequest)
  const closedPullRequests = parsePullRequests(resp.data.repository?.closedPullRequest);

  const labelMap = [...closedPullRequests.pullRequests, ...openPullRequests.pullRequests].reduce(
    (acc, issue) => {
      const map = {};
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
    openPullRequests,
    closedPullRequests,
    labels: Object.values(labelMap),
  };
};

export default getRepoPullRequests;