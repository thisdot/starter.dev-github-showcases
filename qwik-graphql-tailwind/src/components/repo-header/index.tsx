import { component$ } from '@builder.io/qwik';
import { RepoActionButtons } from '../repo-action-buttons';
import { RepoHeading } from '../repo-heading';
import { RepoNavigation } from '../repo-navigation';

interface RepoHeaderProps {
  name: string;
  owner: string;
  stargazerCount: number | string;
  forkCount: number | string;
  watcherCount: number | string;
}

export const RepoHeader = component$(({ name, owner, watcherCount, stargazerCount, forkCount }: RepoHeaderProps) => {
  return (
    <div className="pt-6 px-12 bg-gray-100 border-b border-gray-300">
      <div className="flex justify-between items-center">
        <RepoHeading name={name} owner={owner} />
        <RepoActionButtons watcherCount={watcherCount} stargazerCount={stargazerCount} forkCount={forkCount} />
      </div>
      <div>
        <RepoNavigation />
      </div>
    </div>
  );
});
