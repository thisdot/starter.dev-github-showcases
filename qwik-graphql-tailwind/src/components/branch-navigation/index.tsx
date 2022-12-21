import { component$, useContext } from '@builder.io/qwik';
import { GitBranchIcon } from '~/components/icons';
import { RepoContext } from '~/routes/[owner]/[name]/layout-named';

export const BranchNavigation = component$(() => {
  const store = useContext(RepoContext);

  const crumbs = store.path ? store.path.split('/').filter(Boolean) : [];

  const fileViewLink = `/${store.owner}/${store.name}`;

  return (
    <nav className="my-6 flex items-center">
      <button className="relative inline-flex items-center px-4 py-1 rounded-md bg-gray-50 border border-gray-300 font-medium text-gray-700 hover:bg-gray-200 hover:bg-opacity-50">
        <GitBranchIcon className="w-5 h-5 text-gray-600 mr-1" /> {store.branch}{' '}
        <span className="text-xs text-gray-600 ml-1.5 mt-0.5">{'\u25BC'}</span>
      </button>
      {crumbs.length > 0 && (
        <div className="flex px-3">
          <a href={fileViewLink}>
            <span className="font-semibold text-blue-600 hover:underline">{store.name}</span>
          </a>
          <span className="text-lg text-gray-800 leading-snug mx-1.5">/</span>
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;

            // creates a proper GitHub url path from a repo path
            const crumbPath = crumbs.slice(0, i + 1).join('/');
            const href = `${fileViewLink}/tree/${store.branch}/${crumbPath}`;

            return (
              <>
                {isLast ? (
                  <span className="font-semibold">{crumb}</span>
                ) : (
                  <>
                    <a href={`/${href}`}>
                      <span className="text-blue-600 hover:underline">{crumb}</span>
                    </a>
                    <span className="text-lg text-gray-800 leading-snug mx-1.5">/</span>
                  </>
                )}
              </>
            );
          })}
        </div>
      )}
    </nav>
  );
});
