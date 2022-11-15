import { component$, useContext } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { RepoContext } from '~/routes/[owner]/[name]';
import { RepoActionButtons } from '../repo-action-buttons';
import { RepoHeading } from '../repo-heading';
import TabNavigation from '../tab-navigation/tab-navigation';
import { tabList } from './tab-lists';

export const RepoHeader = component$(() => {
  const store = useContext(RepoContext);
  const location = useLocation();
  const { owner, name } = store;
  const basePath = `${owner}/${name}`;

  if (store.info.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-6 px-12 bg-gray-100 border-b border-gray-300">
      <div className="flex justify-between items-center">
        <RepoHeading />
        <RepoActionButtons />
      </div>
      <div className="mt-6">
        <TabNavigation tabs={tabList} basePath={basePath} className={'border-none'} pathname={location.pathname} />
      </div>
    </div>
  );
});
