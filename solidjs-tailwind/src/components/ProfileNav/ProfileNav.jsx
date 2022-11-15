import { tabList } from './tab-list';
import { TabNavigation } from '../TabNavigation';

const ProfileNav = (props) => {
  console.log(tabList);
  return (
    <TabNavigation
      tabs={tabList}
      class={props.class}
      pathname={props.pathname}
    />
  );
};

export default ProfileNav;
