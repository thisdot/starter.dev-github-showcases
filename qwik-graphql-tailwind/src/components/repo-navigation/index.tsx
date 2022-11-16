import { component$, useContext } from '@builder.io/qwik';
import { RepoContext } from '~/routes/[owner]/[name]';
import { CodeIcon, IssuesIcon, PullRequestIcon } from '../icons';

export const RepoNavigation = component$(() => {
  const store = useContext(RepoContext);

  if (store.info.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-6">
      <div className="flex">
        <div>
          <a className="inline-flex items-center p-4 text-sm border-b-2 leading-5 cursor-pointer">
            <CodeIcon className="w-5 h-5 inline mr-2" />
            Code
          </a>
        </div>
        <div>
          <a className="inline-flex items-center p-4 text-sm border-b-2 leading-5 cursor-pointer">
            <IssuesIcon className="w-5 h-5 inline mr-2" />
            Issues
          </a>
        </div>
        <div>
          <a className="inline-flex items-center p-4 text-sm border-b-2 leading-5 cursor-pointer">
            <PullRequestIcon className="w-5 h-5 inline mr-2" />
            Pull Requests
          </a>
        </div>
      </div>
    </div>
  );
});
