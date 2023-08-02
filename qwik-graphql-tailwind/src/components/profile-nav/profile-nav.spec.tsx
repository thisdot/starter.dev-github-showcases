import { createDOM } from '@builder.io/qwik/testing';
import { test, describe, vi } from 'vitest';
import ProfileNav from './profile-nav';

describe('ProfileNav Component', () => {
  test(`should mount`, async () => {
    const { render } = await createDOM();

    // Mocks useStore to return a count of 10
    vi.mock('@builder.io/qwik', async () => {
      const qwik = await vi.importActual<typeof import('@builder.io/qwik')>('@builder.io/qwik');
      return {
        ...qwik,
        useContext: () => ({
          tab: {
            activeTab: 'open',
          },
        }),
      };
    });
    await render(<ProfileNav pathname="/" />);
  });
});
