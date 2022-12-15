import { createDOM } from '@builder.io/qwik/testing';
import { describe, expect, it } from 'vitest';
import { Pagination } from './pagination';

const MOCK_PAGE_INFO = {
  hasPreviousPage: true,
  hasNextPage: true,
};

describe('Pagination Component', () => {
  it(`should mount`, async () => {
    const { screen, render } = await createDOM();

    await render(<Pagination pageInfo={MOCK_PAGE_INFO} owner={'This Dot'} />);
    expect(screen.outerHTML).toContain('Previous');
    expect(screen.outerHTML).toContain('Next');
  });
});
