import { useSearchParams } from 'solid-start';
import { Show } from 'solid-js';
import { PageInfo } from '~/types/user-repo-type';
import styles from './Pagination.module.css';

interface IProps {
  pageInfo: PageInfo;
  owner: string;
  tab?: string;
}

const Pagination = (props: IProps) => {
  const [, setSearchParams] = useSearchParams();

  const handlePreviousClick = () =>
    setSearchParams({
      before: props.pageInfo?.startCursor || '',
      tab: props.tab || '',
      after: null,
    });

  const handleNextClick = () =>
    setSearchParams({
      after: props.pageInfo?.endCursor || '',
      tab: props.tab || '',
      before: null,
    });

  return (
    <Show when={props.pageInfo}>
      <div class={styles.container}>
        <span class={styles.wrapper}>
          <button
            type="button"
            disabled={
              !props.pageInfo ||
              !props.pageInfo.hasPreviousPage ||
              !props.pageInfo.startCursor
            }
            onClick={handlePreviousClick}
            class={styles.btn_container + ' rounded-l-lg'}
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNextClick}
            disabled={
              !props.pageInfo ||
              !props.pageInfo.hasNextPage ||
              !props.pageInfo.endCursor
            }
            class={styles.btn_container + ' rounded-r-lg'}
          >
            Next
          </button>
        </span>
      </div>
    </Show>
  );
};

export default Pagination;
