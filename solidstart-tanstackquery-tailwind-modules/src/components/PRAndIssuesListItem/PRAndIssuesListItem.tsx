import { For, Show, splitProps } from 'solid-js';
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
import { Issue, IssueNodeProps } from '~/types/issues-type';
import { PullRequest, PullRequestNodeProps } from '~/types/pull-request-type';
import { Label } from '~/types/label-type';

interface PRAndIssuesListItemProps {
  issue?: Issue;
  pullRequest?: PullRequest;
}

const PRAndIssuesListItem = (props: PRAndIssuesListItemProps) => {
  const [local] = splitProps(props, ['issue', 'pullRequest']);

  const item = local.issue || local.pullRequest;

  console.log(item);

  const type = local.issue ? 'issue' : 'pr';

  return (
    <div class="flex relative items-baseline border-y border-gray-300 pt-2 pb-3">
      <div class="flex">
        <label class="flex-shrink-0 pl-3 hidden md:block">
          <input type="checkbox" name="issues[]" autocomplete="off" />
        </label>

        <div class="flex-shrink-0 pl-4 translate-y-1">
          <span
            class={cn({
              'text-green-600': item?.state === 'OPEN',
              'text-gray-500': item?.state !== 'OPEN' && type === 'issue',
              'text-purple-600':
                (item?.state !== 'OPEN' && item?.state === 'MERGED') ||
                (item?.state === 'CLOSED' && type === 'issue'),
              'text-red-600': type === 'pr' && item?.state === 'CLOSED',
            })}
          >
            <Show when={item?.state === 'OPEN' && type === 'issue'}>
              <IssuesIcon class="w-5 h-5" />
            </Show>
            <Show when={item?.state === 'CLOSED' && type === 'issue'}>
              <ClosedIssueIcon class="w-5 h-5" />
            </Show>

            <Show when={item?.state === 'OPEN' && type === 'pr'}>
              <PullRequestIcon class="w-5 h-5" />
            </Show>
            <Show when={item?.state === 'MERGED'}>
              <MergedPrIcon class="w-5 h-5" />
            </Show>
            <Show when={item?.state === 'CLOSED' && type === 'pr'}>
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
            href={item?.url}
          >
            {item?.title}
          </a>

          <For each={item?.labels as Label[]}>
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
            #{item?.number}
            {' by '}
            <a href="#">{item?.login}</a> was{' '}
            {item?.state === 'OPEN' ? 'open' : 'closed'} on{' '}
            {format(new Date(item?.createdAt as string), 'MMM d, yyyy')}
          </span>
        </div>
      </div>

      <div class="flex-shrink-0 w-1/5 text-right pr-3 flex-nowrap flex">
        <span class="ml-2 pt-1 flex-1 flex-shrink-0">
          <Show when={(item?.commentCount as number) > 0}>
            <a href="#" class="">
              <div class="flex items-center justify-end">
                <CommentIcon class="w-5 h-5" />
                <span class="ml-1 text-sm font-bold">{item?.commentCount}</span>
              </div>
            </a>
          </Show>
        </span>
      </div>
    </div>
  );
};

export default PRAndIssuesListItem;
