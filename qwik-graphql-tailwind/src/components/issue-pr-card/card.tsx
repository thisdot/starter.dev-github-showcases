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
import { Label } from '../repo-pulls/types';

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
    labels: Label[];
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
    <div class="flex relative items-baseline border-y border-gray-300 pt-2 pb-3">
      <div class="flex">
        <label class="flex-shrink-0 pl-3 hidden md:block">
          <input type="checkbox" name="issues[]" autoComplete="off" />
        </label>

        <div class="flex-shrink-0 pl-4">
          <span class={iconColor}>
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

      <div class="flex-auto min-width-0 pr-3 pl-2">
        <div>
          <a class="align-middle no-underline markdown-title font-semibold" target="_blank" href={data.url}>
            {data.title}
          </a>
          {data.labels.map((label: Label) => (
            <span class={`mt-2 ml-2 py-1 px-2 rounded-full text-sm bg-[#${label.color}]`}>{label.name}</span>
          ))}
        </div>
        <div class="flex mt-1 text-sm text-gray-500">
          <span class="opened-by">
            #{data.number}
            {' by '}
            <a href="#">{data.authorName}</a> was {data.isOpen ? 'opened' : 'closed'} on{' '}
            {format(new Date(data.createdAt), 'MMM d, yyyy')}
          </span>
        </div>
      </div>

      <div class="flex-shrink-0 w-1/5 text-right pr-3 flex-nowrap flex">
        <span class="ml-2 pt-1 flex-1 flex-shrink-0">
          {data.commentsCount > 0 && (
            <a href="#" class="">
              <div class="flex items-center justify-end">
                <CommentIcon className="w-5 h-5" />
                <span class="ml-1 text-sm font-bold">{data.commentsCount}</span>
              </div>
            </a>
          )}
        </span>
      </div>
    </div>
  );
});
