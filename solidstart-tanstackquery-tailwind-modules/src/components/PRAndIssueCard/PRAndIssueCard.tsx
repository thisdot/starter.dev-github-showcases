import { For, Match, Show, Switch, splitProps } from 'solid-js';
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
import { A } from '@solidjs/router';

export type Labels = {
  color: string;
  name: string;
};

export type StateOption = 'MERGED' | 'CLOSED' | 'OPEN';

export type PRAndIssueCardProps = {
  number: number;
  title: string;
  url: string;
  state: StateOption;
  createdAt: string;
  closedAt?: string;
  authorName: string;
  commentCount: number;
  labels: Labels[];
  type: 'pr' | 'issue';
};

const PRAndIssueCard = (props: PRAndIssueCardProps) => {
  const [local] = splitProps(props, [
    'number',
    'title',
    'url',
    'state',
    'createdAt',
    'closedAt',
    'authorName',
    'commentCount',
    'labels',
    'type',
  ]);

  return (
    <div class="flex relative items-baseline border-y border-gray-300 pt-2 pb-3">
      <div class="flex">
        <div class="flex-shrink-0 pl-4 translate-y-1">
          <span
            class={cn({
              'text-green-600': local.state === 'OPEN',
              'text-gray-500': local.state !== 'OPEN' && local.type === 'issue',
              'text-purple-600':
                (local.state !== 'OPEN' && local.state === 'MERGED') ||
                (local.state === 'CLOSED' && local.type === 'issue'),
              'text-red-600': local.type === 'pr' && local.state === 'CLOSED',
            })}
          >
            <Show when={local.type === 'issue'}>
              <Switch fallback={<IssuesIcon class="w-5 h-5" />}>
                <Match when={local.state === 'CLOSED'}>
                  <ClosedIssueIcon class="w-5 h-5" />
                </Match>
              </Switch>
            </Show>
            <Show when={local.type === 'pr'}>
              <Switch fallback={<PullRequestIcon class="w-5 h-5" />}>
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
          <A
            class="align-middle no-underline markdown-title font-semibold"
            target="_blank"
            href={local.url}
          >
            {local.title}
          </A>
          <For each={local.labels}>
            {(label) => (
              <span
                class={cn(
                  'mt-2 ml-2 py-1 px-2 rounded-full text-sm',
                  `bg-[${label.color}]`
                )}
                style={{ 'background-color': `${label.color}` }}
              >
                {label.name}
              </span>
            )}
          </For>
        </div>
        <div class="flex mt-1 text-sm text-gray-500">
          <span class="opened-by">
            #{local.number}
            {' by '}
            <a href="#">{local.authorName}</a> was{' '}
            <Switch fallback={<span>opened</span>}>
              <Match when={local.closedAt}>
                <span>closed</span>
              </Match>
            </Switch>{' '}
            on {format(new Date(local.createdAt), 'MMM d, yyyy')}
          </span>
        </div>
      </div>

      <div class="flex-shrink-0 w-1/5 text-right pr-3 flex-nowrap flex">
        <span class="ml-2 pt-1 flex-1 flex-shrink-0">
          <Show when={local.commentCount > 0}>
            <A href={local.url} class="">
              <span class="flex items-center justify-end">
                <CommentIcon class="w-5 h-5" />
                <span class="ml-1 text-sm font-bold">{local.commentCount}</span>
              </span>
            </A>
          </Show>
        </span>
      </div>
    </div>
  );
};

export default PRAndIssueCard;
