import {
  createSignal,
  createEffect,
  For,
  Show,
  splitProps,
  Switch,
  Match,
} from 'solid-js';
import { A } from '@solidjs/router';
import { DocumentIcon, FolderIcon } from '../Icons';
import styles from './FileExplorer.module.css';
import getRepoTree from '../../services/get-repo-tree';
import { parseQueryData } from './parseTree';
import { createQuery } from '@tanstack/solid-query';
import { TreeProps } from '~/types/repo-tree-type';

export type IProps = {
  branch: string;
  owner: string;
  name: string;
  path: string;
};

const FileExplorerView = (props: IProps) => {
  const [local] = splitProps(props, ['path', 'name', 'owner', 'branch']);
  const [tree, setTree] = createSignal<TreeProps[]>([]);

  const basePath = () => `/${local.owner}/${local.name}`;

  const resTree = createQuery(
    () => [`${local.branch}_${local.path}`],
    () =>
      getRepoTree({
        owner: local.owner,
        name: local.name,
        expression: `${local.branch}:${local.path || ''}`,
      })
  );

  createEffect(() => {
    if (resTree.isSuccess && !resTree.isLoading && resTree?.data.tree) {
      setTree(parseQueryData(resTree?.data.tree));
    }
  });

  return (
    <Switch>
      <Match when={resTree.isLoading}>
        <div>Loading...</div>
      </Match>
      <Match when={resTree.isError}>
        <div>Error</div>
      </Match>
      <Match when={resTree.isSuccess && resTree?.data}>
        <div class={styles.container}>
          <Show when={local.path && local.path !== ''}>
            <A
              href={`${basePath()}/tree/${local.branch}/${local.path}`}
              class={styles.cellBack}
            >
              <div class="text-blue-600">..</div>
            </A>
          </Show>
          <For each={tree()}>
            {(item) => (
              <div class={styles.cell}>
                <div class="flex items-center">
                  <div class="mr-2.5">
                    <Switch fallback={<DocumentIcon class={styles.iconFile} />}>
                      <Match when={item.type === 'tree'}>
                        <FolderIcon class={styles.iconDir} />
                      </Match>
                    </Switch>
                  </div>
                  <A
                    href={`${basePath()}/${item.type}/${local.branch}/${
                      item.path
                    }`}
                    data-testid={`file explorer list ${item.name}`}
                    class={styles.link}
                  >
                    {item.name}
                  </A>
                </div>
              </div>
            )}
          </For>
        </div>
      </Match>
    </Switch>
  );
};

export default FileExplorerView;
