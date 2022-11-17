import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { RepoActionButtons } from '../repo-action-buttons';
import { RepoHeading } from '../repo-heading';
import TabNavigation from '../tab-navigation/tab-navigation';
import { tabList } from './tab-lists';

interface RepoHeaderProps {
  name: string;
  owner: string;
  stargazerCount: number | string;
  forkCount: number | string;
  watcherCount: number | string;
}

export const RepoHeader = component$(({ name, owner, watcherCount, stargazerCount, forkCount }: RepoHeaderProps) => {
  const { pathname } = useLocation();
  const basePath = `${owner}/${name}`;

  return (
    <div className="pt-6 px-12 bg-gray-100 border-b border-gray-300">
      <div className="flex justify-between items-center">
        <RepoHeading name={name} owner={owner} />
        <RepoActionButtons watcherCount={watcherCount} stargazerCount={stargazerCount} forkCount={forkCount} />
      </div>
      <div className="mt-6">
        <TabNavigation tabs={tabList} basePath={basePath} className={'border-none'} pathname={pathname} />
      </div>
    </div>
  );
});
