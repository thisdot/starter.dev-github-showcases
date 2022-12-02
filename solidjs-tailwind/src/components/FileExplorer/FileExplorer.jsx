import { For } from 'solid-js';
import { Link } from '@solidjs/router';
import { removeLastPathPart } from '../../utils/removeLastPathPart';
import { document } from 'solid-heroicons/outline';
import { folder } from 'solid-heroicons/solid';
import { Icon } from 'solid-heroicons';
import styles from './FileExplorer.module.css';

const FileExplorerView = (props) => {
  return (
    <div class={styles.container}>
      {props.repoPath && (
        <Link
          href={`${props.basePath}/tree/${props.branch}/${removeLastPathPart(
            props.repoPath
          )}`}
        >
          <a class={styles.cellBack}>
            <div class="text-blue-600">..</div>
          </a>
        </Link>
      )}
      <For each={props.items}>
        {(item) => (
          <div class={styles.cell}>
            <div class="flex items-center">
              <div class="mr-2.5">
                {item.type === 'tree' ? (
                  <Icon path={folder} class={styles.iconDir} />
                ) : (
                  <Icon path={document} class={styles.iconFile} />
                )}
              </div>
              <Link
                href={`${props.basePath}/${item.type}/${props.branch}/${item.path}`}
              >
                <a
                  data-testid={`file explorer list ${item.name}`}
                  class={styles.link}
                >
                  {item.name}
                </a>
              </Link>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default FileExplorerView;
