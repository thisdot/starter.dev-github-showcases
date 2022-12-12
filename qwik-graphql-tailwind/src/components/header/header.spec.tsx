import { createDOM } from '@builder.io/qwik/testing';
import { describe, test } from 'vitest';
import Header from './Header';

describe('Header component', async () => {
  test('should mount', async () => {
    const { render } = await createDOM();
    await render(<Header user={null} />);
  });
});
