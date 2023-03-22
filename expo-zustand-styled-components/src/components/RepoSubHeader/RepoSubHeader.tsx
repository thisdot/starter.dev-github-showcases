import { useWindowDimensions } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Wrapper, TopRow } from './RepoSubHeader.styles';
import RepoHeading from '../RepoHeading/RepoHeading';
import RepoActionButtons from '../RepoActionButtons/RepoActionButtons';
import TabNavigation from '../TabNavigation/TabNavigation';

import { createTabList } from './tabList';

import { useRepoInfoStore } from '../../hooks/stores';
import { RepoStackParamList } from '../../../types';

const RepoSubHeader = () => {
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation<NavigationProp<RepoStackParamList>>();
  const { info, activeTab } = useRepoInfoStore();

  const onChange = (tab: string, path?: keyof RepoStackParamList) => {
    useRepoInfoStore.setState({ activeTab: tab });
    path && navigate(path);
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
