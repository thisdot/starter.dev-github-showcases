import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { auth } from '~/services/auth.server';
import gqlClient from '~/lib/graphql-client';
import { RepoContext, RepoProvider } from '~/context/RepoContext';
import { parseTopics } from '~/components/RepoPage/parseTopics';
import { REPO_PAGE_QUERY } from '~/lib/queries/RepoPage';
import { REPO_FILE_QUERY } from '~/lib/queries/FileViewer';
import FileViewer from '~/components/FileViewer/FileViewer';
import RepoHeader from '~/components/RepoHeader/RepoHeader';
import RepoNavigation from '~/components/RepoNavigation/RepoNavigation';

type LoaderData = {
  context: RepoContext;
  data: any;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const { accessToken } = await auth.isAuthenticated(request, {
    failureRedirect: '/login',
  });

  let url = new URL(request.url);
  const pathname = url.pathname;
  const basePath = pathname.split('/');
  const index = basePath.indexOf(`${params.branch}`);
  const path = basePath.splice(index + 1);

  const { repository } = await gqlClient.request(
    REPO_PAGE_QUERY,
    {
      owner: params.user,
      name: params.repository,
    },
    {
      authorization: `Bearer ${accessToken}`,
    }
  );

  const formattedPath = Array.isArray(path) ? path.join('/') : path;
  const defaultBranch = 'HEAD';

  const context: RepoContext = {
    owner: params.user!,
    name: params.repository!,
    branch: repository?.defaultBranchRef?.name ?? defaultBranch,
    path: formattedPath,
    pathname: pathname,
    data: repository
      ? {
          ...repository,
          isOrg: typeof repository.owner?.orgName === 'string',
          watcherCount: repository.watchers.totalCount,
          openIssueCount: repository.issues.totalCount,
          openPullRequestCount: repository.pullRequests.totalCount,
          topics: parseTopics(repository.topics?.nodes),
        }
      : undefined,
  };

  const data = await gqlClient.request(
    REPO_FILE_QUERY,
    {
      owner: params.user,
      name: params.repository,
      expression: `${context.branch}:${formattedPath}`,
    },
    {
      authorization: `Bearer ${accessToken}`,
    }
  );

  return json<LoaderData>({ context, data });
};

export default function Repository() {
  const { context, data } = useLoaderData<LoaderData>();
  return (
    <RepoProvider value={context}>
      <RepoHeader />
      <div className="mx-auto max-w-screen-2xl py-8 px-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12">
            <RepoNavigation />
            <FileViewer data={data} />
          </div>
        </div>
      </div>
    </RepoProvider>
  );
}
