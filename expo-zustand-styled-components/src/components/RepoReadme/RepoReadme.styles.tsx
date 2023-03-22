import styled from 'styled-components/native';
import { breakpoints } from '../../utils/breakpoints';
import { colors } from '../../utils/style-variables';

export const ReadmeContainer = styled.View`
  border-radius: 6px;
  border-width: 1px;
  border-color: ${colors.gray300};
`;

export const ReadmeHeader = styled.View`
  gap: 6px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${colors.gray300};
`;

export const ReadmeText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

export const ReadmeDiv = styled.View<{ screenWidth: number }>`
  padding: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? '24px 40px' : '8px 16px')};
`;
