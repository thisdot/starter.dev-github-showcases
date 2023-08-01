import { For } from 'solid-js';
import { useNavigate, useParams } from '@solidjs/router';
import { GitBranchIcon } from '../Icons';
import styles from './BranchNavigation.module.css';
import { useRepo } from '../../contexts/RepoContext';

function BranchNavigation() {
  const params = useParams();
  const { info } = useRepo();
  const navigate = useNavigate();

  const branch = info().branch || params.branch;

  // creates a proper GitHub url path from a repo path
  const hrefPath = (index) => {
    const crumbPath = params.path
      ?.split('/')
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
          <div onClick={() => navigate(`/${params.owner}/${params.name}`)}>
            <a
              data-testid={`file explorer nav root ${params.name}`}
              class={styles.rootLink}
            >
              {params.name}
            </a>
          </div>
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
                    <div onClick={() => navigate(hrefPath(index()))}>
                      <a
                        data-testid={`file explorer nav crumb ${crumb}`}
                        class={styles.crumbLink}
                      >
                        {crumb}
                      </a>
                    </div>
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
