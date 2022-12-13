import { createDOM } from '@builder.io/qwik/testing';
import { describe, test } from 'vitest';
import Header from './header';

describe('Header component', async () => {
  test('should mount', async () => {
    const { render } = await createDOM();
    await render(<Header user={null} />);
  });
});
