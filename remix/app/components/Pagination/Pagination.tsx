import cn from 'classnames';
import { useNavigate } from 'remix';
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
  let navigate = useNavigate()

  const handlePreviousClick = () => {
    navigate(prevUrl);
  };

  const handleNextClick = () => {
    navigate(nextUrl);
  };

  return (
    <div className={styles.container}>
      <span className={styles.group}>
        <button
          type="button"
          disabled={!pageInfo.hasPreviousPage || !pageInfo.startCursor}
          onClick={handlePreviousClick}
          className={cn(styles.button, styles.buttonPrev)}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNextClick}
          disabled={!pageInfo.hasNextPage || !pageInfo.endCursor}
          className={cn(styles.button, styles.buttonNext)}
        >
          Next
        </button>
      </span>
    </div>
  );
}

export default Pagination;
