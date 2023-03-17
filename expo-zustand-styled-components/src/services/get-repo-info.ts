import FetchApi from './api';
import { REPO_INFO_QUERY } from './queries/repo-info';
import { RepoInfo, Topics, RepoInfoVariables } from '../types/repo-info-type';
import { useRepoInfoStore } from '../hooks/stores';

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
  const key = `${variables.name}-${variables.owner}`;
  if (useRepoInfoStore.getState()._cache.has(key)) {
    const data = useRepoInfoStore.getState()._cache.get(key);
    useRepoInfoStore.setState({ isLoading: false, info: data.info, branch: data.branch });
  } else {
    try {
      useRepoInfoStore.setState({ isLoading: true });
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

      const branch = repository?.defaultBranchRef?.name ?? 'HEAD';

      useRepoInfoStore.setState({
        info,
        branch,
        isLoading: false,
      });
      useRepoInfoStore.getState()._cache.set(key, { info, branch });
    } catch (err) {
      useRepoInfoStore.setState({ isLoading: false, error: err.message });
    }
  }
};

export default getRepoInfo;
