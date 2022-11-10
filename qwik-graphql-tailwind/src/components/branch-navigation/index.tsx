import { component$, useContext } from '@builder.io/qwik';
import { RepoContext } from '~/routes/[owner]/[name]';
import { GitBranchIcon } from '~/components/icons';
import * as styles from './branch-navigation.classNames';

export const BranchNavigation = component$(() => {
  const store = useContext(RepoContext);

  if (store.info.isLoading) {
    return <div>Loading...</div>;
  }

  const { name, owner, path, branch } = store;
  const crumbs = path ? path.split('/').filter(Boolean) : [];

  return (
    <nav className={styles.container}>
      <button className={styles.btn}>
        <GitBranchIcon className={styles.btnIcon} /> {branch} <span className={styles.btnCaret}>{'\u25BC'}</span>
      </button>
      {crumbs.length > 0 && (
        <div className={styles.crumbs}>
          <a href={`/${owner}/${name}`}>
            <a className={styles.rootLink}>{name}</a>
          </a>
          <span className={styles.separator}>/</span>
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;

            // creates a proper GitHub url path from a repo path
            const crumbPath = crumbs.slice(0, i + 1).join('/');
            const href = `/${owner}/${name}/tree/${branch}/${crumbPath}`;

            return (
              <>
                {isLast ? (
                  <span className={styles.crumbEnd}>{crumb}</span>
                ) : (
                  <>
                    <a href={`/${href}`}>
                      <a className={styles.crumbLink}>{crumb}</a>
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