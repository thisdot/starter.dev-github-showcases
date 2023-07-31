import { REPO_PULL_REQUESTS } from './queries/pull-requests';
import FetchApi from './api';
import { PullRequest, PullRequestProps, RepoPullRequestsQuery } from '../types/pull-requests-type';
import { Label } from '../types/label-type';
import { usePullRequestsStore } from '../hooks/stores';

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
  const pullRequests = nodes.reduce((pullRequests: PullRequest[], pullRequest) => {
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
  }, []);

  return { pullRequests, totalCount, pageInfo };
}

function parseLabels(labels: { totalCount: number; nodes: Label[] }) {
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
  const key = JSON.stringify(variables);
  if (usePullRequestsStore.getState()._pullRequests.has(key)) {
    const pullRequests = usePullRequestsStore.getState()._pullRequests.get(key);
    usePullRequestsStore.setState({ isLoading: false, pullRequests });
  } else {
    try {
      usePullRequestsStore.setState({ isLoading: true });

      const resp = (await FetchApi({ query: REPO_PULL_REQUESTS, variables })) as Response;
      const openPullRequests = parsePullRequests(resp.data.repository?.openPullRequest);
      const closedPullRequests = parsePullRequests(resp.data.repository?.closedPullRequest);
      const labelMap = parseLabels(resp.data.repository?.labels);

      const pullRequests = {
        openPullRequests,
        closedPullRequests,
        labels: labelMap,
      };

      usePullRequestsStore.setState({ isLoading: false, pullRequests });
      usePullRequestsStore.getState()._pullRequests.set(key, pullRequests);
    } catch (err) {
      usePullRequestsStore.setState({ isLoading: false, error: err.message });
    }
  }
};

export default getRepoPullRequests;
