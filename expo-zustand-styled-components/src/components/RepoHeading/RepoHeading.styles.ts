import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';
import { breakpoints } from '../../utils/breakpoints';

type ScreenWidth = {
  screenWidth: number | undefined;
};

export const Heading = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  align-items: center;
`;

export const HeadingContent = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  margin-right: 6px;
`;

export const OwnerLink = styled.Text<ScreenWidth>`
  color: ${colors.blue600};
   text-decoration-line: underline;
   font-size: ${({screenWidth}) => screenWidth >= breakpoints.tablet ? '20px' : '18px'};
`;

export const Separator = styled.Text`
  color: ${colors.gray600};
`;

export const NameLink = styled.Text<ScreenWidth>`
  color: ${colors.blue600};
  text-decoration-line: underline;
  font-size: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? '20px' : '18px')};
  font-weight: 700;
`;

export const BadgePlaceholder = styled.View`
  width: 16px;
  height: 16px;
`;

export const IconPlaceholder = styled.View`
  width: 18px;
  height: 16px;
  background-color: ${colors.gray200};
  border-radius: 20px;
  opacity: 0.25;
`;