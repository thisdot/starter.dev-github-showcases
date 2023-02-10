import { useLocation, useParams } from '@solidjs/router';
import { createEffect, createSignal } from 'solid-js';
import SolidMarkdown from 'solid-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Empty } from './Empty';
import { TocIcon } from '../Icons';

import styles from './RepoReadMe.module.css';
import { createQuery } from '@tanstack/solid-query';
import getReadme from '../../services/get-repo-readme';

const RepoReadMe = () => {
  const { pathname } = useLocation();
  const params = useParams();
  const [readme, setReadme] = createSignal<string>();

  const resReadMe = createQuery(
    () => ['read-me'],
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
    if (resReadMe.isSuccess && !resReadMe.isLoading) {
      setReadme(resReadMe.data);
    }
  });

  return (
    <>
      {readme() ? (
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
      ) : (
        <>{!pathname.includes('tree') ? <Empty /> : null}</>
      )}
    </>
  );
};

export default RepoReadMe;
