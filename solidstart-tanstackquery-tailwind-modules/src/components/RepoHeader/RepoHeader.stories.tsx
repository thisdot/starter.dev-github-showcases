import { For, Show } from 'solid-js';
import { Router } from '@solidjs/router';
import { visibilityTypes } from '../RepoHeading/data';
import styles from './RepoHeader.module.css';
import stylesTab from '../TabNavigation/TabNavigation.module.css';
import { RepoHeading } from '../RepoHeading';
import { RepoActionButtons } from '../RepoActionButtons';
import { createTabList } from './tabList';

export default {
  title: 'components/Repo Header',
  argTypes: {
    openIssueCount: {},
    openPullRequestCount: {},
    forkCount: {},
    stargazerCount: {},
    watcherCount: {},
    visibility: {
      options: Object.values(visibilityTypes),
      control: {
        type: 'select',
      },
    },
    isOrg: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = () => (
  <Router>
    <div class={styles.wrapper}>
      <div class={styles.topRow}>
        <RepoHeading visibility={visibilityTypes.public} isOrg={false} />
        <RepoActionButtons forkCount={3} stargazerCount={23} watcherCount={3} />
      </div>
      <div class={styles.bottomRow}>
        <div class={stylesTab.container}>
          <nav class={stylesTab.nav} aria-label="Tabs">
            <For
              each={createTabList({
                issueCount: 10,
                pullRequestCount: 23,
              })}
              fallback={<div>Loading...</div>}
            >
              {(item) => {
                return (
                  <div class={stylesTab.tab}>
                    <item.Icon class={stylesTab.icon} />
                    <span>{item.title}</span>
                    <Show when={item.count && item.count > 0}>
                      <span class="ml-2 rounded-xl bg-gray-200 py-0.5 px-2 text-xs font-medium text-gray-800">
                        {item.count}
                      </span>
                    </Show>
                  </div>
                );
              }}
            </For>
          </nav>
        </div>
      </div>
    </div>
  </Router>
);

export const Default: any = Template.bind({});
Default.args = {
  openIssueCount: 10,
  openPullRequestCount: 20,
  forkCount: 3,
  stargazerCount: 23,
  watcherCount: 3,
  visibility: visibilityTypes.public,
  isOrg: false,
};
