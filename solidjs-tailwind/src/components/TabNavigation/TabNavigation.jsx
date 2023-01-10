import { NavLink } from '@solidjs/router';
import { For } from 'solid-js';
import cn from 'classnames';
import styles from './TabNavigation.module.css';

const TabNavigation = (props) => {
  const isCurrentTab = (pathName) => {
    return pathName !== '' ? props.pathname.includes(pathName) : true;
  };

  return (
    <div class={`${styles.container} ${props.class}`}>
      <nav class={styles.nav} aria-label="Tabs">
        <For each={props.tabs} fallback={<div>Loading...</div>}>
          {(item, index) => {
            const href =
                item.path === ''
                ? `/${props.basePath}`
                : `/${props.basePath}/${item.path}`;
            return (
              <NavLink
                href={href}
                key={index}
                class={`${
                  isCurrentTab(item.path)
                    ? styles.tabActive
                    : styles.tabInactive
                } ${styles.tab}`}
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
                {typeof item.count === 'number' && (
                  <span class="ml-2 rounded-xl bg-gray-200 py-0.5 px-2 text-xs font-medium text-gray-800">
                    {item.count}
                  </span>
                )}
              </NavLink>
            );
          }}
        </For>
      </nav>
    </div>
  );
};

export default TabNavigation;
