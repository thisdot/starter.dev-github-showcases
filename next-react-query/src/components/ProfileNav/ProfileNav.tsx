import TabNavigation from '@components/TabNavigation';
import { tabList } from './tabList';

interface ProfileNavProps {
  basePath: string;
  className?: string;
}

function ProfileNav({ basePath, className }: ProfileNavProps) {
  return (
    <TabNavigation tabs={tabList} basePath={basePath} className={className} />
  );
}

export default ProfileNav;
