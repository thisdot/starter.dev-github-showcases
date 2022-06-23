import cn from 'classnames';
import * as styles from './Pagination.classNames';

interface PaginationProps {
  pageInfo?: any;
  owner: string;
}

function Pagination({ pageInfo, owner }: PaginationProps) {
  if (!pageInfo) {
    return null;
  }

  const prevUrl = `/${owner}?before=${pageInfo.startCursor}`;
  const nextUrl = `/${owner}?after=${pageInfo.endCursor}`;

  const handlePreviousClick = () => {
    window.location.assign(prevUrl);
  };

  const handleNextClick = () => {
    window.location.assign(nextUrl);
  };

  return (
    <div className={styles.container}>
      <span className={styles.group}>
        <button
          type="button"
          disabled={!pageInfo.hasPreviousPage || !pageInfo.startCursor}
          onClick={handlePreviousClick}
          className={
            !pageInfo.hasPreviousPage || !pageInfo.startCursor
              ? cn(styles.button, styles.buttonPrev)
              : cn(styles.button, styles.buttonPrev)
          }
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNextClick}
          disabled={!pageInfo.hasNextPage || !pageInfo.endCursor}
          className={
            !pageInfo.hasNextPage || !pageInfo.endCursor
              ? cn(styles.button, styles.buttonNext)
              : cn(styles.button, styles.buttonNext)
          }
        >
          Next
        </button>
      </span>
    </div>
  );
}

export default Pagination;
