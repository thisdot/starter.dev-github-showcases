import { component$ } from '@builder.io/qwik';
import TabNavigation from '../tab-navigation/tab-navigation';
import { tabList } from './tab-list';

interface ProfileNavProps {
  className?: string;
  basePath?: string;
  isOrg?: boolean;
  pathname: string;
}

export const ProfileNav = component$(({ className, pathname }: ProfileNavProps) => {
  return <TabNavigation tabs={tabList} className={className} pathname={pathname} />;
});

export default ProfileNav;
