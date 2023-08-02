import FetchApi from './api';
import { useAuth } from '../auth';
import { REPO_INFO_QUERY } from './queries/repo-info';
import { GITHUB_GRAPHQL } from '../utils/constants';

export function parseTopics(topics) {
  if (!topics) {
    return [];
  }

  return topics.reduce((acc, topic) => {
    if (topic?.topic) {
      acc.push(topic.topic.name);
    }
    return acc;
  }, []);
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

const getRepoInfo = async (variables) => {
  const { authStore } = useAuth();

  const data = {
    url: `${GITHUB_GRAPHQL}`,
    query: REPO_INFO_QUERY,
    variables,
    headersOptions: {
      authorization: `Bearer ${authStore.token}`,
    },
  };
  const resp = await FetchApi(data);
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
