import type { TabItem } from './types';
import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export interface TabNavigationProps {
  tabs: TabItem[];
  basePath?: string;
  className?: string;
  isOrg?: boolean;
  pathname: string;
}

export const TabNavigation = component$(({ tabs, className, basePath = '', pathname }: TabNavigationProps) => {
  const isCurrentTab = (pathName?: string) => {
    const otherPaths = tabs.filter(({ path }) => path !== pathName).map(({ path }) => path);
    return pathName !== '' ? pathname.includes(pathName!) : otherPaths.every((path) => !pathname.includes(path!));
  };

  return (
    <div class={`$'border-b border-gray-200' ${className}`}>
      <nav class="-mb-px flex" aria-label="Tabs">
        {tabs.map(({ title, path, Icon, count }, index) => {
          const href = path === '' ? `/${basePath}` : `/${basePath}/${path}`;

          return (
            <Link
              key={index}
              href={href}
              class={`${
                isCurrentTab(path)
                  ? 'border-yellow-500 text-gray-900 font-semibold'
                  : 'border-transparent text-gray-600 hover:border-gray-300'
              } inline-flex items-center p-4 border-b-2 font-medium text-sm`}
            >
              <Icon
                className={`${isCurrentTab(path) ? 'text-gray-700' : 'text-gray-500'} -ml-0.5 mr-2 h-5 w-5 border-none`}
              />
              <span>{title}</span>
              {typeof count === 'number' && (
                <span class="ml-2 rounded-xl bg-gray-200 py-0.5 px-2 text-xs font-medium text-gray-800">{count}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
});

export default TabNavigation;
