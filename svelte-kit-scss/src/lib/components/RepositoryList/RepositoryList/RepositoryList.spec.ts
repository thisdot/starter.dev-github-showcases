import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import RepositoryList from './RepositoryList.svelte';
import { MOCK_REPOSITORIES } from '../mocks';

describe('RepositoryList', () => {
  describe('should render items', () => {
    const { container } = render(RepositoryList, {
      items: MOCK_REPOSITORIES,
    });
    it('should render repository items', () => {
      const items = container.getElementsByClassName('item');
      expect(items.length).toEqual(MOCK_REPOSITORIES.length);
    });
  });
});
