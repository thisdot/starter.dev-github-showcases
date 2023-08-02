import { beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import RepositoryDetails from './RepositoryDetails.svelte';
import { MOCK_REPOSITORY_STATE } from '$lib/helpers/mocks/repository';

describe('RepositoryDetails Component', () => {
  const repositoryState = MOCK_REPOSITORY_STATE;
  beforeEach(() => {
    render(RepositoryDetails, {
      repositoryState,
    });
  });

  it.each([
    ['description', repositoryState.description],
    ['watchers-count', repositoryState.watchersCount],
    ['forks-count', repositoryState.forksCount],
    ['stargazers-count', repositoryState.stargazersCount],
  ])('should render: %s', (testId, expectedValue) => {
    const element = screen.getByTestId(testId);
    const expectedText = String(expectedValue);
    expect(element.textContent).toEqual(expectedText);
  });

  it('should render chips', () => {
    repositoryState.topics.map((topic) => {
      const chip = screen.getByText(topic.name);
      expect(chip).toBeTruthy();
    });
  });
});
