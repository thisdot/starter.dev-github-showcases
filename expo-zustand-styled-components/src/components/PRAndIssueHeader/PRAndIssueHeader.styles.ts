import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${colors.gray100};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${colors.gray300};
  flex-wrap: wrap;
  gap: 12px;
`;

export const Tabs = styled.View`
  gap: 12px;
  flex-direction: row;
`;

export const Tab = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const TabText = styled.Text<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? colors.gray600 : colors.gray900)};
  font-weight: ${({ isActive }) => (isActive ? '800' : '500')};
  font-size: 14px;
`;

export const Dropdowns = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
