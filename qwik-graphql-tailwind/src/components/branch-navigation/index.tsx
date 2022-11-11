import { component$ } from '@builder.io/qwik';
import { GitBranchIcon } from '~/components/icons';
import * as styles from './branch-navigation.classNames';

interface Props {
  name: string;
  owner: string;
  path: string;
  branch?: string;
}

export const BranchNavigation = component$(({ name, owner, path, branch }: Props) => {
  const crumbs = path ? path.split('/').filter(Boolean) : [];

  return (
    <nav className={styles.container}>
      <button className={styles.btn}>
        <GitBranchIcon className={styles.btnIcon} /> {branch} <span className={styles.btnCaret}>{'\u25BC'}</span>
      </button>
      {crumbs.length > 0 && (
        <div className={styles.crumbs}>
          <a href={`/${owner}/${name}`}>
            <span className={styles.rootLink}>{name}</span>
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
