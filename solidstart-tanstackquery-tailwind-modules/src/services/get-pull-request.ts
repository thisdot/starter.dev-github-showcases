import { REPO_PULL_REQUESTS } from './queries/pull-request';
import { useAuth } from '../auth';
import FetchApi, { ApiProps } from './api';
import {
  GITHUB_GRAPHQL,
  REPO_LABELS,
  REPO_MILESTONES,
  SEARCH_PULLS,
} from '../utils/constants';
import {
  PullRequest,
  PullRequestProps,
  RepoPullRequestsQuery,
} from '~/types/pull-request-type';
import { Label } from '~/types/label-type';
import { parseLabels, parseMilestones } from '~/utils/parseFunctions';
import { MilestoneProps } from '~/types/issues-type';
import parseRestAPIPullRequests, {
  IPullRequestProps,
} from '~/utils/parseResrAPIPullRequest';

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
  milestone?: string | number;
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

  if (variables.milestone) {
    const pulls_data = {
      owner: variables.owner,
      name: variables.name,
      labels: variables.labels?.[0] ?? undefined,
      sort: variables.orderBy,
      direction: variables.direction,
      first: variables.first,
      type: 'pull-request',
      milestone: variables.milestone,
    };
    const restOpenPullRequests = (await FetchApi({
      url: SEARCH_PULLS({
        ...pulls_data,
        state: 'open',
      }),
      headersOptions: {
        authorization: `Bearer ${authStore.token}`,
      },
    })) as IPullRequestProps;
    const restClosedPullRequests = (await FetchApi({
      url: SEARCH_PULLS({
        ...pulls_data,
        state: 'closed',
      }),
      headersOptions: {
        authorization: `Bearer ${authStore.token}`,
      },
    })) as IPullRequestProps;
    const restRepoLabels = (await FetchApi({
      url: REPO_LABELS({
        user: variables.owner,
        repo: variables.name,
      }),
      headersOptions: {
        authorization: `Bearer ${authStore.token}`,
      },
    })) as Label[];
    const restRepoMilestone = (await FetchApi({
      url: REPO_MILESTONES({
        user: variables.owner,
        repo: variables.name,
      }),
      headersOptions: {
        authorization: `Bearer ${authStore.token}`,
      },
    })) as MilestoneProps[];

    const milestones = restRepoMilestone;
    const labelMap = restRepoLabels;

    const openPullRequests = parseRestAPIPullRequests(restOpenPullRequests);
    const closedPullRequests = parseRestAPIPullRequests(restClosedPullRequests);

    return {
      openPullRequests,
      closedPullRequests,
      milestones,
      labels: labelMap,
    };
  } else {
    const resp = (await FetchApi(data)) as Response;

    const openPullRequests = parsePullRequests(
      resp.data.repository?.openPullRequests
    );

    const closedPullRequests = parsePullRequests(
      resp.data.repository?.closedPullRequests
    );
    const milestones = parseMilestones(resp.data.repository?.milestones);
    const labelMap = parseLabels(resp.data.repository?.labels);
    return {
      openPullRequests,
      closedPullRequests,
      milestones,
      labels: labelMap,
    };
  }
};

export default getRepoPullRequests;
