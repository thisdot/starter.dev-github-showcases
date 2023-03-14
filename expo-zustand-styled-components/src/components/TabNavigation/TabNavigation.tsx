import {
  Container,
  TabContainer,
  Tab,
  TabText,
  CountText,
  CountView,
} from './TabNavigation.styles';
import { colors } from '../../utils/style-variables';
import { useRepoHeaderTabStore } from '../../hooks/stores';

const TabNavigation = ({ tabs }) => {
  const { activeTab, setActiveTab } = useRepoHeaderTabStore();

  return (
    <Container>
      <TabContainer horizontal={true}>
        {tabs.map(({ title, Icon, count }, index) => (
          <Tab
            key={index}
            isActive={activeTab === title}
            activeOpacity={0.5}
            onPress={() => setActiveTab(title)}>
            <Icon color={activeTab === title ? colors.gray700 : colors.gray500} />
            <TabText isActive={activeTab === title}>{title}</TabText>
            {typeof count === 'number' && count > 0 && (
              <CountView>
                <CountText>{count}</CountText>
              </CountView>
            )}
          </Tab>
        ))}
      </TabContainer>
    </Container>
  );
};

export default TabNavigation;
