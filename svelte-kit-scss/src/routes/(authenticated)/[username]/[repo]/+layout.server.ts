import type { LayoutServerLoad } from './$types';
import { RepositoryService } from '$lib/services';
import type { PageNavigationTabViewModel } from '$lib/components/shared/PageNavigationTabs/models';
import { resolveRepositoryHref, resolveRepositoryIssueSearchPageHref } from '$lib/helpers';
import { PAGE_IDS } from '$lib/constants/page-ids';
import type { Breadcrumb } from '$lib/components/shared/Breadcrumbs/models';

export const load: LayoutServerLoad = async ({ params: { username, repo }, fetch }) => {
  const repositoryService = new RepositoryService(fetch);

  const repositoryState = await repositoryService.getUserRepositoryState(username, repo);
  const tabs: PageNavigationTabViewModel[] = [
    {
      label: 'Code',
      pageId: PAGE_IDS.REPOSITORY.CODE,
      icon: 'Code16',
      href: resolveRepositoryHref(repositoryState),
    },
    {
      label: 'Issues',
      pageId: PAGE_IDS.REPOSITORY.ISSUES,
      icon: 'IssueOpened16',
      href: resolveRepositoryIssueSearchPageHref(repositoryState, 'issues'),
      count: repositoryState.openIssuesCount,
    },
    {
      label: 'Pull Requests',
      pageId: PAGE_IDS.REPOSITORY.PULLS,
      icon: 'GitPullRequest16',
      href: resolveRepositoryIssueSearchPageHref(repositoryState, 'pulls'),
      count: repositoryState.openPullRequestsCount,
    },
  ];

  const breadcrumbs: Breadcrumb[] = [
    {
      name: repositoryState.owner.login,
      href: repositoryState.owner.href,
    },
    {
      name: repositoryState.name,
      href: resolveRepositoryHref(repositoryState),
      emphasis: true,
    },
  ];

  return {
    repositoryState,
    tabs,
    breadcrumbs,
  };
};
