import { createResource, For, Show } from 'solid-js';
import { useNavigate, useParams } from '@solidjs/router';
import { DocumentIcon, FolderIcon } from '../Icons';
import styles from './FileExplorer.module.css';
import { useRepo } from '../../contexts/RepoContext';
import getRepoTree from '../../services/get-repo-tree';
import { parseQueryData } from './parseTree';

const FileExplorerView = () => {
  const { info } = useRepo();
  const params = useParams();
  const navigate = useNavigate();

  const branch = params.branch || info().branch;
  const basePath = `/${params.owner}/${params.name}`;
  const backLink = `${basePath}/tree/${branch}/${params.path}`;

  const [tree] = createResource(
    () => `${branch}_${params.path}`,
    async () => {
      const data = await getRepoTree({
        owner: params.owner,
        name: params.name,
        expression: `${branch}:${params.path || ''}`,
      });
      return parseQueryData(data.tree);
    }
  );

  return (
    <Show when={!tree.loading} fallback={<div>Loading...</div>}>
      <div class={styles.container}>
        {params.path && (
          <div onClick={() => navigate(backLink)}>
            <a class={styles.cellBack}>
              <div class="text-blue-600">..</div>
            </a>
          </div>
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
                <div
                  class="cursor-pointer"
                  onClick={() =>
                    navigate(`${basePath}/${item.type}/${branch}/${item.path}`)
                  }
                >
                  <a
                    data-testid={`file explorer list ${item.name}`}
                    class={styles.link}
                  >
                    {item.name}
                  </a>
                </div>
              </div>
            </div>
          )}
        </For>
      </div>
    </Show>
  );
};

export default FileExplorerView;
