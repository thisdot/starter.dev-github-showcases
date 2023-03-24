import { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';

import RepoHeading from '../RepoHeading/RepoHeading';
import TabNavigation from '../TabNavigation/TabNavigation';
import RepoActionButtons from '../RepoActionButtons/RepoActionButtons';

import { createTabList } from './tabList';
import { Wrapper, TopRow } from './RepoSubHeader.styles';

import { useRepoInfoStore } from '../../hooks/stores';
import { REPO_TABS } from '../../utils/constants';

import { RepoStackParamList } from '../../../types';

const RepoSubHeader = ({ route, navigation }) => {
  const { width } = useWindowDimensions();
  const { info, activeTab } = useRepoInfoStore();

  useEffect(() => {
    const routes = route?.state?.routes;
    if (routes) {
      const name = routes[routes.length - 1].name;
      if (Object.values(REPO_TABS).includes(name)) {
        useRepoInfoStore.setState({ activeTab: name });
      }
    }
  }, [route]);

  const onChange = (tab: keyof RepoStackParamList) => {
    useRepoInfoStore.setState({ activeTab: tab });
    tab && navigation.navigate(tab);
  };

  return (
    <Wrapper screenWidth={width}>
      <TopRow screenWidth={width}>
        <RepoHeading />
        <RepoActionButtons />
      </TopRow>
      <TabNavigation
        onChange={onChange}
        activeTab={activeTab}
        tabs={createTabList({
          issuesCount: info?.openIssueCount,
          pullRequestsCount: info?.openPullRequestCount,
        })}
      />
    </Wrapper>
  );
};

export default RepoSubHeader;
