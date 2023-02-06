import FetchApi, { ApiProps } from './api';
import { useAuth } from '../auth';
import { REPO_INFO_QUERY } from './queries/repo-info';
import { GITHUB_GRAPHQL } from '../utils/constants';
import { RepoInfo, Topics } from '~/types/repo-info-type';

type RepoInfoVariables = {
  owner: string,
  name: string
}

type Response = {
  data: {
    repository: RepoInfo;
  };
};


export function parseTopics(topics: Topics[]) {
  if (!topics) {
    return [];
  }

  return topics.reduce((acc, topic) => {
    if (topic?.topic) {
      acc.push(topic.topic.name);
    }
    return acc;
  }, [] as string[]);
}

/**
 *
 * @param {
 *  variable: {
 *    owner
 *    name
 *  }
 * }
 */

const getRepoInfo = async (variables: RepoInfoVariables) => {
  const { authStore } = useAuth();

  const data: ApiProps<RepoInfoVariables> = {
    url: `${GITHUB_GRAPHQL}`,
    query: REPO_INFO_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data) as Response;
  const repository = resp.data?.repository;
  return {
    branch: repository?.defaultBranchRef?.name ?? 'HEAD',
    info: {
      isPrivate: repository?.isPrivate,
      forkCount: repository?.forkCount,
      description: repository?.description,
      homepageUrl: repository?.homepageUrl,
      stargazerCount: repository?.stargazerCount,
      watcherCount: repository?.watchers?.totalCount,
      openIssueCount: repository?.issues?.totalCount,
      topics: parseTopics(repository?.topics?.nodes),
      isOrg: typeof repository?.owner?.orgName === 'string',
      openPullRequestCount: repository?.pullRequests?.totalCount,
    },
  };
};

export default getRepoInfo;
