import {
  GithubIssueAuthorAssociation,
  IssueState,
  type GithubSearchIssue,
  type Issue,
} from '$lib/interfaces';

export const MOCK_SEARCH_ISSUE: GithubSearchIssue = {
  id: 35802,
  number: 132,
  title: 'Line Number Indexes Beyond 20 Not Displayed',
  user: {
    login: 'Nick3C',
    avatar_url:
      'https://secure.gravatar.com/avatar/934442aadfe3b2f4630510de416c5718?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
  },
  labels: [
    {
      id: 4,
      node_id: 'MDU6TGFiZWw0',
      url: 'https://api.github.com/repos/batterseapower/pinyin-toolkit/labels/bug',
      name: 'bug',
      color: 'ff0000',
    },
  ],
  state: 'open',
  assignee: null,
  assignees: [
    {
      login: 'mike',
      avatar_url:
        'https://secure.gravatar.com/avatar/934442aadfe3b2f4630510de416c5718?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
    },
    {
      login: 'john',
      avatar_url:
        'https://secure.gravatar.com/avatar/934442aadfe3b2f4630510de416c5718?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
    },
  ],
  comments: 15,
  created_at: '2009-07-12T20:10:41Z',
  updated_at: '2009-07-19T09:23:43Z',
  closed_at: null,
  locked: true,
  author_association: GithubIssueAuthorAssociation.Collaborator,
};

export const MOCK_ISSUE_ARRAY: Issue[] = [
  {
    assignees: [],
    closedAt: null,
    commentsCount: 5,
    createdAt: '2021-08-01T00:00:00Z',
    id: 1,
    labels: [
      {
        color: '#000000',
        default: false,
        description: null,
        id: 5456512,
        name: 'some label',
        url: 'https://github.com/owner/repo/labels/some%20label',
      },
    ],
    number: 1,
    state: IssueState.Open,
    title: '#2 Open issue 1 with comments',
    user: {
      login: 'foo',
      avatarUrl: 'https://via.placeholder.com/150/24f355',
    },
    htmlUrl: '',
  },
  {
    assignees: [],
    closedAt: null,
    commentsCount: 0,
    createdAt: '2021-08-01T00:00:00Z',
    id: 2,
    labels: [],
    number: 2,
    state: IssueState.Open,
    title: '#2 Open issue 2 with no comments',
    user: {
      login: 'bar',
      avatarUrl: 'https://via.placeholder.com/150/24f355',
    },
    htmlUrl: '',
  },
  {
    assignees: [],
    closedAt: null,
    commentsCount: 0,
    createdAt: '2021-08-01T00:00:00Z',
    id: 3,
    labels: [],
    number: 3,
    state: IssueState.Open,
    title: '#3 Closed issue 1 with comments',
    user: {
      login: 'fizz',
      avatarUrl: 'https://via.placeholder.com/150/24f355',
    },
    htmlUrl: '',
  },
  {
    assignees: [],
    closedAt: null,
    commentsCount: 10,
    createdAt: '2021-08-01T00:00:00Z',
    id: 4,
    labels: [],
    number: 4,
    state: IssueState.Open,
    title: 'Closed issue 2 with no comments',
    user: {
      login: 'buzz',
      avatarUrl: 'https://via.placeholder.com/150/24f355',
    },
    htmlUrl: '',
  },
];
