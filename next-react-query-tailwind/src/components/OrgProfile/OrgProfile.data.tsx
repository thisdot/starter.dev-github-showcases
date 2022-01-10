import gqlClient from '@lib/gqlClient';
import { useOrgProfileQuery } from '@lib/github';
import OrgProfileView from './OrgProfile.view';

interface OrgProfileProps {
  username: string;
}

function OrgProfile({ username }: OrgProfileProps) {
  const { data, isLoading, error } = useOrgProfileQuery(gqlClient, {
    username,
  });

  if (isLoading || error || !data?.organization) {
    return null;
  }

  return <OrgProfileView {...data.organization} />;
}

export default OrgProfile;
