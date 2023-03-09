import { REPO_PULL_REQUESTS } from './queries/pull-request';
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
  labels?: (string | undefined)[];
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
  const pullRequests = nodes.reduce(
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

function parseLabels(labels: {
  totalCount: number;
  nodes: Label[];
}) {
  const nodes = labels?.nodes || [];
  return nodes.reduce((labels: Label[], label: Label) => {
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

const getRepoPullRequests = async (variables: PullRequestVariables) => {
  const { authStore } = useAuth();
  const data: ApiProps<PullRequestVariables> = {
    url: `${GITHUB_GRAPHQL}`,
    query: REPO_PULL_REQUESTS,
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

  const labelMap = parseLabels(resp.data.repository?.labels);

  return {
    openPullRequests,
    closedPullRequests,
    labels: labelMap,
  };
};

export default getRepoPullRequests;
