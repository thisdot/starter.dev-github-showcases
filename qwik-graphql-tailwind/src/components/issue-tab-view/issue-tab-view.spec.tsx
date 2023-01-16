import { createDOM } from '@builder.io/qwik/testing';
import { test, expect, describe, vi } from 'vitest';
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
    login: 'johnsmith',
    commentCount: 2,
    labels: [],
  },
  {
    url: 'https://github.com/user/repo/issues/2',
    title: 'Issue 2',
    number: 2,
    state: 'CLOSED',
    closedAt: '2022-12-07T00:00:00Z',
    createdAt: '2022-12-05T00:00:00Z',
    login: 'johnDoe',
    commentCount: 1,
    labels: [],
  },
];

vi.mock('@builder.io/qwik', async () => {
  const qwik = await vi.importActual<typeof import('@builder.io/qwik')>('@builder.io/qwik');
  return {
    ...qwik,
    useContext: () => ({}),
  };
});
describe('IssuesData component', () => {
  test(`should mount`, async () => {
    const { screen, render } = await createDOM();

    await render(<IssuesData issues={issues} loading={false} />);
    expect(screen.outerHTML).toContain('https://github.com/user/repo/issues/2');
  });
});
