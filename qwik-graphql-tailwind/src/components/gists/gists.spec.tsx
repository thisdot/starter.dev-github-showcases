import { createDOM } from '@builder.io/qwik/testing';
import { describe, vi, it } from 'vitest';
import { Gists } from '~/components/gists';
// import { GistItem } from './types';

// const MOCK_GISTS: GistItem[] = [
//   {
//     id: '123',
//     description: '123',
//     name: 'gist-test',
//     url: 'https://url-gists.com',
//   },
// ];

describe('Gists Component', () => {
  // Mocks useStore/useContext
  vi.mock('@builder.io/qwik', async () => {
    const qwik = await vi.importActual<typeof import('@builder.io/qwik')>('@builder.io/qwik');
    return {
      ...qwik,
      useStore: () => ({}),
    };
  });

  it(`should mount`, async () => {
    const { render } = await createDOM();

    await render(<Gists />);
  });
});
