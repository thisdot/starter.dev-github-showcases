import { PULL_REQUEST_QUERY } from './queries/pull-request';
import { useAuth } from '../auth';
import FetchApi, { ApiProps } from './api';
import { GITHUB_GRAPHQL } from '../utils/constants';
import { PullRequest, RepoPullRequestsQuery } from '~/types/pull-request-type';
import { Label } from '~/types/label-type';

type PullRequestVariables = {
  owner: string;
  name: string;
};
type Response = {
  data: RepoPullRequestsQuery;
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

      return [
        ...pullRequests,
        {
          id: pullRequest.id,
          login: pullRequest.author?.login,
          commentCount: pullRequest.comments.totalCount,
          labelCount: pullRequest.labels.totalCount,
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
    },
    []
  );

  return { pullRequests, totalCount, pageInfo };
}

const getRepoPullRequests = async (variables: PullRequestVariables) => {
  const { authStore } = useAuth();
  const data: ApiProps<PullRequestVariables> = {
    url: `${GITHUB_GRAPHQL}`,
    query: PULL_REQUEST_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = (await FetchApi(data)) as Response;

  const openPullRequests = parsePullRequests(
    resp.data.repository?.openPullRequests
  );
  const closedPullRequests = parsePullRequests(
    resp.data.repository?.closedPullRequests
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
};

export default getRepoPullRequests;
