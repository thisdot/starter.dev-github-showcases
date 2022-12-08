import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it } from 'vitest';
import { RepoAboutWidget } from './RepoAbout';
import { RepoProvider } from '../../contexts/RepoContext';

describe('Repo About', () => {
  let wrapper;
  beforeEach(async () => {
    window.fetch = () => {
      return new Promise((resolve) => {
        resolve({
          json: () => {
            return new Promise((resolve) => {
              resolve({
               data: {
                repository : {
                  readme: {
                    text: '# Test Repo'
                  },
                  stargazerCount: 1,
                  issues: {
                    totalCount: 1
                  },
                  topics: ['test'],
                  homepageUrl: 'http://localhost',
                  watchers: {
                    totalCount: 1
                  },
                  pullRequests: {
                    totalCount: 1
                  },
                  owner: {
                    orgName: 'test',
                  }
                }
               }
              });
            });
          },
        });
      });
    };

    wrapper = render(() => (
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

  // it('should show show contents', async () => {
  //   const contents = await wrapper.getByTestId('about-info');
  //   const topic = await wrapper.getByText(aboutData.info.data.topics[0]);
  //   expect(contents.innerHTML).toBeTruthy();
  //   expect(topic).toBeVisible();
  // })
})
