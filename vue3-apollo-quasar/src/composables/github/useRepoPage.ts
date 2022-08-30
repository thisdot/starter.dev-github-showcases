import { REPO_PAGE_QUERY } from './queries';
import { useQuery, useResult } from '@vue/apollo-composable';
import { Ref } from 'vue';

interface RepoPageProps {
  name?: string;
  owner?: string;
  branch?: string;
  path?: string;
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

interface RepoContext {
  name: string;
  owner: string;
  branch: string;
  path: string;
  data?: {
    visibility: string;
    isPrivate: boolean;
    stargazerCount: number;
    forkCount: number;
    watcherCount: number;
    openIssueCount: number;
    openPullRequestCount: number;
    description?: string | null;
    homepageUrl?: string | null;
    topics: string[];
    isOrg: boolean;
  };
}

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

export const useRepoPage = () => {
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

    // TODO: add better typing for repository
    const context = useResult(result, undefined, ({ repository }) => {
      return {
        owner,
        name,
        branch: repository?.defaultBranchRef?.name ?? defaultBranch,
        path: formattedPath,
        data: repository
          ? {
              isOrg: typeof repository.owner?.orgName === 'string',
              visibility: repository.visibility.toLowerCase(),
              isPrivate: repository.isPrivate,
              stargazerCount: repository.stargazerCount,
              forkCount: repository.forkCount,
              watcherCount: repository.watchers?.totalCount || 0,
              openIssueCount: repository.issues?.totalCount || 0,
              openPullRequestCount: repository.pullRequests?.totalCount || 0,
              description: repository.description,
              homepageUrl: repository.homepageUrl,
              topics: parseTopics(repository.topics?.nodes),
            }
          : undefined,
      };
    });
    return { context: context as Ref<RepoContext | undefined>, loading };
  };
  return { getRepoPage };
};
