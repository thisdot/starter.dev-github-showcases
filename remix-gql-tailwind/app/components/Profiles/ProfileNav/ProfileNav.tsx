import TabNavigation from '../../Shared/TabNavigation/TabNavigation';
import { tabList } from './tabList';

interface ProfileNavProps {
  className?: string;
  basePath?: string;
  isOrg?: boolean;
  pathname: string;
}

function ProfileNav({ className, pathname }: ProfileNavProps) {
  return (
    <TabNavigation tabs={tabList} className={className} pathname={pathname} />
  );
}

export default ProfileNav;
