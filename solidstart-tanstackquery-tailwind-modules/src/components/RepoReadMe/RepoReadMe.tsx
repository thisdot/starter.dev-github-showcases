import { useLocation, useParams } from '@solidjs/router';
import { createEffect, createSignal, Match, Show, Switch } from 'solid-js';
import { unstable_clientOnly } from 'solid-start';
import { createQuery } from '@tanstack/solid-query';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import getReadme from '../../services/get-repo-readme';
import { TocIcon } from '../Icons';

import styles from './RepoReadMe.module.css';
import { Empty } from './Empty';

// SolidMarkdown doesn't work with SSR so we need to use unstable_clientOnly
// This causes storybook to not work with this component
// But normal import works in storybook.
const SolidMarkdown = unstable_clientOnly(() => import('solid-markdown'));

const RepoReadMe = () => {
  const { pathname } = useLocation();
  const params = useParams();
  const [readme, setReadme] = createSignal<string>();

  const resReadMe = createQuery(
    () => [`read-me_${params.owner}_${params.name}`],
    () =>
      getReadme({
        owner: params.owner,
        name: params.name,
        expression: params.path
          ? `HEAD:${params.path}/README.md`
          : 'HEAD:README.md',
      })
  );

  createEffect(() => {
    if (resReadMe.isSuccess && !resReadMe.isLoading && resReadMe.data ) {
      setReadme(resReadMe.data);
    }
  });

  return (
    <Show when={resReadMe.isSuccess && !resReadMe.isLoading}>
      <Switch>
        <Match when={readme()}>
          <div class={styles.container} data-testid="readme">
            <header class={styles.header}>
              <span class={styles.tocIconContainer}>
                <TocIcon class={styles.tocIcon} />
              </span>
              <span class={styles.filename}>README.md</span>
            </header>
            <article class={styles.article}>
              <SolidMarkdown
                rehypePlugins={[rehypeRaw, remarkGfm]}
                children={readme()}
              />
            </article>
          </div>
        </Match>
        <Match when={!pathname.includes('tree')}>
          <Empty />
        </Match>
      </Switch>
    </Show>
  );
};

export default RepoReadMe;
