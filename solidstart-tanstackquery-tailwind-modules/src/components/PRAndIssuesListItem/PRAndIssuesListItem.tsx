// I must disable eslint because otherwise everytime I save the file
// elsint brokes my class declaration at line #38 and the icon hasn't the right color

/* eslint-disable */
import { JSX } from 'solid-js';
import { format } from 'date-fns';
import cn from 'classnames';
import {
  IssuesIcon,
  PullRequestIcon,
  MergedPrIcon,
  ClosedPrIcon,
  CommentIcon,
  ClosedIssueIcon,
} from '../Icons';
import { usePrAndIssuesContext } from '../../contexts/PrAndIssuesContext';

interface Props {
  state: string;
  url: string | undefined;
  title: string;
  labels: {
    color: any;
    name: string;
  }[];
  number: number;
  authorName: string;
  isOpen: any;
  createdAt: string | number | Date;
  commentCount: number;
}

const PRAndIssuesListItem = (props: Props) => {
  const { type } = usePrAndIssuesContext();

  return (
    <div class="flex relative items-baseline border-y border-gray-300 pt-2 pb-3">
      <div class="flex">
        <label class="flex-shrink-0 pl-3 hidden md:block">
          <input type="checkbox" name="issues[]" autocomplete="off" />
        </label>

        <div class="flex-shrink-0 pl-4 translate-y-1">
          <span
            class={cn({
              'text-green-600': props.state === 'OPEN',
              'text-gray-500': props.state !== 'OPEN' && type === 'issue',
              'text-purple-600':
                (props.state !== 'OPEN' && props.state === 'MERGED') ||
                (props.state === 'CLOSED' && type === 'issue'),
              'text-red-600': type === 'pr' && props.state === 'CLOSED',
            })}
          >
            {type === 'issue' ? (
              <>
                {props.state === 'CLOSED' ? (
                  <ClosedIssueIcon class="w-5 h-5" />
                ) : (
                  <IssuesIcon class="w-5 h-5" />
                )}
              </>
            ) : props.state === 'OPEN' ? (
              <PullRequestIcon class="w-5 h-5" />
            ) : (
              <>
                {props.state === 'MERGED' ? (
                  <MergedPrIcon class="w-5 h-5" />
                ) : (
                  <ClosedPrIcon class="w-5 h-5" />
                )}
              </>
            )}
          </span>
        </div>
      </div>

      <div class="flex-auto min-width-0 pr-3 pl-2">
        <div>
          <a
            class="align-middle no-underline markdown-title font-semibold"
            target="_blank"
            href={props.url}
          >
            {props.title}
          </a>
          {props.labels?.map((label) => (
            <span
              class={cn(
                'mt-2 ml-2 py-1 px-2 rounded-full text-sm',
                `bg-[#${label.color}]`
              )}
              style={{ 'background-color': `#${label.color}` }}
            >
              {label.name}
            </span>
          ))}
        </div>
        <div class="flex mt-1 text-sm text-gray-500">
          <span class="opened-by">
            #{props.number}
            {' by '}
            <a href="#">{props.authorName}</a> was{' '}
            {props.isOpen ? 'opened' : 'closed'} on{' '}
            {format(new Date(props.createdAt), 'MMM d, yyyy')}
          </span>
        </div>
      </div>

      <div class="flex-shrink-0 w-1/5 text-right pr-3 flex-nowrap flex">
        <span class="ml-2 pt-1 flex-1 flex-shrink-0">
          {props.commentCount > 0 && (
            <a href="#" class="">
              <div class="flex items-center justify-end">
                <CommentIcon class="w-5 h-5" />
                <span class="ml-1 text-sm font-bold">{props.commentCount}</span>
              </div>
            </a>
          )}
        </span>
      </div>
    </div>
  );
};

export default PRAndIssuesListItem;
