import { For, Show } from 'solid-js';
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
import { Issue } from '~/types/issues-type';
import { PullRequest } from '~/types/pull-request-type';
import { Label } from '~/types/label-type';

interface PRAndIssuesListItemProps {
  type: 'issue' | 'pr';
  item: Issue | PullRequest;
}

const PRAndIssuesListItem = (props: PRAndIssuesListItemProps) => {
  return (
    <div class="flex relative items-baseline border-y border-gray-300 pt-2 pb-3">
      <div class="flex">
        <label class="flex-shrink-0 pl-3 hidden md:block">
          <input type="checkbox" name="issues[]" autocomplete="off" />
        </label>

        <div class="flex-shrink-0 pl-4 translate-y-1">
          <span
            class={cn({
              'text-green-600': props.item?.state === 'OPEN',
              'text-gray-500':
                props.item?.state !== 'OPEN' && props.type === 'issue',
              'text-purple-600':
                (props.item?.state !== 'OPEN' &&
                  props.item?.state === 'MERGED') ||
                (props.item?.state === 'CLOSED' && props.type === 'issue'),
              'text-red-600':
                props.type === 'pr' && props.item?.state === 'CLOSED',
            })}
          >
            <Show when={props.item?.state === 'OPEN' && props.type === 'issue'}>
              <IssuesIcon class="w-5 h-5" />
            </Show>
            <Show
              when={props.item?.state === 'CLOSED' && props.type === 'issue'}
            >
              <ClosedIssueIcon class="w-5 h-5" />
            </Show>

            <Show when={props.item?.state === 'OPEN' && props.type === 'pr'}>
              <PullRequestIcon class="w-5 h-5" />
            </Show>
            <Show when={props.item?.state === 'MERGED'}>
              <MergedPrIcon class="w-5 h-5" />
            </Show>
            <Show when={props.item?.state === 'CLOSED' && props.type === 'pr'}>
              <ClosedPrIcon class="w-5 h-5" />
            </Show>
          </span>
        </div>
      </div>

      <div class="flex-auto min-width-0 pr-3 pl-2">
        <div>
          <a
            class="align-middle no-underline markdown-title font-semibold"
            target="_blank"
            href={props.item?.url}
          >
            {props.item?.title}
          </a>

          <For each={props.item?.labels as Label[]}>
            {(label) => (
              <span
                class={cn(
                  'mt-2 ml-2 py-1 px-2 rounded-full text-sm',
                  `bg-[#${label.color}]`
                )}
                style={{ 'background-color': `#${label.color}` }}
              >
                {label.name}
              </span>
            )}
          </For>
        </div>
        <div class="flex mt-1 text-sm text-gray-500">
          <span class="opened-by">
            #{props.item?.number}
            {' by '}
            <a href="#">{props.item?.login}</a> was{' '}
            {props.item?.state === 'OPEN' ? 'open' : 'closed'} on{' '}
            {format(new Date(props.item?.createdAt), 'MMM d, yyyy')}
          </span>
        </div>
      </div>

      <div class="flex-shrink-0 w-1/5 text-right pr-3 flex-nowrap flex">
        <span class="ml-2 pt-1 flex-1 flex-shrink-0">
          <Show when={props.item?.commentCount > 0}>
            <a href="#" class="">
              <div class="flex items-center justify-end">
                <CommentIcon class="w-5 h-5" />
                <span class="ml-1 text-sm font-bold">
                  {props.item?.commentCount}
                </span>
              </div>
            </a>
          </Show>
        </span>
      </div>
    </div>
  );
};

export default PRAndIssuesListItem;
