import type { ReactNode } from 'react';
import { useErrorBoundary } from 'use-error-boundary';
import { parseError } from '@lib/parseError';

interface ProfilePageProps {
  owner?: string | string[];
  children: (props: { username: string }) => ReactNode;
}

/**
 * Page error boundary and passes a parsed username param to child component
 */
function ProfilePage({ owner, children }: ProfilePageProps) {
  const isOwnerValid = typeof owner === 'string';
  const { ErrorBoundary, error: caughtError } = useErrorBoundary();

  if (!isOwnerValid) {
    return null;
  }

  const error = parseError(caughtError);
  if (error) {
    return <>{error.message}</>;
  }

  return <ErrorBoundary>{children({ username: owner })}</ErrorBoundary>;
}

export default ProfilePage;
