import { createDOM } from '@builder.io/qwik/testing';
import { test, expect, describe } from 'vitest';
import { OrgList } from './org-list';

const organizations = [
  {
    avatarUrl: 'https://avatars1.githubusercontent.com/u/12345?v=4',
    login: 'org1',
  },
  {
    avatarUrl: 'https://avatars2.githubusercontent.com/u/67890?v=4',
    login: 'org2',
  },
];

describe('OrgList Component', () => {
  test(`should mount`, async () => {
    const { screen, render } = await createDOM();
    await render(<OrgList organizations={organizations} />);
    expect(screen.outerHTML).toContain('https://avatars1.githubusercontent.com/u/12345?v=4');
  });
});
