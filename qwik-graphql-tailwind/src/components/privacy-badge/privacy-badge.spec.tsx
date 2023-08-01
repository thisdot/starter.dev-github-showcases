import { createDOM } from '@builder.io/qwik/testing';
import { test, expect, describe } from 'vitest';
import { PrivacyBadge } from './privacy-badge';

describe('PrivacyBadge Component', () => {
  test(`should mount`, async () => {
    const { render } = await createDOM();
    await render(<PrivacyBadge isPrivate={true} />);
  });

  test(`should render 'Private'`, async () => {
    const { screen, render } = await createDOM();
    await render(<PrivacyBadge isPrivate={true} />);
    expect(screen.outerHTML).toContain('Private');
  });

  test(`should render 'Public'`, async () => {
    const { screen, render } = await createDOM();
    await render(<PrivacyBadge isPrivate={false} />);
    expect(screen.outerHTML).toContain('Public');
  });
});
