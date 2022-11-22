import type { TabItem } from './types';
import * as styles from './tab-navigation.classNames';
import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { stringify } from 'query-string';

export interface TabNavigationProps {
  tabs: TabItem[];
  basePath?: string;
  className?: string;
  isOrg?: boolean;
  pathname: string;
  query?: {
    name: string;
    owner: string;
    stargazerCount: number | string;
    forkCount: number | string;
    watcherCount: number | string;
    issuesCount: number | string;
    prCount: number | string;
  };
}

export const TabNavigation = component$(({ tabs, className, basePath = '', pathname, query }: TabNavigationProps) => {
  const isCurrentTab = (pathName?: string) => {
    const otherPaths = tabs.filter(({ path }) => path !== pathName).map(({ path }) => path);
    return pathName !== '' ? pathname.includes(pathName!) : otherPaths.every((path) => !pathname.includes(path!));
  };

  const _query = query || useLocation().query;

  return (
    <div className={`${styles.container} ${className}`}>
      <nav className={styles.nav} aria-label="Tabs">
        {tabs.map(({ title, path, Icon, count }, index) => {
          const href = path === '' ? `/${basePath}` : `/${basePath}/${path}`;

          return (
            <Link
              key={index}
              href={href + '?' + stringify(_query)}
              className={`${isCurrentTab(path) ? styles.tabActive : styles.tabInactive} ${styles.tab}`}
            >
              <Icon className={`${isCurrentTab(path) ? styles.iconActive : styles.iconInactive} ${styles.icon}`} />
              <span>{title}</span>
              {typeof count === 'number' && (
                <span className="ml-2 rounded-xl bg-gray-200 py-0.5 px-2 text-xs font-medium text-gray-800">
                  {count}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
});

export default TabNavigation;
