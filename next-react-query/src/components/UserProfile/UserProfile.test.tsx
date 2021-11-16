import { setLogger } from 'react-query';
import { screen, waitFor } from '@testing-library/react';
import { renderWithClient, ErrorBoundaryTestComponent } from '@lib/testUtils';
import { setupMswServer } from '@lib/mswServer';
import UserProfile from './UserProfile.data';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

setupMswServer();

describe('UserProfile', () => {
  test('throws if a user profile is not found', async () => {
    const cerr = console.error;
    console.error = jest.fn();
    renderWithClient(
      <ErrorBoundaryTestComponent>
        <UserProfile username="baduser" />
      </ErrorBoundaryTestComponent>
    );

    await waitFor(async () => {
      expect(screen.getByTestId('errorBoundary')).toBeInTheDocument();
    });
    console.error = cerr;
  });

  test('successfully queries and renders user profile information', async () => {
    renderWithClient(<UserProfile username="testuser" />);
    expect(await screen.findByText('followers')).toBeInTheDocument();
    expect(await screen.findByText('following')).toBeInTheDocument();
    expect(await screen.findByText('Dane Grant')).toBeInTheDocument();
    expect(await screen.findByText('@thisdot')).toBeInTheDocument();
  });
});
