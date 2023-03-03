import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';

const flex_row = `
  display: flex;
  flex-direction: row;
`;

export const Card = styled.View`
  ${flex_row};
  min-width: 100%;
  max-width: 370px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray200};
  padding-horizontal: 16px;
  padding-vertical: 16px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Badge = styled.View`
  border-radius: 14px;
  border-width: 1px;
  border-color: ${colors.gray300};
  padding-vertical: 1px;
  padding-horizontal: 6px;
  justify-content: center
  align-items: center;
  margin-horizontal: 12px;
`;

export const BadgeText = styled.Text`
  color: ${colors.gray400};
  font-size: 12px;
  text-align: center;
`;

export const Heading = styled.View`
  ${flex_row};
  width: 100%;
  flex-wrap: wrap;
`;

export const Link = styled.Text`
  color: ${colors.blue600};
  font-size: 18px;
  text-decoration-line: underline;
`;

export const StarBtn = styled.View`
  ${flex_row};
  align-items: center;
  border-width: 1px;
  border-color: ${colors.gray300};
  height: 28px;
  padding-horizontal: 6px;
  border-radius: 4px;
`;

export const MetaData = styled.View`
  ${flex_row};
  align-items: center;
  margin-top: 8px;
  flexshrink: 1;
  flex-wrap: wrap;
`;

export const Language = styled.View`
  ${flex_row};
  align-items: center;
`;

export const LanguageColor = styled.View<{ color?: string }>`
  border-radius: 14px;
  width: 14px;
  height: 14px;
  background-color: ${({ color }) => color || '#ccc'};
  margin-right: 4px;
`;

export const SocialWrapper = styled.View`
  ${flex_row};
  align-items: center;
  margin-left: 8px;
`;

export const DateWrapper = styled.View`
  ${flex_row};
  align-items: center;
`;

export const MetaIcon = styled.View<{ isFirstChild?: boolean }>`
  ${flex_row};
  align-items: center;
  margin-right: ${({ isFirstChild }) => (isFirstChild ? '0px' : '12px')};
`;

export const Description = styled.Text`
  margin-top: 8px;
`;
