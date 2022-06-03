import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { TOCIcon } from '@components/Icons';
import styles from './RepoReadMe.module.css';

interface RepoReadMeViewProps {
  readme: string;
}

function RepoReadMeView({ readme }: RepoReadMeViewProps) {
  return (
    <div className={styles.container} data-testid="readme">
      <header className={styles.header}>
        <span className={styles.tocIconContainer}>
          <TOCIcon className={styles.tocIcon} />
        </span>
        <span className={styles.filename}>README.md</span>
      </header>
      <article className="prose py-6 px-10 max-w-none prose-headings:font-medium prose-p:my-3 prose-p:leading-6 prose-headings:border-b prose-headings:my-1 prose-headings:pb-2 prose-h1:my-4 prose-h2:my-4 prose-h3:border-none prose-h4:border-none prose-h5:border-none prose-img:inline prose-img:m-0 prose-a:text-blue-600 prose-a:no-underline prose-a:font-normal hover:prose-a:underline prose-li:my-0.5 prose-pre:bg-gray-100  prose-code:text-gray-800 text-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-code:bg-gray-100">
        <ReactMarkdown rehypePlugins={[rehypeRaw, remarkGfm]}>
          {readme}
        </ReactMarkdown>
      </article>
    </div>
  );
}

export default RepoReadMeView;
