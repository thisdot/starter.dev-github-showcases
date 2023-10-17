import { REPO_PULL_REQUESTS } from './queries/repo-pull-requests';
import { useAuth } from '../auth';
import FetchApi from './api';
import { GITHUB_GRAPHQL, SEARCH_PULLS } from '../utils/constants';
import { parseLabels, parseMilestones } from '../utils/parseFunctions';
import parseRestAPIPullRequests from '../utils/parseRestAPIPullRequest';

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

const getRepoPullRequests = async ({
  owner,
  name,
  orderBy,
  direction,
  labels,
  milestone,
  before,
  after,
  first,
  last,
}) => {
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

  if (milestone) {
    //Using REST API for filters involving milestone as filter by milestone isn't supported on the Graphql
    const pulls_data = {
      owner,
      name,
      labels: labels?.[0] ?? undefined,
      sort: orderBy,
      direction,
      first,
      type: 'pull-request',
      milestone,
    };
    const restOpenPullRequests = await FetchApi({
      url: SEARCH_PULLS({
        ...pulls_data,
        state: 'open',
      }),
      headersOptions: {
        authorization: `Bearer ${authStore.token}`,
      },
    });
    const restClosedPullRequests = await FetchApi({
      url: SEARCH_PULLS({
        ...pulls_data,
        state: 'closed',
      }),
      headersOptions: {
        authorization: `Bearer ${authStore.token}`,
      },
    });

    const openPullRequests = parseRestAPIPullRequests(restOpenPullRequests);
    const closedPullRequests = parseRestAPIPullRequests(restClosedPullRequests);

    return {
      openPullRequests,
      closedPullRequests,
    };
  } else {
    const resp = await FetchApi(data);
    const openPullRequests = parsePullRequests(
      resp.data.repository?.openPullRequest
    );

    const closedPullRequests = parsePullRequests(
      resp.data.repository?.closedPullRequest
    );

    const milestones = parseMilestones(resp.data.repository?.milestones);

    const labelMap = parseLabels(resp.data.repository?.labels);

    return {
      openPullRequests,
      closedPullRequests,
      labels: labelMap,
      milestones,
    };
  }
};

export default getRepoPullRequests;
