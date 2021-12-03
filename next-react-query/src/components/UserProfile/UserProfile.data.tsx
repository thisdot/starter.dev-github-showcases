import gqlClient from '@lib/gqlClient';
import { useUserProfileQuery } from '@lib/github';
import { parseError } from '@lib/parseError';
import { parseQuery } from './parseQuery';
import UserProfileView from './UserProfile.view';
import LoadingProfile from './LoadingProfile';

interface UserProfileProps {
  username: string;
}

function UserProfile({ username }: UserProfileProps) {
  const {
    data,
    isLoading,
    error: queryError,
  } = useUserProfileQuery(gqlClient, {
    username,
  });

  const user = parseQuery(data);
  const error = parseError(queryError);

  if (isLoading) {
    return <LoadingProfile />;
  }

  if (error || !user) {
    const err = error ? error : new Error('User not found');
    throw err;
  }

  return <UserProfileView {...user} />;
}

export default UserProfile;
