import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';
import { breakpoints } from '../../utils/breakpoints';

type ScreenWidth = {
  screenWidth: number | undefined;
};

export const Heading = styled.View<ScreenWidth>`
  gap: 6px;
  overflow: hidden;
  flex-direction: row;
  align-items: center;
  overflow: scroll;
  width: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? '50%' : '100%')};
`;

export const RepoContentWrapper = styled.View<ScreenWidth>`
  gap: 5px;
  flex-direction: row;
  align-items: center;
  ${({ screenWidth }) => {
    if (screenWidth >= breakpoints.tablet) {
      return `
        justify-content: center;
      `;
    } else {
      return `
        align-items: flex-start;
      `;
    }
  }};
`;

export const HeadingContent = styled.View`
  gap: 6px;
  margin-right: 6px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerLink = styled.Text<ScreenWidth>`
  color: ${colors.blue600};
  font-size: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? '20px' : '16px')};
`;

export const Separator = styled.Text`
  color: ${colors.gray600};
`;

export const NameLink = styled.Text<ScreenWidth>`
  font-weight: 600;
  color: ${colors.blue600};
  font-size: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? '20px' : '16px')};
`;

export const BadgePlaceholder = styled.View`
  width: 16px;
  height: 16px;
`;

export const IconPlaceholder = styled.View`
  width: 18px;
  height: 16px;
  opacity: 0.25;
  border-radius: 20px;
  background-color: ${colors.gray200};
`;
