import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { describe, expect, it } from 'vitest';
import 'whatwg-fetch';
import { RepoAboutWidget } from './RepoAbout';

describe('Repo About', () => {
  it('should mount', async () => {
    const wrapper = await render(() => (
      <Router>
        <RepoAboutWidget />
      </Router>
    ));
    expect(wrapper).toBeTruthy();
  });

  it('should show contents', async () => {
    const wrapper = await render(() => (
      <Router>
        <RepoAboutWidget />
      </Router>
    ));

    const contents = await wrapper.findByTestId('about-info');
    const topic = await wrapper.findByText('This is a description');
    expect(contents.innerHTML).toBeTruthy();
    expect(topic).toBeVisible();
  });
});
