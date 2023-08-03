import type { RepoContext } from '@context/RepoContext';
import type { ReactNode } from 'react';
import { useErrorBoundary } from 'use-error-boundary';
import gqlClient from '@lib/gqlClient';
import { useRepoPageQuery } from '@lib/github';
import { parseError } from '@lib/parseError';
import { RepoProvider } from '@context/RepoContext';
import RepoPageError from './RepoPage.error';
import { parseTopics } from './parseTopics';

interface RepoPageProps {
  name?: string | string[];
  owner?: string | string[];
  branch?: string | string[];
  path?: string | string[];
  children: ReactNode;
}

/**
 * Parses repo query params, fetches general repo data, and wraps children in a context provider containing repo data
 */
function RepoPage({ name, owner, branch, path = '', children }: RepoPageProps) {
  const isOwnerAndNameValid =
    typeof owner === 'string' && typeof name === 'string';

  const formattedPath = Array.isArray(path) ? path.join('/') : path;
  const defaultBranch = typeof branch === 'string' ? branch : 'HEAD';

  const { ErrorBoundary, error: caughtError } = useErrorBoundary();
  const {
    data,
    error: queryError,
    isLoading,
  } = useRepoPageQuery(
    gqlClient,
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
    }
  );

  // we're not server rendering, need to wait for client to hydrate
  if (!isOwnerAndNameValid) {
    return null;
  }

  const error = parseError(queryError || caughtError);
  if (error) {
    return <RepoPageError error={error} />;
  }

  const repository = data?.repository;
  const context: RepoContext = {
    owner,
    name,
    branch: repository?.defaultBranchRef?.name ?? defaultBranch,
    path: formattedPath,
    isRepoLoading: isLoading,
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

  return (
    <ErrorBoundary>
      <div className="h-[calc(100%-70px)] flex flex-col">
        <RepoProvider value={context}>{children}</RepoProvider>
        <div className="flex justify-center mt-auto pb-5 pt-6">
          <a target="_blank" rel="noreferrer noopener" href="https://www.netlify.com">
            <img
              src="https://www.netlify.com/v3/img/components/netlify-light.svg"
              alt="Deploys by Netlify"
            />
          </a>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default RepoPage;
