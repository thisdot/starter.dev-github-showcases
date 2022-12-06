import { For } from 'solid-js';
import { Link } from '@solidjs/router';
import { GitBranchIcon } from '../Icons';
import styles from './BranchNavigation.module.css';
import { useParams } from '@solidjs/router';
import { useRepo } from '../../contexts/RepoContext';

function BranchNavigation() {
  const params = useParams();
  const { info } = useRepo();

  const branch = info().branch || params.branch;

  // creates a proper GitHub url path from a repo path
  const hrefPath = (index) => {
    const crumbPath = params.path?.split('/')
      .filter(Boolean)
      .slice(0, index + 1)
      .join('/');
    return `/${params.owner}/${params.name}/tree/${branch}/${crumbPath}`;
  };

  return (
    <nav class={styles.container}>
      <button class={styles.btn}>
        <GitBranchIcon class={styles.btnIcon} /> {branch}{' '}
        <span class={styles.btnCaret}>{'\u25BC'}</span>
      </button>
      {params.path?.split('/').filter(Boolean).length > 0 && (
        <div class={styles.crumbs}>
          <Link href={`/${params.owner}/${params.name}`}>
            <a
              data-testid={`file explorer nav root ${params.name}`}
              class={styles.rootLink}
            >
              {params.name}
            </a>
          </Link>
          <span class={styles.separator}>/</span>
          <For each={params.path?.split('/').filter(Boolean)}>
            {(crumb, index) => (
              <>
                {index() ===
                params.path?.split('/').filter(Boolean).length - 1 ? (
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

export default BranchNavigation;
