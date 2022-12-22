import { beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import RepositoryCard from './RepositoryCard.svelte';
import { relativeTimeFmt } from '../../../helpers';
import { MOCK_REPOSITORY_CARD_VIEW_MODEL } from '../mocks';

describe('RepositoryCard', () => {
  describe('should render:', () => {
    beforeEach(() => {
      render(RepositoryCard, {
        model: MOCK_REPOSITORY_CARD_VIEW_MODEL,
      });
    });

    it.each([
      ['name', MOCK_REPOSITORY_CARD_VIEW_MODEL.name],
      ['description', MOCK_REPOSITORY_CARD_VIEW_MODEL.description],
      ['stargazersCount', MOCK_REPOSITORY_CARD_VIEW_MODEL.stargazersCount],
      ['forksCount', MOCK_REPOSITORY_CARD_VIEW_MODEL.forksCount],
      ['license_name', MOCK_REPOSITORY_CARD_VIEW_MODEL.license?.name],
      ['updated', relativeTimeFmt(MOCK_REPOSITORY_CARD_VIEW_MODEL.updatedAt || '')],
    ])('should render: %s', (testId, expectedValue) => {
      const element = screen.getByTestId(testId);
      const expectedText = String(expectedValue);
      expect(element.innerHTML).toEqual(expectedText);
    });
  });
});
