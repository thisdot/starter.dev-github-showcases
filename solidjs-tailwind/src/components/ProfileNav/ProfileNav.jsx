import { tabList } from './tab-list';
import { TabNavigation } from '../TabNavigation';

const ProfileNav = (props) => {
  return (
    <TabNavigation
      tabs={tabList}
      class={props.class}
      pathname={props.pathname}
    />
  );
};

export default ProfileNav;
