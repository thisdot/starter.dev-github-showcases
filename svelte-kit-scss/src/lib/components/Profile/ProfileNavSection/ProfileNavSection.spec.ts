import { beforeEach } from 'vitest';
import { render } from '@testing-library/svelte';
import ProfileNavSection from './ProfileNavSection.svelte';

describe('ProfileNavSection', () => {
  beforeEach(() => {
    render(ProfileNavSection, {});
  });
});
