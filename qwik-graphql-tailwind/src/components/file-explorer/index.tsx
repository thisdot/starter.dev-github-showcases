import { component$, useContext } from '@builder.io/qwik';
import { RepoContext } from '~/routes/[owner]/[name]/layout-named';
import { FolderIcon, DocumentIcon } from '~/components/icons';

export const FileExplorer = component$(() => {
  const store = useContext(RepoContext);

  const {
    branch,
    owner,
    name,
    path: repoPath,
    tree: { data },
  } = store;
  const basePath = `/${owner}/${name}`;
  const backLink = `${basePath}/tree/${branch}/${repoPath}`;

  return (
    <div className="border rounded border-gray-300 text-sm">
      {repoPath && (
        <a href={backLink}>
          <a className="block py-2 px-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
            <div className="text-blue-600">..</div>
          </a>
        </a>
      )}
      {data?.tree?.map((item) => (
        <div key={item.path} className="py-2 px-4 border-b border-gray-300 last-of-type:border-none hover:bg-gray-50">
          <div className="flex items-center">
            <div className="mr-2.5">
              {item.type === 'tree' ? (
                <FolderIcon className="w-5 h-5 text-blue-400" />
              ) : (
                <DocumentIcon className="w-5 h-5 text-gray-500" />
              )}
            </div>
            <a href={`${basePath}/${item.type}/${branch}/${item.path}`}>
              <span className="hover:text-blue-600 hover:underline">{item.name}</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
});
