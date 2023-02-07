import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it } from 'vitest';
import { GistsData } from './index';
import { gists } from './data';

describe('User gist card', () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <GistsData gists={gists} />
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it(`should have ${gists.length} number of item(s)`, async () => {
    const listItems = await wrapper.findAllByTestId('gist-item');
    expect(listItems.length).toBe(gists.length);
  });
});
