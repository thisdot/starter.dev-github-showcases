import { GitBranchIcon } from '@components/Icons';
import Link from 'next/link';
import { useRepo } from '@context/RepoContext';
import styles from './FileExplorerNav.module.css';

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
          <Link href={`/${owner}/${name}`}>
            <a className={styles.rootLink}>{name}</a>
          </Link>
          <span className={styles.separator}>/</span>
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            const crumbPath = crumbs.slice(0, i + 1).join('/');
            const href = `/${owner}/${name}/tree/${branch}/${crumbPath}`;
            return (
              <>
                {isLast ? (
                  <span className={styles.crumbEnd}>{crumb}</span>
                ) : (
                  <>
                    <Link href={`/${href}`}>
                      <a className={styles.crumbLink}>{crumb}</a>
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
