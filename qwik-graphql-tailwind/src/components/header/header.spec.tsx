import { createDOM } from '@builder.io/qwik/testing';
import { describe, test, vi, expect } from 'vitest';
import Header from './header';

vi.mock('@builder.io/qwik', async () => {
  const qwik = await vi.importActual<typeof import('@builder.io/qwik')>('@builder.io/qwik');
  return {
    ...qwik,
    useContext: () => ({}),
  };
});

describe('Header component', async () => {
  test('should mount and user not signed in', async () => {
    const { screen, render } = await createDOM();
    await render(<Header user={null} />);
    expect(screen.innerHTML).toContain('/api/auth/signin');
  });

  test('should mount and user signed in', async () => {
    const { screen, render } = await createDOM();
    await render(<Header user={{ login: 'test_user', avatarUrl: '' }} />);
    expect(screen.innerHTML).toContain('/test_user');
  });
});
