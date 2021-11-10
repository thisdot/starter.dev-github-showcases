import cn from 'classnames';
import { useRepo } from '@context/RepoContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './RepoTabNavigation.module.css';
import { tabList } from './tabList';

function RepoTabNavigation() {
  const { asPath } = useRouter();
  const { owner, name } = useRepo();

  const isCurrentTab = (path?: string) =>
    typeof path === 'string' ? asPath.includes(path) : false;

  return (
    <div className={styles.container}>
      <nav className={styles.nav} aria-label="Tabs">
        {tabList.map(({ title, path, Icon }, index) => (
          <Link
            href={path ? `/${owner}/${name}/${path}` : `/${owner}/${name}`}
            key={index}
          >
            <a
              key={title}
              className={cn(
                isCurrentTab(path) ? styles.tabActive : styles.tabInactive,
                styles.tab
              )}
            >
              <Icon
                className={cn(
                  isCurrentTab(path) ? styles.iconActive : styles.iconInactive,
                  styles.icon
                )}
              />
              <span>{title}</span>
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default RepoTabNavigation;
