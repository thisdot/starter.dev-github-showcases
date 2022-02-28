import TabNavigation from '../TabNavigation/TabNavigation';
import { tabList } from './tabList';

interface ProfileNavProps {
  className?: string;
  isOrg?: boolean;
}

function ProfileNav({ className }: ProfileNavProps) {
  return <TabNavigation tabs={tabList} className={className} />;
}

export default ProfileNav;
