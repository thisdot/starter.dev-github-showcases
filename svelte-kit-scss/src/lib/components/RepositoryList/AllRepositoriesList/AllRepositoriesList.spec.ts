import { beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { topRepositoriesFixture } from '$lib/fixtures';
import AllRepositoriesList from './AllRepositoriesList.svelte';

describe('RepoList', () => {
  beforeEach(() => {
    render(AllRepositoriesList, {
      models: topRepositoriesFixture,
    });
  });

  it('should render 2 Repository Cards', () => {
    const repoCards = screen.queryAllByTestId('repo-card');
    expect(repoCards.length).toBe(2);
  });
});
