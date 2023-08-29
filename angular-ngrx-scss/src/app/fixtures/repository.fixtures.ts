import {
  ISSUE_STATE,
  PullRequestAPIResponse,
  PullRequestItemAPIResponse,
  IssueLabel,
  RepoPullRequests,
} from '../state/repository';

export const generatePullRequestAPIResponseFixture = (
  state: ISSUE_STATE = 'open',
): PullRequestAPIResponse => {
  const closedDate = new Date(2022, 2, 1).toISOString();
  return {
    incomplete_results: false,
    total_count: 1,
    items: [
      {
        id: 984,
        user: {
          login: 'thisdot',
        },
        title: 'PR title',
        number: 58,
        state: state,
        closed_at: state === 'closed' ? closedDate : null,
        pull_request: {
          url: 'ug5',
          html_url: 'F518xtd',
          diff_url: 'BwCz9qOB',
          patch_url: 'qwj',
          merged_at: state === 'closed' ? closedDate : null,
        },
        created_at: new Date(2022, 1, 1).toISOString(),
        labels: [
          {
            name: 'bugs',
          } as IssueLabel,
        ],
        comments: 305,
      } as PullRequestItemAPIResponse,
    ],
  };
};

const prObject = generatePullRequestAPIResponseFixture().items[0];

export const pullRequestFixture: RepoPullRequests = {
  totalCount: 1,
  pullRequests: [
    {
      id: prObject.id,
      login: prObject.user.login,
      title: prObject.title,
      number: prObject.number,
      state: prObject.state,
      closedAt: prObject.closed_at ? new Date(prObject.closed_at) : null,
      mergedAt: prObject.pull_request.merged_at
        ? new Date(prObject.pull_request.merged_at)
        : null,
      createdAt: new Date(prObject.created_at),
      labels: prObject.labels,
      commentCount: prObject.comments,
      labelCount: prObject.labels.length,
    },
  ],
};
