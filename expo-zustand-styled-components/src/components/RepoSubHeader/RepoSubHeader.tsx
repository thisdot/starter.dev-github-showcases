import RepoHeading from '../RepoHeading/RepoHeading';
import TabNavigation from '../TabNavigation/TabNavigation';
import RepoActionButtons from '../RepoActionButtons/RepoActionButtons';

import { createTabList } from './tabList';
import { Wrapper, TopRow } from './RepoSubHeader.styles';

import { useRepoInfoStore, usePRAndIssueHeaderStore } from '../../hooks/stores';

import { RepoStackParamList } from '../../../types';

const RepoSubHeader = ({ width, navigation }) => {
  const { info, activeTab } = useRepoInfoStore();
  const { clearFilter, setActiveTab } = usePRAndIssueHeaderStore();

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
