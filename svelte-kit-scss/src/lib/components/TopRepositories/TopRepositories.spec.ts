import { beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { topRepositoriesFixture } from '../../fixtures';
import TopRepositories from './TopRepositories.svelte';

describe('TopRepositories', () => {
  beforeEach(() => {
    render(TopRepositories, {
      repos: topRepositoriesFixture,
      username: 'thisdot',
    });
  });

  it('should render title', () => {
    const pageTitle = screen.getByText(/Top Repositories/);
    expect(pageTitle).toBeTruthy();
  });

  it('should render title', () => {
    const pageTitle = screen.queryAllByTestId('repo-card');
    expect(pageTitle.length).toBe(2);
  });
});
