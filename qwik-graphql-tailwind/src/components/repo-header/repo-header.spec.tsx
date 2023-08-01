import { createDOM } from '@builder.io/qwik/testing';
import { describe, it, vi } from 'vitest';
import { RepoHeader } from './';

vi.mock('@builder.io/qwik-city', async () => {
  const qwik = await vi.importActual<typeof import('@builder.io/qwik-city')>('@builder.io/qwik-city');
  return {
    ...qwik,
    useContext: () => ({}),
  };
});

describe('RepoHeader component', function () {
  it('should mount', async () => {
    const { render } = await createDOM();
    await render(<RepoHeader />);
  });
});
