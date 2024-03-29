import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { auth } from '~/services/auth.server';
import gqlClient from '~/lib/graphql-client';
import { RepoContext, RepoProvider } from '~/context/RepoContext';
import RepoHeader from '../../../components/Repositories/RepoHeader/RepoHeader';
import RepoNavigation from '../../../components/Repositories/RepoNavigation/RepoNavigation';
import FileExplorer from '../../../components/Repositories/FileExplorer/FileExplorer.view';
import RepoReadMe from '../../../components/Repositories/RepoReadMe/RepoReadMe.view';
import RepoAboutWidget from '~/components/Repositories/RepoAboutWidget/RepoAboutWidget';
import { parseTopics } from '~/components/Repositories/RepoPage/parseTopics';
import { parseQueryData } from '~/components/Repositories/FileExplorer/parseQueryData';
import { parseQuery } from '~/components/Repositories/RepoReadMe/parseQuery';

import { REPO_PAGE_QUERY } from '~/lib/queries/RepoPage';
import { REPO_TREE_QUERY } from '~/lib/queries/FileExplorer';
import { REPO_README_QUERY } from '~/lib/queries/RepoReadMe';

type LoaderData = {
  context: RepoContext;
  items: any;
  readme: any;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const { accessToken } = await auth.isAuthenticated(request, {
    failureRedirect: '/login',
  });

  let url = new URL(request.url);
  const pathname = url.pathname;
  const basePath = pathname.split('/');
  const index = basePath.indexOf(`${params.repository}`);
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
    REPO_TREE_QUERY,
    {
      owner: params.user,
      name: params.repository,
      expression: `${context.branch}:${formattedPath}`,
    },
    {
      authorization: `Bearer ${accessToken}`,
    }
  );

  const items = parseQueryData(data);

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

export default function Repository() {
  const { context, items, readme } = useLoaderData<LoaderData>();
  return (
    <RepoProvider value={context}>
      <RepoHeader />
      <div className="mx-auto max-w-screen-2xl px-4 md:py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7 xl:col-span-9">
            <RepoNavigation />
            <FileExplorer
              items={items}
              branch={context.branch}
              basePath={`/${context.owner}/${context.name}`}
              repoPath={context.path}
            />
            <RepoReadMe readme={readme} />
          </div>
          <div className="col-span-12 md:col-span-5 xl:col-span-3">
            <RepoAboutWidget />
          </div>
        </div>
      </div>
    </RepoProvider>
  );
}
