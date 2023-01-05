import { beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import RepositoryCounters from './RepositoryCounters.svelte';
import { MOCK_REPOSITORY_STATE } from '$lib/helpers/mocks/repository';

describe('RepositoryCounters Component', () => {
  const repositoryState = MOCK_REPOSITORY_STATE;
  beforeEach(() => {
    render(RepositoryCounters, {
      repositoryState,
    });
  });

  it.each([
    ['count Watchers', repositoryState.watchersCount],
    ['count Forks', repositoryState.forksCount],
    ['count Stars', repositoryState.stargazersCount],
  ])('should render: %s', (testId, expectedValue) => {
    const element = screen.getByTestId(testId);
    const expectedText = String(expectedValue);
    expect(element.innerHTML).toEqual(expectedText);
  });
});
