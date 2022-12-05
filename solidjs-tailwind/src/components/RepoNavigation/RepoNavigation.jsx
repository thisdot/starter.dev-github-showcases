import { For } from 'solid-js';
import { Link } from '@solidjs/router';
import { GitBranchIcon } from '../Icons';
import styles from './RepoNavigation.module.css';

function RepoNavigation(props) {
  // creates a proper GitHub url path from a repo path
  const hrefPath = (index) => {
    const crumbPath = props.path
      .split('/')
      .filter(Boolean)
      .slice(0, index + 1)
      .join('/');
    return `/${props.owner}/${props.name}/tree/${props.branch}/${crumbPath}`;
  };

  return (
    <nav class={styles.container}>
      <button class={styles.btn}>
        <GitBranchIcon class={styles.btnIcon} /> {props.branch}{' '}
        <span class={styles.btnCaret}>{'\u25BC'}</span>
      </button>
      {props.path.split('/').filter(Boolean).length > 0 && (
        <div class={styles.crumbs}>
          <Link href={`/${props.owner}/${props.name}`}>
            <a
              data-testid={`file explorer nav root ${props.name}`}
              class={styles.rootLink}
            >
              {props.name}
            </a>
          </Link>
          <span class={styles.separator}>/</span>
          <For each={props.path.split('/').filter(Boolean)}>
            {(crumb, index) => (
              <>
                {index() ===
                props.path.split('/').filter(Boolean).length - 1 ? (
                  <span
                    data-testid={`file explorer nav end ${crumb}`}
                    class={styles.crumbEnd}
                  >
                    {crumb}
                  </span>
                ) : (
                  <>
                    <Link href={`${hrefPath(index())}`}>
                      <a
                        data-testid={`file explorer nav crumb ${crumb}`}
                        class={styles.crumbLink}
                      >
                        {crumb}
                      </a>
                    </Link>
                    <span class={styles.separator}>/</span>
                  </>
                )}
              </>
            )}
          </For>
        </div>
      )}
    </nav>
  );
}

export default RepoNavigation;
