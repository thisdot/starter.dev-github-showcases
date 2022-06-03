import { LoaderFunction } from 'remix';
import { json, useLoaderData } from 'remix';
import RepoHeader from '~/components/RepoHeader/RepoHeader';
import { parseTopics } from '~/components/RepoPage/parseTopics';
import { parseQuery } from '~/components/RepoPulls/parseQuery';
import RepoPulls from '~/components/RepoPulls/RepoPulls';
import { RepoContext, RepoProvider } from '~/context/RepoContext';
import gqlClient from '~/lib/graphql-client';
import { REPO_PAGE_QUERY } from '~/lib/queries/RepoPage';
import { REPO_PULLS_QUERY } from '~/lib/queries/RepoPulls';
import { auth } from '~/services/auth.server';
type LoaderData = {
  context: RepoContext;
  openPullRequests: any;
  closedPullRequests: any;
  labels: any;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const { accessToken } = await auth.isAuthenticated(request, {
    failureRedirect: '/login',
  });

  let url = new URL(request.url);
  const searchParams = url.searchParams;

  const label = searchParams.get('Label');
  const after = searchParams.get('after');
  const before = searchParams.get('before')
  const orderBy = searchParams.get('Sort');
  const orderByArr = orderBy?.split('^');

  const pathname = url.pathname;
  const basePath = pathname.split('/');
  const index = basePath.lastIndexOf(`${params.repository}`);
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
    REPO_PULLS_QUERY,
    {
      owner: params.user,
      name: params.repository,
      orderBy: {
        field: orderByArr ? orderByArr[0] : 'CREATED_AT',
        direction: orderByArr ? orderByArr[1] : 'DESC',
      },
      labels: label ? [label] : undefined,
      last: before ? 25 : undefined,
      first: (!before || after) ? 25 : undefined,
      after,
      before
    },
    {
      authorization: `Bearer ${accessToken}`,
    }
  );

  const { openPullRequests, closedPullRequests, labels } = parseQuery(data);

  return json<LoaderData>({
    context,
    openPullRequests,
    closedPullRequests,
    labels,
  });
};

export default function Pulls() {
  const { context, openPullRequests, closedPullRequests, labels } =
    useLoaderData<LoaderData>();

  return (
    <RepoProvider value={context}>
      <RepoHeader />
      <div className="md:py-12 max-w-screen-xl mx-auto">
        <RepoPulls
          openPullRequests={openPullRequests}
          closedPullRequests={closedPullRequests}
          labels={labels}
        />
      </div>
    </RepoProvider>
  );
}
