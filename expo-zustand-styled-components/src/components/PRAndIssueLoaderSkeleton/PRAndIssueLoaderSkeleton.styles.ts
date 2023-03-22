import styled from 'styled-components/native';
import { colors } from '../../utils/style-variables';
import { breakpoints } from '../../utils/breakpoints';

type ScreenWidth = {
  screenWidth: number | undefined;
};

export const MainContainer = styled.View<ScreenWidth>`
  width: ${({ screenWidth }) => (screenWidth > breakpoints.tablet ? '80%' : '100%')};
  margin-horizontal: auto;
  margin-top: 40px;
`;

export const ContentContainer = styled.View`
  border: 1px solid ${colors.gray300};
  border-radius: 16px;
`;

export const LoadingContainer = styled.View`
  align-items: center;
  padding: 8px;
`;
