import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { GitBranchIcon } from '~/components/icons';
import { Link } from '@builder.io/qwik-city';

export const BranchNavigation = component$(({ branch }: { branch?: string }) => {
  const { path, name, owner, branch: pathBranch } = useLocation().params;

  const crumbs = path ? path.split('/').filter(Boolean) : [];

  const fileViewLink = `/${owner}/${name}/`;

  return (
    <nav class="my-6 flex items-center">
      <button class="relative inline-flex items-center px-4 py-1 rounded-md bg-gray-50 border border-gray-300 font-medium text-gray-700 hover:bg-gray-200 hover:bg-opacity-50">
        <GitBranchIcon className="w-5 h-5 text-gray-600 mr-1" /> {branch || pathBranch}{' '}
        <span class="text-xs text-gray-600 ml-1.5 mt-0.5">{'\u25BC'}</span>
      </button>
      {crumbs.length > 0 && (
        <div class="flex px-3">
          <Link href={fileViewLink}>
            <span class="font-semibold text-blue-600 hover:underline">{name}</span>
          </Link>

          <span class="text-lg text-gray-800 leading-snug mx-1.5">/</span>
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;

            // creates a proper GitHub url path from a repo path
            const crumbPath = crumbs.slice(0, i + 1).join('/');
            const href = `${fileViewLink}tree/${branch || pathBranch}/${crumbPath}/`;

            return (
              <>
                {isLast ? (
                  <span class="font-semibold">{crumb}</span>
                ) : (
                  <>
                    <Link href={href}>
                      <span class="text-blue-600 hover:underline">{crumb}</span>
                    </Link>
                    <span class="text-lg text-gray-800 leading-snug mx-1.5">/</span>
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
