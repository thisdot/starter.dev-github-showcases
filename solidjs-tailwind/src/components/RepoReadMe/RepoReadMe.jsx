import { useLocation } from '@solidjs/router';
import SolidMarkdown from 'solid-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useRepo } from '../../contexts/RepoContext';
import { Empty } from './Empty';
import { TOCIcon } from '../icons';

import styles from './RepoReadMe.module.css';

const RepoReadMe = () => {
  const { pathname } = useLocation();
  const [readme] = useRepo();

  return (
    <>
      {readme().isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {readme().text ? (
            <>
              <div class={styles.container} data-testid="readme">
                <header class={styles.header}>
                  <span class={styles.tocIconContainer}>
                    <TOCIcon class={styles.tocIcon} />
                  </span>
                  <span class={styles.filename}>README.md</span>
                </header>
                <article class="prose py-6 px-10 max-w-none prose-headings:font-medium prose-p:my-3 prose-p:leading-6 prose-headings:border-b prose-headings:my-1 prose-headings:pb-2 prose-h1:my-4 prose-h2:my-4 prose-h3:border-none prose-h4:border-none prose-h5:border-none prose-img:inline prose-img:m-0 prose-a:text-blue-600 prose-a:no-underline prose-a:font-normal hover:prose-a:underline prose-li:my-0.5 prose-pre:bg-gray-100  prose-code:text-gray-800 text-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-code:bg-gray-100">
                  <SolidMarkdown
                    rehypePlugins={[rehypeRaw, remarkGfm]}
                    children={readme().text}
                  />
                </article>
              </div>
            </>
          ) : (
            <>{!pathname.includes('tree') ? <Empty /> : null}</>
          )}
        </>
      )}
    </>
  );
};

export default RepoReadMe;
