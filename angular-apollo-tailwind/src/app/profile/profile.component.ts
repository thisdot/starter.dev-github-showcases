import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  // const { query, pathname } = useRouter();
  @Input() basePath = '';
}

// interface ProfilePageProps {
// 	owner?: string | string[];
// 	children: (props: { username: string }) => ReactNode;
//   }

//   function ProfilePage({ owner, children }: ProfilePageProps) {
// 	const isOwnerValid = typeof owner === 'string';
// 	const { ErrorBoundary, error: caughtError } = useErrorBoundary();

// 	if (!isOwnerValid) {
// 	  return null;
// 	}

// 	const error = parseError(caughtError);
// 	if (error) {
// 	  return <>{error.message}</>;
// 	}

// 	return <ErrorBoundary>{children({ username: owner })}</ErrorBoundary>;
//   }
