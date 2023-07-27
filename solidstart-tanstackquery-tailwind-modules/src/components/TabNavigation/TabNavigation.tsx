import { NavLink } from '@solidjs/router';
import { For, JSXElement, Show } from 'solid-js';
import cn from 'classnames';
import styles from './TabNavigation.module.css';
import { IconProps } from '../Icons/types';
import {
  setActiveTab,
  setMilestoneId,
  setSelectedLabel,
  setSelectedMilestone,
} from '../PRAndIssuesHeader';

export type Tab = {
  path: string;
  title: string;
  count?: number;
  Icon: (props: IconProps) => JSXElement;
};

type TabNavigationProps = {
  pathname: string;
  class?: string;
  tabs: Tab[];
  basePath?: string;
};

const TabNavigation = (props: TabNavigationProps) => {
  const isCurrentTab = (pathName: string) => {
    const otherPaths = props.tabs
      .filter(({ path }: { path: string }) => path !== pathName)
      .map(({ path }: { path: string }) => path);
    return pathName !== ''
      ? props.pathname.includes(pathName)
      : otherPaths.every((path: string) => !props.pathname.includes(path));
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setSelectedLabel(undefined);
    setSelectedMilestone(undefined);
    setMilestoneId(undefined);
    setActiveTab('OPEN');
  };

  return (
    <div class={`${styles.container} ${props.class || ''}`}>
      <nav class={styles.nav} aria-label="Tabs">
        <For each={props.tabs} fallback={<div>Loading...</div>}>
          {(item) => {
            const href =
              item.path === ''
                ? `/${props.basePath}`
                : `/${props.basePath}/${item.path}`;
            return (
              <NavLink
                href={href}
                class={`${
                  isCurrentTab(item.path)
                    ? styles.tabActive
                    : styles.tabInactive
                } ${styles.tab}`}
                onClick={handleClick}
              >
                <item.Icon
                  class={cn(
                    isCurrentTab(item.path)
                      ? styles.iconActive
                      : styles.iconInactive,
                    styles.icon
                  )}
                />
                <span>{item.title}</span>
                <Show when={item.count && item.count > 0}>
                  <span class="ml-2 rounded-xl bg-gray-200 py-0.5 px-2 text-xs font-medium text-gray-800">
                    {item.count}
                  </span>
                </Show>
              </NavLink>
            );
          }}
        </For>
      </nav>
    </div>
  );
};

export default TabNavigation;
