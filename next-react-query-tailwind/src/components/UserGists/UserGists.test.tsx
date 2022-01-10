import { setLogger } from 'react-query';
import { screen } from '@testing-library/react';
import { renderWithClient } from '@lib/testUtils';
import { setupMswServer } from '@lib/mswServer';
import UserGists from './UserGists.data';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

setupMswServer();

describe('UserGists', () => {
  test('successfully queries and renders a list of users top repositories', async () => {
    renderWithClient(<UserGists />);
    expect(
      await screen.findByText('useFirebaseUploader.ts')
    ).toBeInTheDocument();
    expect(await screen.findByText('FormStore.js')).toBeInTheDocument();
  });
});
