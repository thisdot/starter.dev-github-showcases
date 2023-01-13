import { render, screen } from '@testing-library/svelte';
import AllRepositoriesList from './AllRepositoriesList.svelte';
import type { AllRepositoriesListViewModel } from '../view-models';

describe('TopRepositories', () => {
  describe('handle no repositories', () => {
    it('should show if profile has no repositories and is reset', () => {
      const MOCK_VIEW_MODEL: AllRepositoriesListViewModel = {
        repositories: [],
        controls: {
          sentence: [
            {
              text: '0',
              emphasis: true,
            },
            {
              text: 'results for',
            },
            {
              text: 'all',
              emphasis: true,
            },
            {
              text: 'repositories',
            },
            {
              text: 'sorted by',
            },
            {
              text: 'last updated',
              emphasis: true,
            },
          ],
          resetFiltersHref: '/',
        },
      };

      render(AllRepositoriesList, {
        model: MOCK_VIEW_MODEL,
      });

      const noRepositoriesText = screen.getByText(
        "The profile doesn't have any repositories that match."
      );
      expect(noRepositoriesText).toBeTruthy();
    });

    it('should show if profile has no repositories', () => {
      const MOCK_VIEW_MODEL: AllRepositoriesListViewModel = {
        repositories: [],
        controls: {
          sentence: [
            {
              text: '0',
              emphasis: true,
            },
            {
              text: 'results for',
            },
            {
              text: 'all',
              emphasis: true,
            },
            {
              text: 'repositories',
            },
            {
              text: 'sorted by',
            },
            {
              text: 'last updated',
              emphasis: true,
            },
          ],
          resetFiltersHref: undefined,
        },
      };

      render(AllRepositoriesList, {
        model: MOCK_VIEW_MODEL,
      });

      const noRepositoriesText = screen.getByText("The profile doesn't have any repositories yet.");
      expect(noRepositoriesText).toBeTruthy();
    });
  });
});
