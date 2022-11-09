import { beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Gists from './Gists.svelte';
import { gistsFixture } from '$lib/fixtures';

describe('Gists Component', () => {
  beforeEach(() => {
    render(Gists, {
      gists: gistsFixture,
    });
  });

  it('should should render repo name', () => {
    const name = screen.getByText(/README-Template.md/);
    expect(name).toBeTruthy();
  });
});
