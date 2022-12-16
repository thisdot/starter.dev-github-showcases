import { render } from '@testing-library/svelte';
import AllRepositoriesList from './AllRepositoriesList.svelte';
import { MOCK_REPOSITORY_CARD_VIEW_MODELS } from '../mocks';
import type { AllRepositoriesListViewModel } from '../view-models';

const MOCK_VIEW_MODEL: AllRepositoriesListViewModel = {
  repositories: MOCK_REPOSITORY_CARD_VIEW_MODELS,
  controls: {},
};

describe('RepoList', () => {
  // todo: add tests
  it('should create a component', () => {
    const { component } = render(AllRepositoriesList, {
      model: MOCK_VIEW_MODEL,
    });
    expect(component).toBeTruthy();
  });
});
