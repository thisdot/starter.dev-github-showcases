import { REPO_PAGE_QUERY } from './queries';
import { useQuery, useResult } from '@vue/apollo-composable';

interface RepoPageProps {
  name?: string | string[];
  owner?: string | string[];
  branch?: string | string[];
  path?: string | string[];
}

type TopicNodes =
  | (
      | {
          __typename?: 'RepositoryTopic' | undefined;
          id: string;
          topic: {
            __typename?: 'Topic' | undefined;
            name: string;
          };
        }
      | null
      | undefined
    )[]
  | null
  | undefined;

function parseTopics(topics: TopicNodes): string[] {
  if (!topics) {
    return [];
  }

  return topics.reduce((acc: string[], topic) => {
    if (topic?.topic) {
      acc.push(topic.topic.name);
    }
    return acc;
  }, []);
}

export const useRepo = () => {
  const getRepoPage = ({ name, owner, branch, path = '' }: RepoPageProps) => {
    const isOwnerAndNameValid =
      typeof owner === 'string' && typeof name === 'string';

    const formattedPath = Array.isArray(path) ? path.join('/') : path;
    const defaultBranch = typeof branch === 'string' ? branch : 'HEAD';

    const { result, loading } = useQuery(
      REPO_PAGE_QUERY,
      isOwnerAndNameValid
        ? {
            owner: owner,
            name: name,
          }
        : {
            owner: '',
            name: '',
          },
      {
        enabled: isOwnerAndNameValid,
      },
    );

    // we're not server rendering, need to wait for client to hydrate
    if (!isOwnerAndNameValid) {
      return null;
    }

    const repository = useResult(result, [], (data) => data?.repository);

    const context = {
      owner,
      name,
      branch: repository?.defaultBranchRef?.name ?? defaultBranch,
      path: formattedPath,
      isRepoLoading: loading,
      data: repository
        ? {
            // @ts-ignore - generated types be like that
            isOrg: typeof repository.owner?.orgName === 'string',
            isPrivate: repository.isPrivate,
            stargazerCount: repository.stargazerCount,
            forkCount: repository.forkCount,
            watcherCount: repository.watchers.totalCount,
            openIssueCount: repository.issues.totalCount,
            openPullRequestCount: repository.pullRequests.totalCount,
            description: repository.description,
            homepageUrl: repository.homepageUrl,
            topics: parseTopics(repository.topics?.nodes),
          }
        : undefined,
    };
    return context;
  };
  return { getRepoPage };
};
