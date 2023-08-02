import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';

export const ClearFilterWrapper = styled.TouchableOpacity`
  flex-direction: row;
  gap: 4px;
  margin-vertical: 16px;
  margin-left: 4px;
  align-items: center;
`;

export const IconContainer = styled.View`
  width: 16px;
  height: 16px;
  background-color: ${colors.gray500};
  border-radius: 4px;
`;

export const ClearText = styled.Text`
  font-size: 14px;
`;
