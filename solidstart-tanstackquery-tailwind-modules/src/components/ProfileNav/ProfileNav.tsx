import { TabNavigation } from '../TabNavigation';
import { tabList } from './tab-list';

interface ProfileNavProps {
  pathname: string;
  class?: string;
  isOrg?: boolean;
}

const ProfileNav = (props: ProfileNavProps) => {
  return (
    <TabNavigation
      tabs={tabList}
      class={props.class}
      pathname={props.pathname}
    />
  );
};

export default ProfileNav;
