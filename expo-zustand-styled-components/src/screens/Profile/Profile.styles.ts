import styled from 'styled-components/native';
import { breakpoints } from '../../utils/breakpoints';

export const SafeAreaViewStyled = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const MainContentLayout = styled.View<{ screenWidth: number }>`
  width: 100%;
  height: 100%;
  ${({ screenWidth }) => {
    if (screenWidth >= breakpoints.tablet) {
      return `
        z-index: unset
      `;
    }
  }}
  padding-horizontal: ${({ screenWidth }) => (screenWidth > breakpoints.tablet ? '5%' : 0)};
  flex-direction: ${({ screenWidth }) => (screenWidth > breakpoints.tablet ? 'row' : 'column')};
`;

export const ProfileNavViewStyled = styled.View<{ isWeb?: boolean }>`
  background-color: #fff;
  ${({ isWeb }) => {
    if (isWeb) {
      return `
        padding-top: 40px;
      `;
    }
    return `
      padding-top: 16px;
      padding-bottom: 6px;
    `;
  }}
`;
