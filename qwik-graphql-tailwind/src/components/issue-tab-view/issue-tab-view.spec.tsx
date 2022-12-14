import { createDOM } from '@builder.io/qwik/testing';
import { test, expect, describe } from 'vitest';
import { Issue } from './type';
import IssuesData from './issues-data';

const issues: Issue[] = [
  {
    url: 'https://github.com/user/repo/issues/1',
    title: 'Issue 1',
    number: 1,
    state: 'OPEN',
    closedAt: '',
    createdAt: '2022-12-06T00:00:00Z',
    author: {
      login: 'johnsmith',
    },
    comments: {
      totalCount: 2,
    },
  },
  {
    url: 'https://github.com/user/repo/issues/2',
    title: 'Issue 2',
    number: 2,
    state: 'CLOSED',
    closedAt: '2022-12-07T00:00:00Z',
    createdAt: '2022-12-05T00:00:00Z',
    author: {
      login: 'johndoe',
    },
    comments: {
      totalCount: 0,
    },
  },
];

describe('IssuesData component', () => {
  test(`should mount`, async () => {
    const { screen, render } = await createDOM();

    await render(<IssuesData issues={issues} />);
    expect(screen.outerHTML).toContain('https://github.com/user/repo/issues/2');
  });
});
