import type { IssueFilterAPI } from '@components/IssueFilters';
import type { PageInfo } from '@lib/github';
import styles from './Pagination.module.css';

interface PaginationProps {
  pageInfo?: PageInfo;
  changePage: IssueFilterAPI['changePage'];
}

function Pagination({ pageInfo, changePage }: PaginationProps) {
  const nextPage = () => {
    changePage({ after: pageInfo?.endCursor });
  };

  const previousPage = () => {
    changePage({ before: pageInfo?.startCursor });
  };

  return (
    <div className={styles.container}>
      <span className={styles.group}>
        <button
          type="button"
          disabled={!pageInfo?.hasPreviousPage || !pageInfo.startCursor}
          onClick={previousPage}
          className={styles.button}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={nextPage}
          disabled={!pageInfo?.hasNextPage || !pageInfo.endCursor}
          className={styles.button}
        >
          Next
        </button>
      </span>
    </div>
  );
}

export default Pagination;
