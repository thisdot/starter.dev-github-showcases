import Gists from './Gists.svelte';
import { render } from '@testing-library/svelte';

describe('Gists Component', () => {
  test('should show title', () => {
    const message = 'from Vitest';
    const { getByText } = render(Gists, { message });

    expect(() => getByText(`Hello, ${message}`));
  });
});
