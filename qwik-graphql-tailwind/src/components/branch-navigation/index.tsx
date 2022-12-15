import { component$, useContext } from '@builder.io/qwik';
import { GitBranchIcon } from '~/components/icons';
import { RepoContext } from '~/routes/[owner]/[name]/layout-named';
import * as styles from './branch-navigation.classNames';

export const BranchNavigation = component$(() => {
  const store = useContext(RepoContext);

  const crumbs = store.path ? store.path.split('/').filter(Boolean) : [];

  const fileViewLink = `/${store.owner}/${store.name}`;

  return (
    <nav className={styles.container}>
      <button className={styles.btn}>
        <GitBranchIcon className={styles.btnIcon} /> {store.branch} <span className={styles.btnCaret}>{'\u25BC'}</span>
      </button>
      {crumbs.length > 0 && (
        <div className={styles.crumbs}>
          <a href={fileViewLink}>
            <span className={styles.rootLink}>{store.name}</span>
          </a>
          <span className={styles.separator}>/</span>
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;

            // creates a proper GitHub url path from a repo path
            const crumbPath = crumbs.slice(0, i + 1).join('/');
            const href = `${fileViewLink}/tree/${store.branch}/${crumbPath}`;

            return (
              <>
                {isLast ? (
                  <span className={styles.crumbEnd}>{crumb}</span>
                ) : (
                  <>
                    <a href={`/${href}`}>
                      <span className={styles.crumbLink}>{crumb}</span>
                    </a>
                    <span className={styles.separator}>/</span>
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
