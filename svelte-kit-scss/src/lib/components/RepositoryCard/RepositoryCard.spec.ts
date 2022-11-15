import { beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import RepositoryCard from './RepositoryCard.svelte';
import { topRepositoriesFixture } from '$lib/fixtures';

describe('RepositoryCard', () => {
  beforeEach(() => {
    render(RepositoryCard, {
      repo: topRepositoriesFixture[1],
    });
  });

  it('should should render repo name', () => {
    const repoName = screen.getByText(/framework.dev/);
    expect(repoName).toBeTruthy();
  });

  it('should should render repo language', () => {
    const language = screen.getByText(/TypeScript/);
    expect(language).toBeTruthy();
  });

  it('should should render repo stars count', () => {
    const starsCount = screen.getByText(/53/);
    expect(starsCount).toBeTruthy();
  });

  it('should should render repo forks count', () => {
    const forksCount = screen.getByText(/13/);
    expect(forksCount).toBeTruthy();
  });

  it('should should render repo license', () => {
    const license = screen.getByText(/MIT License/);
    expect(license).toBeTruthy();
  });

  it('should should render repo last update', () => {
    const lastUpdate = screen.getByText(/weeks ago/);
    expect(lastUpdate).toBeTruthy();
  });
});
