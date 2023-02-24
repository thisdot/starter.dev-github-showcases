import { Match, Show, splitProps, Switch } from 'solid-js';
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
import { type } from '../PRAndIssuesHeader';
import { Issue } from '~/types/issues-type';

const PRAndIssuesListItem = (props: Issue) => {
  const [local] = splitProps(props, [
    'number',
    'title',
    'url',
    'state',
    'createdAt',
    'login',
    'commentCount',
    'labels',
  ]);

  return (
    <div class="flex relative items-baseline border-y border-gray-300 pt-2 pb-3">
      <div class="flex">
        <label class="flex-shrink-0 pl-3 hidden md:block">
          <input type="checkbox" name="issues[]" autocomplete="off" />
        </label>

        <div class="flex-shrink-0 pl-4 translate-y-1">
          <span
            class={cn({
              'text-green-600': local.state === 'OPEN',
              'text-gray-500': local.state !== 'OPEN' && type() === 'issue',
              'text-purple-600':
                (local.state !== 'OPEN' && local.state === 'MERGED') ||
                (local.state === 'CLOSED' && type() === 'issue'),
              'text-red-600': type() === 'pr' && local.state === 'CLOSED',
            })}
          >
            <Show when={type() === 'issue'}>
              <Switch>
                <Match when={local.state === 'OPEN'}>
                  <IssuesIcon class="w-5 h-5" />
                </Match>
                <Match when={local.state === 'CLOSED'}>
                  <ClosedIssueIcon class="w-5 h-5" />
                </Match>
              </Switch>
            </Show>
            <Show when={type() === 'pr'}>
              <Switch>
                <Match when={local.state === 'OPEN'}>
                  <PullRequestIcon class="w-5 h-5" />
                </Match>
                <Match when={local.state === 'MERGED'}>
                  <MergedPrIcon class="w-5 h-5" />
                </Match>
                <Match when={local.state === 'CLOSED'}>
                  <ClosedPrIcon class="w-5 h-5" />
                </Match>
              </Switch>
            </Show>
          </span>
        </div>
      </div>

      <div class="flex-auto min-width-0 pr-3 pl-2">
        <div>
          <a
            class="align-middle no-underline markdown-title font-semibold"
            target="_blank"
            href={local.url}
          >
            {local.title}
          </a>
          {local.labels?.map((label) => (
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
            #{local.number}
            {' by '}
            <a href="#">{local.login}</a> was{' '}
            {local.state === 'OPEN' ? 'open' : 'closed'} on{' '}
            {format(new Date(local.createdAt), 'MMM d, yyyy')}
          </span>
        </div>
      </div>

      <div class="flex-shrink-0 w-1/5 text-right pr-3 flex-nowrap flex">
        <span class="ml-2 pt-1 flex-1 flex-shrink-0">
          {local.commentCount > 0 && (
            <a href="#" class="">
              <div class="flex items-center justify-end">
                <CommentIcon class="w-5 h-5" />
                <span class="ml-1 text-sm font-bold">{local.commentCount}</span>
              </div>
            </a>
          )}
        </span>
      </div>
    </div>
  );
};

export default PRAndIssuesListItem;
