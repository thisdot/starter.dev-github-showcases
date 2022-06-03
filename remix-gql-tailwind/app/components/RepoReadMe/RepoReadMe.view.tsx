import ReactMarkdown from 'react-markdown';
import { TOCIcon } from '../Icons';
import Empty from './Empty';
import * as styles from './RepoReadMe.classNames';

interface RepoReadMeViewProps {
  readme: string;
}

function RepoReadMeView({ readme }: RepoReadMeViewProps) {
  return (
    <>
      {readme ? (
        <div className={styles.container} data-testid="readme">
          <header className={styles.header}>
            <span className={styles.tocIconContainer}>
              <TOCIcon className={styles.tocIcon} />
            </span>
            <span className={styles.filename}>README.md</span>
          </header>
          <article className="prose py-6 px-10 max-w-none prose-headings:font-medium prose-p:my-3 prose-p:leading-6 prose-headings:border-b prose-headings:my-1 prose-headings:pb-2 prose-h1:my-4 prose-h2:my-4 prose-h3:border-none prose-h4:border-none prose-h5:border-none prose-img:inline prose-img:m-0 prose-a:text-blue-600 prose-a:no-underline prose-a:font-normal hover:prose-a:underline prose-li:my-0.5 prose-pre:bg-gray-100  prose-code:text-gray-800 text-gray-800">
            <ReactMarkdown>{readme}</ReactMarkdown>
          </article>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
}

export default RepoReadMeView;
