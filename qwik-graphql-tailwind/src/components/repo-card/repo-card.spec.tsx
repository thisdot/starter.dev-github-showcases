import { createDOM } from '@builder.io/qwik/testing';
import { describe, it, expect } from 'vitest';
import { RepoCard } from './repo-card';
import { Repo } from './types';

const repo: Repo = {
  id: '123',
  name: 'repo1',
  owner: 'owner1',
  description: 'This is a test repository',
  stargazerCount: 100,
  forkCount: 50,
  language: 'JavaScript',
  languageColor: '#000000',
  updatedAt: new Date(),
  isPrivate: false,
  isArchived: false,
  isFork: false,
};

describe('RepoCard component', function () {
  it('should mount', async () => {
    const { screen, render } = await createDOM();

    await render(<RepoCard repo={repo} />);
    expect(screen.outerHTML).toContain(repo.description);
  });
});
