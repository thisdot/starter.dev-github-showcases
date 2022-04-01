import OrgProfileView from './OrgProfile.view';

interface OrgProfileProps {
  data: any;
}

function OrgProfile({ data }: OrgProfileProps) {

  return <OrgProfileView {...data.organization} />;
}

export default OrgProfile;
