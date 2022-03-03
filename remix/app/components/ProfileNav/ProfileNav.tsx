import TabNavigation from '../TabNavigation/TabNavigation';
import { tabList } from './tabList';

interface ProfileNavProps {
  className?: string;
  basePath?: string;
  isOrg?: boolean;
}

function ProfileNav({ basePath, className }: ProfileNavProps) {
  return <TabNavigation tabs={tabList} className={className} basePath={basePath} />;
}

export default ProfileNav;
