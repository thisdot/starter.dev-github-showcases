import { useNavigate } from '@solidjs/router';
import { Show } from 'solid-js';
import { PageInfo } from '~/types/user-repo-type';
import styles from './Pagination.module.css';

interface IProps {
  pageInfo?: PageInfo;
  owner: string;
  tab?: string;
}

const Pagination = (props: IProps) => {
  const navigate = useNavigate();

  const handlePreviousClick = () =>
    navigate(
      `/${props.owner}?before=${props.pageInfo?.startCursor || ''}${
        props.tab ? `&tab=${props.tab}` : ''
      }`
    );

  const handleNextClick = () =>
    navigate(
      `/${props.owner}?after=${props.pageInfo?.endCursor || ''}${
        props.tab ? `&tab=${props.tab}` : ''
      }`
    );

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
