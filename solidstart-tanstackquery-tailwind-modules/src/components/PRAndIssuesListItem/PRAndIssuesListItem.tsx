import { For, Match, Show, splitProps, Switch } from 'solid-js';
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
import { IssueNodeProps } from '~/types/issues-type';
import { PullRequestNodeProps } from '~/types/pull-request-type';
import { Label } from '~/types/label-type';

interface PRAndIssuesListItemProps {
  issue?: IssueNodeProps;
  pullRequest?: PullRequestNodeProps;
}

const PRAndIssuesListItem = (props: PRAndIssuesListItemProps) => {
  const [local] = splitProps(props, ['issue', 'pullRequest']);

  const type = local.issue ? 'issue' : 'pr';

  const state = local.issue ? local.issue.state : local?.pullRequest?.state;

  const url = local.issue?.url || local.pullRequest?.url;

  const title = local.issue?.title || local.pullRequest?.title;

  const number = local.issue?.number || local.pullRequest?.number;

  const labels = local.issue?.labels || local.pullRequest?.labels || [];

  const login = local.issue?.author?.login || local.pullRequest?.author?.login;

  const createdAt = local.issue?.createdAt || local.pullRequest?.createdAt;

  const commentCount =
    local.issue?.comments?.totalCount ||
    local.pullRequest?.comments?.totalCount;

  return (
    <div class="flex relative items-baseline border-y border-gray-300 pt-2 pb-3">
      <div class="flex">
        <label class="flex-shrink-0 pl-3 hidden md:block">
          <input type="checkbox" name="issues[]" autocomplete="off" />
        </label>

        <div class="flex-shrink-0 pl-4 translate-y-1">
          <span
            class={cn({
              'text-green-600': state === 'OPEN',
              'text-gray-500': state !== 'OPEN' && type === 'issue',
              'text-purple-600':
                (state !== 'OPEN' && state === 'MERGED') ||
                (state === 'CLOSED' && type === 'issue'),
              'text-red-600': type === 'pr' && state === 'CLOSED',
            })}
          >
            <Show when={type === 'issue'}>
              <Switch>
                <Match when={state === 'OPEN'}>
                  <IssuesIcon class="w-5 h-5" />
                </Match>
                <Match when={state === 'CLOSED'}>
                  <ClosedIssueIcon class="w-5 h-5" />
                </Match>
              </Switch>
            </Show>
            <Show when={type === 'pr'}>
              <Switch>
                <Match when={state === 'OPEN'}>
                  <PullRequestIcon class="w-5 h-5" />
                </Match>
                <Match when={state === 'MERGED'}>
                  <MergedPrIcon class="w-5 h-5" />
                </Match>
                <Match when={state === 'CLOSED'}>
                  <ClosedPrIcon class="w-5 h-5" /> test
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
            href={url}
          >
            {title}
          </a>

          <For each={labels as Label[]}>
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
            #{number}
            {' by '}
            <a href="#">{login}</a> was {state === 'OPEN' ? 'open' : 'closed'}{' '}
            on {format(new Date(createdAt as string), 'MMM d, yyyy')}
          </span>
        </div>
      </div>

      <div class="flex-shrink-0 w-1/5 text-right pr-3 flex-nowrap flex">
        <span class="ml-2 pt-1 flex-1 flex-shrink-0">
          <Show when={(commentCount as number) > 0}>
            <a href="#" class="">
              <div class="flex items-center justify-end">
                <CommentIcon class="w-5 h-5" />
                <span class="ml-1 text-sm font-bold">{commentCount}</span>
              </div>
            </a>
          </Show>
        </span>
      </div>
    </div>
  );
};

export default PRAndIssuesListItem;
