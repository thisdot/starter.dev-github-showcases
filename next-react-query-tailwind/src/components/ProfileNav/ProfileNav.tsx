import TabNavigation from '@components/TabNavigation';
import { tabList } from './tabList';

interface ProfileNavProps {
  basePath: string;
  className?: string;
  isOrg?: boolean;
}

function ProfileNav({ basePath, className, isOrg = false }: ProfileNavProps) {
  return (
    <TabNavigation
      tabs={tabList}
      basePath={basePath}
      className={className}
      isOrg={isOrg}
    />
  );
}

export default ProfileNav;
