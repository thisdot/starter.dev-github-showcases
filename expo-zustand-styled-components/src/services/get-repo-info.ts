import FetchApi from './api';
import { REPO_INFO_QUERY } from './queries/repo-info';
import { RepoInfo, Topics, RepoInfoVariables } from '../types/repo-info-type';
import { useAppStore } from '../hooks/stores';

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

const getRepoInfo = async (variables: RepoInfoVariables) => {
  try {
    useAppStore.setState({ isLoading: true });
    const resp = (await FetchApi({ query: REPO_INFO_QUERY, variables })) as Response;
    const repository = resp.data?.repository;
    const info = {
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
    };

    useAppStore.setState({
      isLoading: false,
      info,
      branch: repository?.defaultBranchRef?.name ?? 'HEAD',
    });
  } catch (err) {
    useAppStore.setState({ isLoading: false, error: err.message });
  }
};

export default getRepoInfo;
