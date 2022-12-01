import {
  GithubIssueAuthorAssociation,
  type GithubSearchIssue,
  type GithubSearchIssueApiResponse,
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

export const MOCK_SEARCH_ISSUES_RESPONSE: GithubSearchIssueApiResponse = {
  total_count: 280,
  incomplete_results: false,
  items: [MOCK_SEARCH_ISSUE, MOCK_SEARCH_ISSUE],
};
