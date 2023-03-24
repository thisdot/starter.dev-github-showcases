import { useEffect } from 'react';

import RepoHeading from '../RepoHeading/RepoHeading';
import TabNavigation from '../TabNavigation/TabNavigation';
import RepoActionButtons from '../RepoActionButtons/RepoActionButtons';

import { createTabList } from './tabList';
import { Wrapper, TopRow } from './RepoSubHeader.styles';

import { REPO_TABS } from '../../utils/constants';

import { useRepoInfoStore, usePRAndIssueHeaderStore } from '../../hooks/stores';
import { RepoStackParamList } from '../../../types';

const RepoSubHeader = ({ route, width, navigation }) => {
  const { info, activeTab } = useRepoInfoStore();
  const { clearFilter, setActiveTab } = usePRAndIssueHeaderStore();

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
    clearFilter();
    setActiveTab('open');
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
