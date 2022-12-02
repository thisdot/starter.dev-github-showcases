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

  return (
    <ErrorBoundary>
      {children({ username: owner })}
      <div className="flex justify-center mt-auto pb-5 pt-6">
        <a target="_blank" rel="noreferrer noopener" href="https://www.netlify.com">
          <img
            src="https://www.netlify.com/v3/img/components/netlify-light.svg"
            alt="Deploys by Netlify"
          />
        </a>
      </div>
    </ErrorBoundary>
  );
}

export default ProfilePage;
