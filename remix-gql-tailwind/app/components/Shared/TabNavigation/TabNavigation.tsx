import type { TabItem } from './types';
import cn from 'classnames';
import { Link } from '@remix-run/react';
import * as styles from './TabNavigation.classNames';

interface TabNavigationProps {
  tabs: TabItem[];
  basePath?: string;
  className?: string;
  isOrg?: boolean;
  pathname: string;
}

function TabNavigation({
  tabs,
  className,
  basePath = '',
  pathname,
}: TabNavigationProps) {
  const isCurrentTab = (pathName?: string) => {
    const otherPaths = tabs
      .filter(({ path }) => path !== pathName)
      .map(({ path }) => path);
    return pathName !== ''
      ? pathname.includes(pathName!)
      : otherPaths.every((path) => !pathname.includes(path!));
  };

  return (
    <div className={cn(styles.container, className)}>
      <nav className={styles.nav} aria-label="Tabs">
        {tabs.map(({ title, path, Icon, count }, index) => {
          let href = path === '' ? `/${basePath}` : `/${basePath}/${path}`;
          return (
            <Link
              to={href}
              key={index}
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
}

export default TabNavigation;
