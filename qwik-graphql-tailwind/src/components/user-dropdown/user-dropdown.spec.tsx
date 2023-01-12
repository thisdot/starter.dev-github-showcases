import { createDOM } from '@builder.io/qwik/testing';
import { describe, it, vi } from 'vitest';
import { UserDropdown } from './user-dropdown';

describe('UserDropdown Component', () => {
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
      useStore: () => ({
        expanded: false,
      }),
    };
  });

  it(`should mount`, async () => {
    const { render } = await createDOM();

    await render(<UserDropdown username="thisDot" />);
  });
});
