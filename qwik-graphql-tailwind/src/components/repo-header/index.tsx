import { component$, useContext } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { RepoContext } from '~/routes/[owner]/[name]/layout-named';
import { RepoActionButtons } from '../repo-action-buttons';
import { RepoHeading } from '../repo-heading';
import TabNavigation from '../tab-navigation/tab-navigation';
import { createTabList } from './tab-lists';

export const RepoHeader = component$(() => {
  const store = useContext(RepoContext);

  const { pathname } = useLocation();
  const basePath = `${store.owner}/${store.name}`;
  const tabList = createTabList({
    issueCount: store.info.data?.openIssueCount || 0,
    pullRequestCount: store.info.data?.openPullRequestCount || 0,
  });

  return (
    <div className="pt-6 px-12 bg-gray-100 border-b border-gray-300">
      <div className="flex justify-between items-center">
        <RepoHeading />
        <RepoActionButtons />
      </div>
      <div className="mt-6">
        <TabNavigation tabs={tabList} basePath={basePath} className={'border-none'} pathname={pathname} />
      </div>
    </div>
  );
});
