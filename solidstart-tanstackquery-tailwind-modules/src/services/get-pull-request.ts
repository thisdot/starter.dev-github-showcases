import { PULL_REQUEST_QUERY } from './queries/pull-request';
import { useAuth } from '../auth';
import FetchApi, { ApiProps } from './api';
import { GITHUB_GRAPHQL } from '../utils/constants';
import {
  PullRequest,
  PullRequestProps,
  RepoPullRequestsQuery,
} from '~/types/pull-request-type';
import { Label } from '~/types/label-type';

type PullRequestVariables = {
  owner: string;
  name: string;
  orderBy?: string;
  direction?: string;
  filterBy?: {
    assignee?: string;
    createdBy?: string;
    mentioned?: string;
    milestone?: string;
    labels?: string[];
    states?: 'OPEN' | 'CLOSED';
  };
  before?: string;
  after?: string;
  first?: number;
  last?: number;
};
type Response = {
  data: RepoPullRequestsQuery;
};

function parsePullRequests(data?: PullRequestProps) {
  if (!data) {
    return {
      pullRequests: [],
      totalCount: 0,
      pageInfo: { hasNextPage: false, hasPreviousPage: false },
    };
  }

  const pageInfo = data.pageInfo;
  const nodes = data.nodes || [];
  const totalCount = data.totalCount;
  // @ts-ignore
  const pullRequests = nodes.reduce(
    // @ts-ignore
    (pullRequests: PullRequest[], pullRequest) => {
      if (!pullRequest) {
        return pullRequests;
      }

      const labelNodes: Label[] = pullRequest.labels?.nodes || [];
      const labels = labelNodes.reduce(
        (labels: Label[], label) =>
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
          login: pullRequest.author?.login,
          commentCount: pullRequest.comments.totalCount,
          labelCount: pullRequest.labels.totalCount,
          labels,
          title: pullRequest.title,
          number: pullRequest.number,
          createdAt: pullRequest.createdAt,
          closedAt: pullRequest.closedAt,
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

  console.log('resp', resp);

  const openPullRequests = parsePullRequests(
    resp.data.repository?.openPullRequests
  );

  console.log('openPullRequests', openPullRequests);

  const closedPullRequests = parsePullRequests(
    resp.data.repository?.closedPullRequests
  );

  const labelMap = [
    ...(closedPullRequests.pullRequests as PullRequest[]),
    ...(openPullRequests.pullRequests as PullRequest[]),
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
