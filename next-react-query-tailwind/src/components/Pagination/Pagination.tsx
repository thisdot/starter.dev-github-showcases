import type { PageInfo } from '@lib/github';
import cn from 'classnames';
import { useRouter } from 'next/router';
import styles from './Pagination.module.css';

interface PaginationProps {
  pageInfo?: PageInfo;
  link: string;
}

function Pagination({ pageInfo, link }: PaginationProps) {
  const router = useRouter();

  if (!pageInfo) {
    return null;
  }

  const prevUrl = `/${link}?before=${pageInfo.startCursor}`;
  const nextUrl = `/${link}?after=${pageInfo.endCursor}`;

  const handlePreviousClick = () => {
    router.push(prevUrl, prevUrl, { shallow: true });
  };

  const handleNextClick = () => {
    router.push(nextUrl, nextUrl, { shallow: true });
  };

  return (
    <div className={styles.container}>
      <span className={styles.group}>
        <button
          type="button"
          disabled={!pageInfo.hasPreviousPage || !pageInfo.startCursor}
          onClick={handlePreviousClick}
          className={cn(styles.button, styles.buttonPrev)}
          data-testid="pagination button previous"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNextClick}
          disabled={!pageInfo.hasNextPage || !pageInfo.endCursor}
          className={cn(styles.button, styles.buttonNext)}
          data-testid="pagination button next"
        >
          Next
        </button>
      </span>
    </div>
  );
}

export default Pagination;
