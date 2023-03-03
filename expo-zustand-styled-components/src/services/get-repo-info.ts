import FetchApi from './api';
import { REPO_INFO_QUERY } from './queries/repo-info';
import { Info, RepoInfo, Topics, RepoInfoVariables } from '../types/repo-info-type';

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

const getRepoInfo = async (
  variables: RepoInfoVariables
): Promise<{
  branch: string;
  info: Info;
}> => {
  const resp = (await FetchApi({ query: REPO_INFO_QUERY, variables })) as Response;
  const repository = resp.data?.repository;
  return {
    branch: repository?.defaultBranchRef?.name ?? 'HEAD',
    info: {
      isPrivate: repository?.isPrivate,
      visibility: repository?.visibility,
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
