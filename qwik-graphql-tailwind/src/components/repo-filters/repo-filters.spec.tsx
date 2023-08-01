import { createDOM } from '@builder.io/qwik/testing';
import { describe, it, vi } from 'vitest';
import { RepoFilters } from '../repo-filters/repo-filters';

describe('RepoFilters component', function () {
  it('should mount', async () => {
    const { render } = await createDOM();

    // Mocks useStore/useContext
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

    await render(<RepoFilters languages={[{ label: 'Test', value: 'Test' }]} resultCount={100} />);
  });
});
