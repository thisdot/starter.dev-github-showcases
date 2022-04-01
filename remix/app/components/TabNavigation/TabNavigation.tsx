import type { TabItem } from './types';
import cn from 'classnames';
import { Link } from 'remix';
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
  const isCurrentTab = (path?: string) => {
    const matchPath = path === '' ? basePath : `${basePath}/${path}`;

    if (!pathname.includes(path!) || path === '')
      return pathname === `/${matchPath}`;
    return pathname === `/${basePath}/${path}`;
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
                <span className="ml-2 bg-gray-200 font-medium text-xs text-gray-800 py-0.5 px-2 rounded-xl">
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
