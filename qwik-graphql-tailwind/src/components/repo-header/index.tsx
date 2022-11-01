import { component$, useContext } from '@builder.io/qwik';
import { RepoContext } from '~/routes/[owner]/[name]';
import { RepoActionButtons } from '../repo-action-buttons';
import { RepoHeading } from '../repo-heading';
import { RepoNavigation } from '../repo-navigation';

export const RepoHeader = component$(() => {
  const store = useContext(RepoContext);

  if (store.info.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-6 px-12 bg-gray-100 border-b border-gray-300">
      <div className="flex justify-between items-center">
        <RepoHeading />
        <RepoActionButtons />
      </div>
      <div>
        <RepoNavigation />
      </div>
    </div>
  );
});
