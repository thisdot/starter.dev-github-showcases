import { beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ProfileNavSection from './ProfileNavSection.svelte';

describe('ProfileNavSection', () => {
  beforeEach(() => {
    render(ProfileNavSection, {});
  });
});
