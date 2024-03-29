import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';

export const Containter = styled.View`
  width: 100%;
  border-width: 1px;
  line-height: 20px;
  border-radius: 4px;
  background-color: #ffffff;
  border-color: ${colors.gray300};
`;

export const LinkText = styled.Text`
  color: ${colors.gray700};
`;

export const Cell = styled.View`
  padding: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray300};
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
