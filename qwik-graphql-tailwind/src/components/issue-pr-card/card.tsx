import { component$ } from '@builder.io/qwik';
import cn from 'classnames';
import { format } from 'date-fns';
import {
  DraftPrIcon,
  CommentIcon,
  IssuesIcon,
  ResolvedIssueIcon,
  ClosedIssueIcon,
  PullRequestIcon,
  MergedPrIcon,
  ClosedPrIcon,
} from '../icons';
import * as styles from './issue-pr-card.classNames';

export interface IssuePrCardProps {
  data: {
    url: string;
    title: string;
    number: number;
    isOpen: boolean;
    isMerged?: boolean;
    isResolved?: boolean;
    isDraft?: boolean;
    createdAt: string;
    authorName: string;
    commentsCount: number;
  };
  type: 'issue' | 'pr';
}

// An issue can be open, closed, or resolved
// A PR can be open, closed, or merged
// A draft PR can be open or closed
// when isDraft is true, the pr is open, only pr can be draft
// when isResolved is true, the issue is closed, only issue can be resolved
// when isMerged is true, the pr is closed, only pr can be merged
export const IssuePrCard = component$(({ data, type }: IssuePrCardProps) => {
  const iconColor = cn({
    'text-green-600': data.isOpen && !data.isDraft,
    'text-gray-500':
      (data.isOpen && type === 'pr' && data.isDraft) || (!data.isOpen && type === 'issue' && !data.isResolved),
    'text-purple-600': !data.isOpen && (data.isMerged || data.isResolved),
    'text-red-600': !data.isOpen && type === 'pr' && !data.isMerged,
  });

  return (
    <div className={styles.card_container}>
      <div className="flex">
        <label className={styles.card_checkbox}>
          <input type="checkbox" name="issues[]" autoComplete="off" />
        </label>

        <div className="flex-shrink-0 pl-4">
          <span className={iconColor}>
            {type == 'issue' ? (
              data.isOpen ? (
                <IssuesIcon className="w-5 h-5" />
              ) : (
                <>
                  {data.isResolved ? (
                    <ResolvedIssueIcon className="w-5 h-5" />
                  ) : (
                    <ClosedIssueIcon className="w-5 h-5" />
                  )}
                </>
              )
            ) : data.isOpen ? (
              <>{data.isDraft ? <DraftPrIcon className="w-5 h-5" /> : <PullRequestIcon className="w-5 h-5" />}</>
            ) : (
              <>{data.isMerged ? <MergedPrIcon className="w-5 h-5" /> : <ClosedPrIcon className="w-5 h-5" />}</>
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
