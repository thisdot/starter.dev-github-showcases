import { component$ } from '@builder.io/qwik';
import { format } from 'date-fns';
import { IssuesIcon, PullRequestIcon } from '../icons';
import * as styles from './issue-pr-card.classNames';

export interface IssuePrCardProps {
  data: {
    url: string;
    title: string;
    number: number;
    isOpen: boolean;
    createdAt: string;
    authorName: string;
    commentsCount: number;
  };
  type: 'issue' | 'pr';
}

export const IssuePrCard = component$(({ data, type }: IssuePrCardProps) => {
  return (
    <div className={styles.card_container}>
      <div className="flex">
        <label className={styles.card_checkbox}>
          <input type="checkbox" name="issues[]" autoComplete="off" />
        </label>

        <div className="flex-shrink-0 pl-4">
          <span>{type == 'issue' ? <IssuesIcon className="w-5 h-5" /> : <PullRequestIcon className="w-5 h-5" />}</span>
        </div>
      </div>

      <div className={styles.card_title_container}>
        <a className={styles.card_title} href={data.url}>
          {data.title}
        </a>
        <div className={styles.card_subtitle}>
          <span className="opened-by">
            #{data.number}
            {' by '}
            <a href="#">{data.authorName}</a> was {data.isOpen ? 'opened' : 'closed'} on{' '}
            {format(new Date(data.createdAt), 'MMM d, yyyy')}
          </span>
        </div>
      </div>

      <div className={styles.card_right_side}>
        <span className="ml-2 flex-1 flex-shrink-0">
          {data.commentsCount > 0 && (
            <a href="#" className="">
              <div className="flex items-center justify-end">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  className="v-align-middle"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"
                  ></path>
                </svg>
                <span className="ml-1 text-sm font-bold">{data.commentsCount}</span>
              </div>
            </a>
          )}
        </span>
      </div>
    </div>
  );
});
