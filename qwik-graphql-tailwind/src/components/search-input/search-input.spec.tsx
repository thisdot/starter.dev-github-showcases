import { createDOM } from '@builder.io/qwik/testing';
import { describe, expect, it, vi } from 'vitest';
import { SearchInput } from './search-input';

describe('SearchInput Component', () => {
  vi.mock('@builder.io/qwik', async () => {
    const qwik = await vi.importActual<typeof import('@builder.io/qwik')>('@builder.io/qwik');
    return {
      ...qwik,
      useContext: () => ({
        search: '',
        language: '',
        type: '',
        sortBy: '',
      }),
    };
  });

  it(`should mount`, async () => {
    const { render } = await createDOM();

    await render(<SearchInput placeholder="Search" />);
  });

  it(`should render the input element with the correct placeholder text`, async () => {
    const { screen, render } = await createDOM();

    await render(<SearchInput placeholder="Search" />);
    expect(screen.outerHTML).toContain('Search');
  });
});
