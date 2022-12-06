import { useLocation } from '@solidjs/router';
import SolidMarkdown from 'solid-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useRepo } from '../../contexts/RepoContext';
import { Empty } from './Empty';
import { TOCIcon } from '../Icons';

import styles from './RepoReadMe.module.css';

const RepoReadMe = () => {
  const { pathname } = useLocation();
  const {readme} = useRepo();

  return (
    <>
      {readme() ? (
        <div class={styles.container} data-testid="readme">
          <header class={styles.header}>
            <span class={styles.tocIconContainer}>
              <TOCIcon class={styles.tocIcon} />
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
