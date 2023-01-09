import { PullRequestIcon, InformationCircleIcon, CodeIcon } from '../Icons'

export function createTabList(props) {
  const issuesCount = () => props.issueCount || 0;
  const pullRequestsCount = () => props.pullRequestCount || 0;

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
      count: issuesCount(),
    },
    {
      title: 'Pull Requests',
      path: 'pulls',
      Icon: PullRequestIcon,
      count: pullRequestsCount(),
    },
  ];
}
