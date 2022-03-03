import { GitBranchIcon } from '../Icons';
import { Link } from 'remix';
import { useRepo } from '../../context/RepoContext';
import * as  styles from './FileExplorerNav.classNames';
import { removePathPart } from '../../lib/pathUtils';

function RepoNavigation() {
  const { name, owner, path, branch } = useRepo();
  const crumbs = path.split('/').filter(Boolean);
  return (
    <nav className={styles.container}>
      <button className={styles.btn}>
        <GitBranchIcon className={styles.btnIcon} /> {branch}{' '}
        <span className={styles.btnCaret}>{'\u25BC'}</span>
      </button>
      {crumbs.length > 0 && (
        <div className={styles.crumbs}>
          <Link to={`/${owner}/${name}`} className={styles.rootLink}>
            {name}
          </Link>
          <span className={styles.separator}>/</span>
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            const crumbPath = removePathPart(crumbs, i)
            const href = `${owner}/${name}/tree/${branch}/${crumbPath}`;
            return (
              <>
                {isLast ? (
                  <span className={styles.crumbEnd}>{crumb}</span>
                ) : (
                  <>
                    <Link
                      to={`/${href}`}
                      prefetch="intent"
                      className={styles.crumbLink}
                    >
                      {crumb}
                    </Link>
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
}

export default RepoNavigation;
