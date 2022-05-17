import { json, useLoaderData, useOutletContext } from 'remix';
import type { LoaderFunction } from 'remix';
import { auth } from '~/services/auth.server';
import gqlClient from '~/lib/graphql-client';
import { RepoContext, RepoProvider } from '~/context/RepoContext';
import RepoHeader from '../../../components/RepoHeader/RepoHeader';
import FileExplorerNav from '../../../components/FileExplorerNav/FileExplorerNav';
import FileExplorer from '../../../components/FileExplorer/FileExplorer.view';
import RepoReadMe from '../../../components/RepoReadMe/RepoReadMe.view';
import RepoAboutWidget from '~/components/RepoAboutWidget/RepoAboutWidget';
import { parseTopics } from '~/components/RepoPage/parseTopics';
import { parseQueryData } from '~/components/FileExplorer/parseQueryData';
import { parseQuery } from '~/components/RepoReadMe/parseQuery';
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
  // console.log(readmeData);
  const readme = parseQuery(readmeData);

  return json<LoaderData>({ context, items, readme });
};

export default function Repository() {
  const { context, items, readme } = useLoaderData<LoaderData>();

  return (
    <RepoProvider value={context}>
      <RepoHeader />
      <div className="max-w-screen-2xl mx-auto md:py-8 px-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7 xl:col-span-9">
            <FileExplorerNav />
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
