import { REPO_PULL_REQUESTS } from "./queries/repo-pull-requests";
import { useAuth } from '../auth';
import FetchApi from './api';
import { GITHUB_GRAPHQL } from '../utils/constants';

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

const getRepoPullRequests = async ({ owner, name }) => {
  const { authStore } = useAuth();

  const data = {
    url: `${GITHUB_GRAPHQL}`,
    query: REPO_PULL_REQUESTS,
    variables: {
      owner,
      name,
      first: 30,
      labels: undefined,
      orderBy: 'CREATED_AT',
      direction: 'DESC',
    },
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);

  console.log('fetch', resp)

  const pullRequests = resp.data?.repository?.reduce((pullRequests, pullRequest) => {
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

  return { pullRequests };
};

export default getRepoPullRequests;