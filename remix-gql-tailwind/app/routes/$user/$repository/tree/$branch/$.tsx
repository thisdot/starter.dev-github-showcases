import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { parseQueryData } from '~/components/Repositories/FileExplorer/parseQueryData';
import RepoNavigation from '~/components/Repositories/RepoNavigation/RepoNavigation';
import RepoHeader from '~/components/Repositories/RepoHeader/RepoHeader';
import FileExplorer from '~/components/Repositories/FileExplorer/FileExplorer.view';
import { parseTopics } from '~/components/Repositories/RepoPage/parseTopics';
import { parseQuery } from '~/components/Repositories/RepoReadMe/parseQuery';
import RepoReadMe from '~/components/Repositories/RepoReadMe/RepoReadMe.view';

import { RepoContext, RepoProvider } from '~/context/RepoContext';
import gqlClient from '~/lib/graphql-client';
import { auth } from '~/services/auth.server';
import { REPO_PAGE_QUERY } from '~/lib/queries/RepoPage';
import { REPO_TREE_QUERY } from '~/lib/queries/FileExplorer';
import { REPO_README_QUERY } from '~/lib/queries/RepoReadMe';
type LoaderData = {
  context: any;
  items: any;
  readme: any;
};
export const loader: LoaderFunction = async ({ params, request }) => {
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
          // @ts-ignore - generated types be like that
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
    REPO_TREE_QUERY,
    {
      owner: params.user,
      name: params.repository,
      expression: `${context.branch}:${context.path}`,
    },
    {
      authorization: `Bearer ${accessToken}`,
    }
  );

  const items = parseQueryData(data);

  if (items.length < 1)
    throw new Response('Not Found', {
      status: 404,
    });

  const readmeData = await gqlClient.request(
    REPO_README_QUERY,
    {
      owner: params.user,
      name: params.repository,
      expression: context.path
        ? `HEAD:${context.path}/README.md`
        : 'HEAD:README.md',
    },
    {
      authorization: `Bearer ${accessToken}`,
    }
  );

  const readme = parseQuery(readmeData);

  return json<LoaderData>({ context, items, readme });
};

export default function Screen() {
  const { context, items, readme } = useLoaderData<LoaderData>();
  return (
    <RepoProvider value={context}>
      <RepoHeader />
      <div className="mx-auto max-w-screen-2xl py-8 px-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12">
            <RepoNavigation />
            <FileExplorer
              items={items}
              branch={context.branch}
              basePath={`/${context.owner}/${context.name}`}
              repoPath={context.path}
            />
            {readme && <RepoReadMe readme={readme} />}
          </div>
        </div>
      </div>
    </RepoProvider>
  );
}
