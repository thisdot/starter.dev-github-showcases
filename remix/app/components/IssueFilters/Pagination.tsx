import type { IssueFilterAPI } from './useIssueFilters';
import type { PageInfo } from './types';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';
import * as styles from './Pagination.classNames';

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
          <ChevronLeftIcon className="w-4 h-4 inline mr-1.5" />
          Previous
        </button>
        <button
          type="button"
          onClick={nextPage}
          disabled={!pageInfo?.hasNextPage || !pageInfo.endCursor}
          className={styles.button}
        >
          Next
          <ChevronRightIcon className="w-4 h-4 inline ml-1.5" />
        </button>
      </span>
    </div>
  );
}

export default Pagination;
