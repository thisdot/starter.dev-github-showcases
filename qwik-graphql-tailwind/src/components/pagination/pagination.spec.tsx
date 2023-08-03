import { createDOM } from '@builder.io/qwik/testing';
import { describe, expect, it, vi } from 'vitest';
import { Pagination } from './pagination';

const MOCK_PAGE_INFO = {
  hasPreviousPage: true,
  hasNextPage: true,
};

describe('Pagination Component', () => {
  vi.mock('@builder.io/qwik', async () => {
    const qwik = await vi.importActual<typeof import('@builder.io/qwik')>('@builder.io/qwik');
    return {
      ...qwik,
      useContext: () => ({}),
    };
  });
  vi.mock('@builder.io/qwik-city', async () => {
    const qwik = await vi.importActual<typeof import('@builder.io/qwik-city')>('@builder.io/qwik-city');
    return {
      ...qwik,
      useNavigation: () => ({
        path: '/thisdot/repo/issues/',
      }),
    };
  });
  it(`should mount`, async () => {
    const { screen, render } = await createDOM();

    await render(<Pagination pageInfo={MOCK_PAGE_INFO} owner={'This Dot'} />);
    expect(screen.outerHTML).toContain('Previous');
    expect(screen.outerHTML).toContain('Next');
  });
});
