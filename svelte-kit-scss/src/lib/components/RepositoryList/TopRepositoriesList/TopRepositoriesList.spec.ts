import { render } from '@testing-library/svelte';
import TopRepositoriesList from './TopRepositoriesList.svelte';
import type { TopRepositoriesListViewModel } from '../view-models';
import { MOCK_REPOSITORY_CARD_VIEW_MODELS } from '../mocks';

const MOCK_VIEW_MODEL: TopRepositoriesListViewModel = {
  repositories: MOCK_REPOSITORY_CARD_VIEW_MODELS,
  viewAllRouteHref: '/mock_href_view_all',
};

describe('TopRepositories', () => {
  // todo: add tests
  it('should create a component', () => {
    const { component } = render(TopRepositoriesList, {
      model: MOCK_VIEW_MODEL,
    });
    expect(component).toBeTruthy();
  });
});
