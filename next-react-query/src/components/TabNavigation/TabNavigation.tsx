import type { TabItem } from './types';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './TabNavigation.module.css';

interface TabNavigationProps {
  tabs: TabItem[];
  basePath?: string;
  className?: string;
}

function TabNavigation({ tabs, basePath = '', className }: TabNavigationProps) {
  const { pathname, asPath, query } = useRouter();

  const asPathBase = basePath
    .replaceAll('[', '')
    .replaceAll(']', '')
    .split('/')
    .map((part) => query[part])
    .filter((queryPart) => typeof queryPart === 'string')
    .join('/');

  const isCurrentTab = (path?: string) => {
    const matchPath = path === '' ? basePath : `${basePath}/${path}`;
    return typeof path === undefined ? false : pathname.includes(matchPath);
  };

  return (
    <div className={cn(styles.container, className)}>
      <nav className={styles.nav} aria-label="Tabs">
        {tabs.map(({ title, path, Icon }, index) => {
          let href = path === '' ? asPathBase : `${asPathBase}/${path}`;
          return (
            <Link href={path !== undefined ? href : asPath} key={index}>
              <a
                key={title}
                className={cn(
                  isCurrentTab(path) ? styles.tabActive : styles.tabInactive,
                  styles.tab
                )}
              >
                <Icon
                  className={cn(
                    isCurrentTab(path)
                      ? styles.iconActive
                      : styles.iconInactive,
                    styles.icon
                  )}
                />
                <span>{title}</span>
              </a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default TabNavigation;
