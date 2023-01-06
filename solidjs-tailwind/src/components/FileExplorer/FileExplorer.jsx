import { For } from 'solid-js';
import { Link } from '@solidjs/router';
import { DocumentIcon, FolderIcon } from '../Icons';
import styles from './FileExplorer.module.css';
import { useRepo } from '../../contexts/RepoContext';
import { useParams } from '@solidjs/router';
import { createResource } from 'solid-js';
import getRepoTree from '../../services/get-repo-tree';
import { createSignal } from 'solid-js';
import { createEffect } from 'solid-js';

const FileExplorerView = () => {
  const [tree, setTree] = createSignal([]);
  const { info } = useRepo();
  const params = useParams();

  const branch = params.branch || info().branch;
  const basePath = `/${params.owner}/${params.name}`;
  const backLink = `${basePath}/tree/${branch}/${params.path}`;

  const [resTree] = createResource(`${branch}_${params.path}`, () =>
    getRepoTree({
      owner: params.owner,
      name: params.name,
      expression: `${branch}:${params.path || ''}`,
    })
  );

  createEffect(() => {
    if (resTree() && !resTree.loading) {
      setTree(resTree()?.tree);
    }
  });

  return (
    <>
      {resTree.loading ? (
        <div>Loading...</div>
      ) : (
        <div class={styles.container}>
          {params.path && (
            <Link href={backLink}>
              <a class={styles.cellBack}>
                <div class="text-blue-600">..</div>
              </a>
            </Link>
          )}
          <For each={tree()}>
            {(item) => (
              <div class={styles.cell}>
                <div class="flex items-center">
                  <div class="mr-2.5">
                    {item.type === 'tree' ? (
                      <FolderIcon class={styles.iconDir} />
                    ) : (
                      <DocumentIcon class={styles.iconFile} />
                    )}
                  </div>
                  <Link
                    href={`${basePath}/${item.type}/${branch}/${item.path}`}
                  >
                    <span
                      data-testid={`file explorer list ${item.name}`}
                      class={styles.link}
                    >
                      {item.name}
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </For>
        </div>
      )}
    </>
  );
};

export default FileExplorerView;
