import { useSearchParams } from '@solidjs/router';
import styles from './Pagination.module.css';

const Pagination = (props) => {
  const [, setQuery] = useSearchParams();

  const handlePreviousClick = () =>
    setQuery({ after: null, before: props.pageInfo.startCursor });

  const handleNextClick = () =>
    setQuery({ before: null, after: props.pageInfo.endCursor });

  return (
    <div class={styles.container}>
      <span class={styles.wrapper}>
        <button
          type="button"
          disabled={
            !props.pageInfo.hasPreviousPage || !props.pageInfo.startCursor
          }
          onClick={handlePreviousClick}
          class={styles.btn_container + ' rounded-l-lg'}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNextClick}
          disabled={!props.pageInfo.hasNextPage || !props.pageInfo.endCursor}
          class={styles.btn_container + ' rounded-r-lg'}
        >
          Next
        </button>
      </span>
    </div>
  );
};

export default Pagination;
