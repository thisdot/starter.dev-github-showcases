import { Container, TabContainer, Tab, TabText } from "./TabNavigation.styles";
import { useState } from "react";
import { colors } from '../../utils/style-variables';

const TabNavigation = ({tabs}) => {
  const [activeTab,] = useState('Code');
  // const {} = 

  return (
    <Container>
      <TabContainer horizontal={true}>
        {tabs.map(({ title, Icon, count }, index) => (
          <Tab key={index} isActive={activeTab === title} activeOpacity={0.5}>
            <Icon color={colors.gray700} />
            <TabText isActive={activeTab === title}>{title}</TabText>
            {typeof count === 'number' && count > 0 && <TabText isActive={activeTab === title}>{count}</TabText>}
          </Tab>
        ))}
      </TabContainer>
    </Container>
  );
};

export default TabNavigation;