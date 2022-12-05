import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it } from 'vitest';
import { aboutData } from './data';
import { RepoAboutWidget } from './RepoAbout';

describe('Repo About', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = render(() => (
      <Router>
        <RepoAboutWidget {...aboutData} />
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should show show contents', async () => {
    const contents = await wrapper.getByTestId('about-info');
    const topic = await wrapper.getByText(aboutData.info.data.topics[0]);
    expect(contents.innerHTML).toBeTruthy();
    expect(topic).toBeVisible();
  })
})
