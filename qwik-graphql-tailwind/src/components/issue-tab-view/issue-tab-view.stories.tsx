import { component$, useContextProvider, useStore } from '@builder.io/qwik';
import { IssueTabView, IssuesProps } from '.';
import { GITHUB_GRAPHQL } from '~/utils/constants';
import IssuesPRContext, { IssuesPRContextProps } from '~/context/issue-pr-store';
import DropdownContext, { DropdownStoresProps } from '~/context/issue-tab-header-dropdown';
import { sortOptions } from './data';
import { storybookMockRouting } from '~/utils/storybook/storybookMockRouting';

const IssueTabViewDemoComponent = component$((props: IssuesProps) => {
  const store = useStore<IssuesPRContextProps>(
    {
      activeTab: 'open',
      closedIssues: [
        {
          state: 'CLOSED',
          createdAt: '20 sep 2020',
          closedAt: '20 sep 2021',
          number: 121,
          commentCount: 3,
          labels: [],
          login: 'Dustin',
          title: 'Save The last code',
          url: '#',
        },
      ],
      openIssues: [
        {
          state: 'OPEN',
          createdAt: '20 sep 2020',
          closedAt: '20 sep 2021',
          number: 121,
          commentCount: 3,
          labels: [],
          login: 'Dustin',
          title: 'Save The last code',
          url: '#',
        },
      ],
      closedIssuesCount: 1,
      openIssuesCount: 1,
      loading: false,
      openPageInfo: {
        endCursor: '',
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: '',
      },
      milestones: [],
      issuesLabel: [],
      closedPageInfo: {
        endCursor: '',
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: '',
      },
    },
    { recursive: true }
  );

  const dropdownStore = useStore<DropdownStoresProps>(
    {
      selectedSort: sortOptions[0].value,
    },
    { recursive: true }
  );

  storybookMockRouting();
  useContextProvider(IssuesPRContext, store);
  useContextProvider(DropdownContext, dropdownStore);
  return (
    <div class="container">
      <IssueTabView {...props} />
    </div>
  );
});

export default {
  title: 'Issue Tab View',
  parameters: {
    mockData: [
      {
        url: GITHUB_GRAPHQL,
        method: 'POST',
        status: 200,
        response: {
          data: {
            repository: {
              openIssues: {
                totalCount: 3,
                pageInfo: {
                  startCursor: null,
                  endCursor: null,
                  hasNextPage: false,
                  hasPreviousPage: false,
                },
                nodes: [
                  {
                    state: 'OPEN',
                    createdAt: '20 sep 2020',
                    closedAt: '20 sep 2021',
                    comments: { totalCount: 3 },
                    number: 121,
                    author: { login: 'Dustin' },
                    title: 'Save The last code',
                    url: '#',
                  },
                  {
                    state: 'OPEN',
                    createdAt: '20 sep 2020',
                    closedAt: '20 sep 2021',
                    comments: { totalCount: 3 },
                    number: 121,
                    author: { login: 'Dustin' },
                    title: 'Save The last code',
                    url: '#',
                  },
                  {
                    state: 'OPEN',
                    createdAt: '20 sep 2020',
                    closedAt: '20 sep 2021',
                    comments: { totalCount: 3 },
                    number: 121,
                    author: { login: 'Dustin' },
                    title: 'Save The last code',
                    url: '#',
                  },
                ],
              },
              closedIssues: {
                totalCount: 3,
                pageInfo: {
                  startCursor: null,
                  endCursor: null,
                  hasNextPage: false,
                  hasPreviousPage: false,
                },
                nodes: [
                  {
                    state: 'CLOSED',
                    createdAt: '20 sep 2020',
                    closedAt: '20 sep 2021',
                    comments: { totalCount: 3 },
                    number: 121,
                    author: { login: 'Dustin' },
                    title: 'Save The last code',
                    url: '#',
                  },
                  {
                    state: 'CLOSED',
                    createdAt: '20 sep 2020',
                    closedAt: '20 sep 2021',
                    comments: { totalCount: 3 },
                    number: 121,
                    author: { login: 'Dustin' },
                    title: 'Save The last code',
                    url: '#',
                  },
                  {
                    state: 'CLOSED',
                    createdAt: '20 sep 2020',
                    closedAt: '20 sep 2021',
                    comments: { totalCount: 3 },
                    number: 121,
                    author: { login: 'Dustin' },
                    title: 'Save The last code',
                    url: '#',
                  },
                ],
              },
              milestones: {
                nodes: [],
                pageInfo: {
                  startCursor: null,
                  endCursor: null,
                  hasNextPage: false,
                  hasPreviousPage: false,
                },
                totalCount: 0,
              },
            },
          },
        },
      },
    ],
  },
};

const Template = (args: IssuesProps) => <IssueTabViewDemoComponent {...args} />;

export const Default: any = Template.bind({});

Default.args = {
  owner: 'thisdot',
  name: 'starter.dev-github-showcases',
};
