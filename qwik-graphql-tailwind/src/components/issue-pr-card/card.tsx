import { component$ } from '@builder.io/qwik';
import { format } from 'date-fns';
import { CommentIcon, IssuesIcon, ClosedIssueIcon, PullRequestIcon, ClosedPrIcon } from '../icons';
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
          <span className={data.isOpen ? 'text-green-600' : 'text-purple-600'}>
            {type == 'issue' ? (
              data.isOpen ? (
                <IssuesIcon className="w-5 h-5" />
              ) : (
                <ClosedIssueIcon className="w-5 h-5" />
              )
            ) : data.isOpen ? (
              <PullRequestIcon className="w-5 h-5" />
            ) : (
              <ClosedPrIcon className="w-5 h-5" />
            )}
          </span>
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
        <span className="ml-2 pt-1 flex-1 flex-shrink-0">
          {data.commentsCount > 0 && (
            <a href="#" className="">
              <div className="flex items-center justify-end">
                <CommentIcon className="w-5 h-5" />
                <span className="ml-1 text-sm font-bold">{data.commentsCount}</span>
              </div>
            </a>
          )}
        </span>
      </div>
    </div>
  );
});
