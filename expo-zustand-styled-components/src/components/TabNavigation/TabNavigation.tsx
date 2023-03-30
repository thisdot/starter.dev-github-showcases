import {
  Container,
  TabContainer,
  Tab,
  TabText,
  CountText,
  CountView,
} from './TabNavigation.styles';

import { colors } from '../../utils/style-variables';
import { SvgProps } from 'react-native-svg';
import { useWindowDimensions } from 'react-native';
import { breakpoints } from '../../utils/breakpoints';

interface TabNavigationProps {
  /**
   * @description Padding left for the container
   * @type number
   */
  pl?: number;
  tabs: {
    title: string;
    Icon: (props: SvgProps) => JSX.Element;
    count?: number;
  }[];
  activeTab: string;
  onChange?: (title: string) => void;
}

const TabNavigation = ({ pl, tabs, activeTab, onChange }: TabNavigationProps) => {
  const { width } = useWindowDimensions();

  return (
    <Container pl={pl}>
      <TabContainer
        horizontal
        contentContainerStyle={{
          flexGrow: width >= breakpoints.tablet ? 0 : 1,
          justifyContent: 'space-between',
        }}>
        {tabs.map(({ title, Icon, count }, index) => (
          <Tab
            key={index}
            activeOpacity={0.5}
            isActive={activeTab === title}
            onPress={() => onChange ? onChange(title) : {}}>
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
