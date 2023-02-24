import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest';
import 'whatwg-fetch';
import { RepoAboutWidget } from './RepoAbout';
import { RepoProvider } from '../../contexts/RepoContext';
import { server } from '../../../msw/server';
// import { repoInforResponse } from '../../../msw/data';

// setupMswServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Repo About', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <RepoProvider>
          <RepoAboutWidget />
        </RepoProvider>
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should show contents', async () => {
    const loading = await wrapper.findByText('Loading...');
    expect(loading).toBeInTheDocument();
    // const contents = await wrapper.findByTestId('about-info');
    // const topic = await wrapper.findByText(
    //   repoInforResponse.data.repository.description
    // );
    // expect(contents.innerHTML).toBeTruthy();
    // expect(topic).toBeVisible();
  });
});
