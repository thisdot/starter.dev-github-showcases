import { useWindowDimensions } from 'react-native';
import { Wrapper, TopRow, BottomRow } from './RepoSubHeader.styles';
import RepoHeading from '../RepoHeading/RepoHeading';
import RepoActionButtons from '../RepoActionButtons/RepoActionButtons';
import TabNavigation from '../TabNavigation/TabNavigation';

import { createTabList } from './tabList';

const RepoSubHeader = () => {
  const { width } = useWindowDimensions();
  return (
    <Wrapper>
      <TopRow screenWidth={width}>
        <RepoHeading />
        <RepoActionButtons />
      </TopRow>
      <BottomRow>
        <TabNavigation
          tabs={createTabList({
            issuesCount: 3,
            pullRequestsCount: 6,
          })}
        />
      </BottomRow>
    </Wrapper>
  );
};

export default RepoSubHeader;
