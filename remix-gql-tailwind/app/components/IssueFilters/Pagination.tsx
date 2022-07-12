import type { IssueFilterAPI } from './useIssueFilters';
import type { PageInfo } from './types';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';
import * as styles from './Pagination.classNames';
import { useRepo } from '~/context/RepoContext';
import { Link } from '@remix-run/react';

interface PaginationProps {
  pageInfo?: PageInfo;
  changePage: IssueFilterAPI['changePage'];
}

const Previous = () => {
  return (
    <>
      <ChevronLeftIcon className="mr-1.5 inline h-4 w-4" />
      Previous
    </>
  );
};

const Next = () => {
  return (
    <>
      Next
      <ChevronRightIcon className="ml-1.5 inline h-4 w-4" />
    </>
  );
};

function Pagination({ pageInfo }: PaginationProps) {
  const { owner, name, path } = useRepo();
  const prevUrl = `/${owner}/${name}/${path}?before=${pageInfo?.startCursor}`;
  const nextUrl = `/${owner}/${name}/${path}?after=${pageInfo?.endCursor}`;

  return (
    <div className={styles.container}>
      <span className={styles.group}>
        {pageInfo?.hasPreviousPage ? (
          <Link to={prevUrl} className={styles.link}>
            <Previous />
          </Link>
        ) : (
          <div className={styles.linkDisabled}>
            <Previous />
          </div>
        )}
        {pageInfo?.hasNextPage ? (
          <Link to={nextUrl} className={styles.link}>
            <Next />
          </Link>
        ) : (
          <div className={styles.linkDisabled}>
            <Next />
          </div>
        )}
      </span>
    </div>
  );
}

export default Pagination;
