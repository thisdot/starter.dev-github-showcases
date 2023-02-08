import { mergeProps } from 'solid-js';
import { PullRequestIcon, InformationCircleIcon, CodeIcon } from '../Icons';

type CreateTabListProps = {
  issueCount: number;
  pullRequestCount: number;
};

export function createTabList(props: CreateTabListProps) {
  const merged = mergeProps({ issuesCount: 0, pullRequestsCount: 0 }, props);

  return [
    {
      title: 'Code',
      path: '',
      Icon: CodeIcon,
    },
    {
      title: 'Issues',
      path: 'issues',
      Icon: InformationCircleIcon,
      // eslint-disable-next-line solid/reactivity
      count: merged.issueCount,
    },
    {
      title: 'Pull Requests',
      path: 'pulls',
      Icon: PullRequestIcon,
      // eslint-disable-next-line solid/reactivity
      count: merged.pullRequestCount,
    },
  ];
}
