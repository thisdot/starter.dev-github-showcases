import { render, screen } from '@testing-library/svelte';
import TopRepositoriesList from './TopRepositoriesList.svelte';
import type { TopRepositoriesListViewModel } from '../view-models';
import { MOCK_REPOSITORY_CARD_VIEW_MODELS } from '../mocks';

describe('TopRepositories', () => {
  describe('handle view all repositories', () => {
    it('should show a link to the view all repositories', () => {
      const viewAllRouteHref = '/mock_href_view_all';
      const MOCK_VIEW_MODEL: TopRepositoriesListViewModel = {
        repositories: MOCK_REPOSITORY_CARD_VIEW_MODELS,
        viewAllRouteHref,
      };

      const { container } = render(TopRepositoriesList, {
        model: MOCK_VIEW_MODEL,
      });

      const viewAllLink = container.getElementsByClassName('link-text')[0] as HTMLAnchorElement;
      expect(viewAllLink.href).toContain(viewAllRouteHref);
    });
  });

  describe('handle no repositories', () => {
    it('should show no repositories', () => {
      const MOCK_VIEW_MODEL: TopRepositoriesListViewModel = {
        repositories: [],
      };

      render(TopRepositoriesList, {
        model: MOCK_VIEW_MODEL,
      });

      const noRepositoriesElement = screen.getByText('No repositories');

      expect(noRepositoriesElement).toBeTruthy();
    });
  });
});
