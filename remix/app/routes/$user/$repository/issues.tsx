import { LoaderFunction } from 'remix';
import { json, useLoaderData } from 'remix';
import RepoHeader from '~/components/RepoHeader/RepoHeader';
import { parseQuery } from '~/components/RepoIssues/parseQuery';
import RepoIssues from '~/components/RepoIssues/RepoIssues';
import { parseTopics } from '~/components/RepoPage/parseTopics';
import { RepoContext, RepoProvider } from '~/context/RepoContext';
import gqlClient from '~/lib/graphql-client';
import { REPO_ISSUES_QUERY } from '~/lib/queries/RepoIssues';
import { REPO_PAGE_QUERY } from '~/lib/queries/RepoPage';
import { auth } from '~/services/auth.server';
type LoaderData = {
  context: RepoContext;
  openIssues: any;
  closedIssues: any;
  milestones: any;
  labels: any;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const { accessToken } = await auth.isAuthenticated(request, {
    failureRedirect: '/login',
  });

  let url = new URL(request.url);
  const searchParams = url.searchParams;

  const label = searchParams.get('Label');
  const milestone = searchParams.get('Milestones');
  const orderBy = searchParams.get('Sort');
  const orderByArr = orderBy?.split('^');

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
    pathname:pathname,
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
    REPO_ISSUES_QUERY,
    {
      owner: params.user,
      name: params.repository,
      orderBy: {
        field: orderByArr ? orderByArr[0] : 'CREATED_AT',
        direction: orderByArr ? orderByArr[1] : 'DESC',
      },
      filterBy: {
        labels: label,
        milestone: milestone,
      },
      // after: filters.state.afterCursor,
      // before: filters.state.beforeCursor,
    },
    {
      authorization: `Bearer ${accessToken}`,
    }
  );

  const { openIssues, closedIssues, milestones, labels } = parseQuery(data);

  return json<LoaderData>({
    context,
    openIssues,
    closedIssues,
    milestones,
    labels,
  });
};

export default function Issues() {
  const { context, openIssues, closedIssues, milestones, labels } =
    useLoaderData<LoaderData>();
  return (
    <RepoProvider value={context}>
      <RepoHeader />
      <div className="md:py-12 max-w-screen-xl mx-auto">
        <RepoIssues
          openIssues={openIssues}
          closedIssues={closedIssues}
          milestones={milestones}
          labels={labels}
        />
      </div>
    </RepoProvider>
  );
}
