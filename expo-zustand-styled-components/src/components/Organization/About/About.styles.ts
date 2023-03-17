import styled from 'styled-components/native';
import { colors } from '../../../utils/style-variables';

export const OrgInfoContainer = styled.View`
  gap: 6px;
  display: flex;
  padding: 16px;
  align-items: center;
  flex-direction: row;
`;

export const OrgLogoContainter = styled.View`
  padding: 1px;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${colors.gray200};
`;

export const OrgLogo = styled.Image`
  width: 32px;
  height: 32px;
`;

export const OrgName = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-left: 8px;
  line-height: 28px;
  color: ${colors.gray700};
`;
