import { createDOM } from '@builder.io/qwik/testing';
import { describe, it, expect } from 'vitest';
import { RepoHeading } from './';

describe('RepoHeading component', function () {
  it('should mount', async () => {
    const { screen, render } = await createDOM();

    await render(<RepoHeading name={'test-repo'} owner={'thisDot'} />);
    expect(screen.outerHTML).toContain('test-repo');
    expect(screen.outerHTML).toContain('thisDot');
  });
});
