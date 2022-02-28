import type { TabItem } from './types';
import cn from 'classnames';
import { Link } from 'remix';
import * as styles from './TabNavigation.classNames';

interface TabNavigationProps {
  tabs: TabItem[];
  basePath?: string;
  className?: string;
  isOrg?: boolean;
}

function TabNavigation({ tabs, className }: TabNavigationProps) {
  return (
    <div className={cn(styles.container, className)}>
      <nav className={styles.nav} aria-label="Tabs">
        {tabs.map(({ title, path, Icon, count }, index) => {
          return (
            <Link
              to=""
              key={index}
              className={`${styles.tabActive}, ${styles.tab}`}
            >
              <Icon className={`${styles.iconActive}, ${styles.icon}`} />
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
