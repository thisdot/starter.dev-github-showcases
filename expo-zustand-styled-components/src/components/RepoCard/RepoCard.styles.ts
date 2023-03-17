import styled from 'styled-components/native';
import { breakpoints } from '../../utils/breakpoints';
import { colors } from '../../utils/style-variables';

const flex_row = `
  display: flex;
  flex-direction: row;
`;

export const Card = styled.View`
  ${flex_row};
  padding: 20px;
  min-width: 100%;
  max-width: 370px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray200};
`;

export const Content = styled.View`
  flex: 1;
`;

export const Heading = styled.TouchableOpacity`
  ${flex_row};
  gap: 8px;
  width: 100%;
  flex-wrap: wrap;
`;

export const LinkText = styled.Text<{ screenWidth: number }>`
  font-weight: 600;
  color: ${colors.blue600};
  font-size: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? 18 : 14)}px;
`;

export const StarBtn = styled.View`
  ${flex_row};
  height: 28px;
  border-width: 1px;
  border-radius: 4px;
  align-items: center;
  padding-horizontal: 6px;
  border-color: ${colors.gray300};
`;

export const MetaData = styled.View`
  ${flex_row};
  gap: 8px;
  flex-shrink: 1;
  margin-top: 8px;
  flex-wrap: wrap;
  align-items: center;
`;

export const Language = styled.View`
  ${flex_row};
  align-items: center;
`;

export const LanguageColor = styled.View<{ color?: string }>`
  width: 14px;
  height: 14px;
  margin-right: 4px;
  border-radius: 14px;
  background-color: ${({ color }) => color || '#ccc'};
`;

export const SocialWrapper = styled.View`
  ${flex_row};
  margin-left: 8px;
  align-items: center;
`;

export const DateWrapper = styled.View`
  ${flex_row};
  margin-left: 8px;
  align-items: center;
`;

export const MetaIcon = styled.View`
  ${flex_row};
  align-items: center;
`;

export const Description = styled.Text`
  margin-top: 8px;
`;
