import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { Router } from '@solidjs/router';
import styles from './RepoReadMe.module.css';
import SolidMarkdown from 'solid-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { TocIcon } from '../Icons';

export default {
  title: 'Components/RepoReadMe',
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      staleTime: Infinity,
    },
  },
});

const Template = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
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
            children={'text'}
          />
        </article>
      </div>
    </Router>
  </QueryClientProvider>
);

export const Default = Template.bind({});
