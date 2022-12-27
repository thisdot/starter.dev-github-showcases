import { component$, useContext } from '@builder.io/qwik';
import { FolderIcon, DocumentIcon } from '~/components/icons';
import { Link, useLocation } from '@builder.io/qwik-city';
import { BranchNavigation } from '../branch-navigation';
import { RepoContext } from '~/routes/[owner]/[name]/layout-named';

export interface TreeState {
  isLoading: boolean;
  branches: { name: string }[];
  tree: { name: string; type: string; path: string }[];
}

export const FileExplorer = component$(({ tree }: { tree: any[] }) => {
  const globalStore = useContext(RepoContext);

  const { path, name, owner, branch: pathBranch } = useLocation().params;

  const basePath = `/${owner}/${name}`;
  const backLink = `${basePath}/tree/${globalStore.branch || pathBranch}/${path || ''}`;

  return (
    <>
      <BranchNavigation branch={globalStore.branch || pathBranch} />
      <div class="border rounded border-gray-300 text-sm">
        {path && (
          <Link href={backLink}>
            <span class="block py-2 px-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
              <div class="text-blue-600">..</div>
            </span>
          </Link>
        )}

        {tree?.map((item) => (
          <div key={item.path} class="py-2 px-4 border-b border-gray-300 last-of-type:border-none hover:bg-gray-50">
            <div class="flex items-center">
              <div class="mr-2.5">
                {item.type === 'tree' ? (
                  <FolderIcon className="w-5 h-5 text-blue-400" />
                ) : (
                  <DocumentIcon className="w-5 h-5 text-gray-500" />
                )}
              </div>
              <Link href={`${basePath}/${item.type}/${globalStore.branch || pathBranch}/${item.path}`}>
                <span class="hover:text-blue-600 hover:underline">{item.name}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
});
