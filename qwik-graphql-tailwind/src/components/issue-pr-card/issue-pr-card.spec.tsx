import { createDOM } from '@builder.io/qwik/testing';
import { test, expect, describe } from 'vitest';
import { IssuePrCard } from './card';

describe('IssuePrCard component', async () => {
  test('should mount', async () => {
    const { screen, render } = await createDOM();

    const data = {
      isOpen: true,
      isDraft: false,
      isResolved: false,
      isMerged: false,
      url: 'https://github.com/user/repo/issues/123',
      title: 'My issue',
      number: 123,
      authorName: 'johnsmith',
      createdAt: '2022-12-06T00:00:00Z',
      commentsCount: 4,
    };
    const type = 'issue';

    await render(<IssuePrCard data={data} type={type} />);

    expect(screen.outerHTML).toContain('My issue');
    expect(screen.outerHTML).toContain('johnsmith');
    expect(screen.outerHTML).toContain('https://github.com/user/repo/issues/123');
  });
});
