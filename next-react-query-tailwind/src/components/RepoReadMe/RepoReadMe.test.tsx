import { screen } from '@testing-library/react';
import { renderWithClient } from '@lib/testUtils';
import { setupMswServer } from '@lib/mswServer';
import RepoReadMe from './RepoReadMe.data';
import { RepoProvider } from '@context/RepoContext';

jest.mock('rehype-raw', () => jest.fn());
jest.mock('remark-gfm', () => jest.fn());
jest.mock('react-markdown', () => jest.fn());
jest.mock('next/router', () => require('next-router-mock'));
setupMswServer();

describe('RepoReadMe', () => {
  test('displays add readme ui if repo does not have a readme file', async () => {
    const { container } = await renderWithClient(
      <RepoProvider
        value={{
          name: 'noreadme',
          owner: 'testowner',
          branch: 'main',
          path: '',
        }}
      >
        <RepoReadMe />
      </RepoProvider>
    );
    expect(
      await screen.findByText(
        'Help people interested in this repository understand your project by adding a README.'
      )
    ).toBeVisible();
  });

  test('renders repo readme contents if there is one available', async () => {
    renderWithClient(
      <RepoProvider
        value={{
          name: 'react',
          owner: 'facebook',
          branch: 'main',
          path: '',
        }}
      >
        <RepoReadMe />
      </RepoProvider>
    );
    expect(await screen.findByTestId('readme')).toBeInTheDocument();
  });
});
