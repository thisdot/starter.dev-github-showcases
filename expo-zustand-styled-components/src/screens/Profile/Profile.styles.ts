import styled from 'styled-components/native';
import { breakpoints } from '../../utils/breakpoints';

export const SafeAreaViewStyled = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const ContainerStyled = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const MainContentLayout = styled.View<{ screenWidth: number }>`
  flex: 1;
  width: 100%;
  flex-direction: ${({ screenWidth }) => (screenWidth > breakpoints.tablet ? 'row' : 'column')};
  padding-horizontal: ${({ screenWidth }) => (screenWidth > breakpoints.tablet ? '10%' : 0)};
`;

export const ContentLayout = styled.View<{ screenWidth: number }>`
  flex: 1;
  width: 100%;
  padding-left: ${({ screenWidth }) => (screenWidth > breakpoints.tablet ? '2.5%' : 0)};
`;

export const ProfileNavViewStyled = styled.View`
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #e1e4e8;
`;
