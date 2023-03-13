import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';

export const Container = styled.View`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${colors.gray200};
`;

export const TabContainer = styled.ScrollView`
  flex-direction: row;
  margin-bottom: -2px;
`;

export const Tab = styled.TouchableOpacity<{ isActive: boolean }>`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({ isActive }) => (isActive ? 'orange' : 'transparent')};
  padding: 6px;
  gap: 4px;
  margin-right: 4px;
`;
export const CountView = styled.View`
  background-color: ${colors.gray200};
  margin-left: 8px;
  padding: 4px 6px;
  border-radius: 20px;
`;

export const CountText = styled.Text`
  color: ${colors.gray800};
  font-size: 12px;
`;

export const TabText = styled.Text<{ isActive: boolean }>`
  font-weight: ${({ isActive }) => (isActive ? '800' : '500')};
  margin-left: 3px;
`;
