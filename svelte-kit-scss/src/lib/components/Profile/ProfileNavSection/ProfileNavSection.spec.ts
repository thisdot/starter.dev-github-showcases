import { beforeEach, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ProfileNavSection from './ProfileNavSection.svelte';

describe('ProfileNavSection', () => {
  beforeEach(() => {
    render(ProfileNavSection, {});
  });

  it("should should render Profile Nav", () => {
    const name = screen.getByText(/Repositories/);
    expect(name).toBeTruthy();
  });
});
