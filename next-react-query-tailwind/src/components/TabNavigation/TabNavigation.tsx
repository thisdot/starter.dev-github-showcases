import type { TabItem } from './types';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './TabNavigation.module.css';

interface TabNavigationProps {
  tabs: TabItem[];
  basePath?: string;
  className?: string;
  isOrg?: boolean;
}

function TabNavigation({
  tabs,
  basePath = '',
  className,
  isOrg = false,
}: TabNavigationProps) {
  const { pathname, asPath, query } = useRouter();

  const asPathBase = basePath
    .replaceAll('[', '')
    .replaceAll(']', '')
    .split('/')
    .map((part) => query[part])
    .filter((queryPart) => typeof queryPart === 'string')
    .join('/');

  const isCurrentTab = (path?: string): boolean => {
    const matchPath = path === '' ? basePath : `${basePath}/${path}`;
    if (path === '') {
      return pathname === basePath || pathname.includes('tree');
    }
    return pathname.includes(matchPath);
  };

  return (
    <div className={cn(styles.container, className)}>
      <nav className={styles.nav} aria-label="Tabs">
        {tabs.map(({ title, path, Icon, count }, index) => {
          let href = path === '' ? `/${asPathBase}` : `/${asPathBase}/${path}`;
          return (
            <Link
              href={
                path !== undefined ? (isOrg ? `/orgs/${href}` : href) : asPath
              }
              key={index}
            >
              <a
                data-testid={`repo ${title.toLowerCase()} tab`}
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
                {typeof count === 'number' && (
                  <span
                    data-testid={`repo ${title.toLowerCase()} count`}
                    className="ml-2 bg-gray-200 font-medium text-xs text-gray-800 py-0.5 px-2 rounded-xl"
                  >
                    {count}
                  </span>
                )}
              </a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default TabNavigation;
