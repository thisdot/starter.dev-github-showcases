import { component$, useContext } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { RepoContext } from '~/routes/[owner]/[name]/layout-named';
import { RepoActionButtons } from '../repo-action-buttons';
import { RepoHeading } from '../repo-heading';
import TabNavigation from '../tab-navigation/tab-navigation';
import { createTabList } from './tab-lists';

export const RepoHeader = component$(() => {
  const store = useContext(RepoContext);
  const { pathname, params } = useLocation();

  const basePath = `${params.owner}/${params.name}`;

  return (
    <div class="pt-6 px-12 bg-gray-100 border-b border-gray-300">
      <div class="flex justify-between items-center">
        <RepoHeading owner={params.owner} name={params.name} />
        <RepoActionButtons />
      </div>
      <div class="mt-6">
        <TabNavigation
          tabs={createTabList({
            issueCount: store.info?.openIssueCount || 0,
            pullRequestCount: store.info?.openPullRequestCount || 0,
          })}
          basePath={basePath}
          className="border-none"
          pathname={pathname}
        />
      </div>
    </div>
  );
});
