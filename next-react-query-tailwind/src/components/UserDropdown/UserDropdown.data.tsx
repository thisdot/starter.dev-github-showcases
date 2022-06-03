import { useCurrentUserQuery } from '@lib/github';
import gqlClient from '@lib/gqlClient';
import UserDropdownView from './UserDropdown.view';

interface UserDropdownProps {
  image?: string | null;
}

function UserDropdown({ image }: UserDropdownProps) {
  const { data } = useCurrentUserQuery(gqlClient);
  const username = data?.viewer.login;

  return <UserDropdownView image={image} username={username} />;
}

export default UserDropdown;
