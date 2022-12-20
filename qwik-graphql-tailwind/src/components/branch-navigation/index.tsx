import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { GitBranchIcon } from '~/components/icons';
import * as styles from './branch-navigation.classNames';

export const BranchNavigation = component$(({ branch }: { branch?: string }) => {
  const { path, name, owner, branch: pathBranch } = useLocation().params;

  const crumbs = path ? path.split('/').filter(Boolean) : [];

  const fileViewLink = `/${owner}/${name}/`;

  return (
    <nav class={styles.container}>
      <button class={styles.btn}>
        <GitBranchIcon className={styles.btnIcon} /> {branch || pathBranch}{' '}
        <span class={styles.btnCaret}>{'\u25BC'}</span>
      </button>
      {crumbs.length > 0 && (
        <div class={styles.crumbs}>
          <a href={fileViewLink}>
            <span class={styles.rootLink}>{name}</span>
          </a>
          <span class={styles.separator}>/</span>
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;

            // creates a proper GitHub url path from a repo path
            const crumbPath = crumbs.slice(0, i + 1).join('/');
            const href = `${fileViewLink}tree/${branch || pathBranch}/${crumbPath}/`;

            return (
              <>
                {isLast ? (
                  <span class={styles.crumbEnd}>{crumb}</span>
                ) : (
                  <>
                    <a href={href}>
                      <span class={styles.crumbLink}>{crumb}</span>
                    </a>
                    <span class={styles.separator}>/</span>
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
