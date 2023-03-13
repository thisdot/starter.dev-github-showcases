import styled from 'styled-components/native';
import { breakpoints } from '../../../utils/breakpoints';

export const SafeAreaViewStyled = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const ContainerStyled = styled.ScrollView<{ screenWidth: number }>`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? '50px 15% 15%' : '10px 16px 16px')};
  flex-direction: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? 'column' : 'row')};
`;

export const MainContent = styled.View<{ screenWidth: number }>`
  flex: 1;
  margin-top: ${({ screenWidth }) => (screenWidth >= breakpoints.tablet ? 20 : 10)}px;
`;
